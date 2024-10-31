'use client';

import { useEffect, useState } from 'react';
import { Container } from '../assets/Container';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { api } from '@/lib';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Category = {
  _id: string;
  subCategoryName: string;
};

export const FlexibleWork = () => {
  const [authorization, setAuthorization] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const [averageHourlyRate, setAverageHourlyRate] = useState<number | string>(
    'мэдээлэл олдсонгүй'
  );
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthorization(localStorage.getItem('token'));
    }
  }, []);

  useEffect(() => {
    const getMainCategories = async () => {
      if (!authorization) return;

      try {
        const response = await api.get(
          'http://localhost:3001/subCategory/get',
          {
            headers: { Authorization: `Bearer ${authorization}` },
          }
        );
        setSubCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    if (authorization) {
      getMainCategories();
    }
  }, [authorization]);

  const handleAreaChange = (value: string) => {
    setSelectedArea(value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const calculateAverageHourlyRate = async () => {
    if (!selectedArea || !selectedCategory) {
      setAverageHourlyRate('');
      return;
    }

    try {
      const response = await api.get(
        '/workDetails/getWorkDetailsBySubcategory',
        {
          headers: { Authorization: `Bearer ${authorization}` },
          params: { location: selectedArea, subCategoryId: selectedCategory },
        }
      );

      if (response.data.averageHourlyRate) {
        setAverageHourlyRate(response.data.averageHourlyRate);
      } else if (!response.data.averageHourlyRate) {
        toast.error('Ийм мэдээлэл олдсонгүй');
        setAverageHourlyRate('');
      }
    } catch (error) {
      console.error('Error calculating average hourly rate:', error);
      setAverageHourlyRate('');
    }
  };

  useEffect(() => {
    calculateAverageHourlyRate();
  }, [selectedArea, selectedCategory]);

  const handleSubmit = async () => {
    if (!selectedArea) {
      alert('Please select an area.');
      return;
    }

    try {
      await api.post(
        'http://localhost:3001/submitWorkDetails/saveLocation',
        { location: selectedArea },
        { headers: { Authorization: `Bearer ${authorization}` } }
      );
      toast.success('Таны байршил амжилттай бүртгэгдлээ');
      router.push('/tasker-side/CompleteProfile/PreferencesJob');
    } catch (error) {
      console.error('Error saving location:', error);
    }
  };

  return (
    <Container className="bg-white py-12">
      {/* Toast container to display notifications */}
      <ToastContainer />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">
        <div className="lg:w-1/2">
          <img
            src="https://www.taskrabbit.com/v3/assets/hero_landing-fdeb7ef8f1a4361ec76f75d007d79546.jpg"
            alt="TaskRabbit Work"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-1/3 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Мөнгө олж эхэлцгээе
          </h2>
          <p className="text-gray-700">
            Та хэр их мөнгө олох боломжтойг харцгаая. Хэр их мөнгө олох
            боломжтой олж мэдэхийн тулд та өөрийн оршин суугаа дүүрэг болон ямар
            төрлийн ажил хийх боломжтойгоо сонгоорой.
          </p>

          {/* Select Area */}
          <div className="flex flex-col gap-2">
            <label htmlFor="area" className="text-sm font-medium text-gray-700">
              Оршин суугаа дүүрэгээ сонгоорой
            </label>
            <Select onValueChange={handleAreaChange}>
              <SelectTrigger className="w-[180px]" aria-label="Select Area">
                <SelectValue placeholder="Select Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Чингэлтэй дүүрэг">
                  Чингэлтэй дүүрэг
                </SelectItem>
                <SelectItem value="Хан-Уул дүүрэг">Хан-Уул дүүрэг</SelectItem>
                <SelectItem value="Сүхбаатар дүүрэг">
                  Сүхбаатар дүүрэг
                </SelectItem>
                <SelectItem value="Баянгол дүүрэг">Баянгол дүүрэг</SelectItem>
                <SelectItem value="Багануур дүүрэг">Багануур дүүрэг</SelectItem>
                <SelectItem value="Баянзүрх дүүрэг">Баянзүрх дүүрэг</SelectItem>
                <SelectItem value="Сонгинохайрхан дүүрэг">
                  Сонгинохайрхан дүүрэг
                </SelectItem>
                <SelectItem value="Багахангай дүүрэг">
                  Багахангай дүүрэг
                </SelectItem>
                <SelectItem value="Налайх дүүрэг">Налайх дүүрэг</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select Category */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700"
            >
              Өөрийн ур хийж чаддаг ажлын чиглэлээ сонгоно уу!
            </label>
            <Select onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-[180px]" aria-label="Select Category">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {subCategories.map((item) => (
                  <SelectItem key={item._id} value={item._id}>
                    {item.subCategoryName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p className="text-lg font-bold text-green-600">
            {averageHourlyRate !== null
              ? `${averageHourlyRate}₮ нэг цагийн үнэлгээ`
              : ''}
          </p>

          {/* CTA Button */}
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-500 transition"
            onClick={handleSubmit}
          >
            Эхлүүлэх
          </button>
        </div>
      </div>
    </Container>
  );
};
