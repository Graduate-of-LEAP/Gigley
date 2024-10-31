'use client';

import { Container } from '../assets/Container';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';
import { api } from '@/lib';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FlexibleWork = () => {
  type Category = {
    _id: string;
    name: string;
  };

  const [authorization, setAuthorization] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null); // State to track the selected area
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // State to track selected category
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const router = useRouter(); // Use Next.js useRouter hook

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
          'http://localhost:3001/mainCategory/get',
          {
            headers: { Authorization: `Bearer ${authorization}` },
          }
        );
        setMainCategories(response.data);
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

  const handleSubmit = async () => {
    if (!selectedArea) {
      alert('Please select an area.');
      return;
    }

    try {
      await api.post(
        'http://localhost:3001/submitWorkDetails/saveLocation', // Assuming this route exists
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
            Earn Money Your Way
          </h2>
          <p className="text-gray-700">
            See how much you can make tasking on TaskRabbit. Start by selecting
            your area and a category to explore the potential earnings.
          </p>

          {/* Select Area */}
          <div className="flex flex-col gap-2">
            <label htmlFor="area" className="text-sm font-medium text-gray-700">
              Select Your Area
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
              Choose a Category
            </label>
            <Select onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-[180px]" aria-label="Select Category">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {mainCategories.map((item) => (
                  <SelectItem key={item._id} value={item._id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p className="text-lg font-bold text-green-600">$50 per hour</p>

          {/* CTA Button */}
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-500 transition"
            onClick={handleSubmit}
          >
            Get Started
          </button>
          <p>Already have an account? Sign in</p>
        </div>
      </div>
    </Container>
  );
};
