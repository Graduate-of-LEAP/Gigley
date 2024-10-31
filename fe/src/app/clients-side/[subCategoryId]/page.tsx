'use client';
import { Container } from '@/components/assets/Container';
import { Header } from '@/components/assets/Header';
import { useParams } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/context/auth.customerProvider';

const districts = [
  'Налайх',
  'Баянзүрх',
  'Баянгол',
  'Чингэлтэй',
  'Сонгинохайрхан',
  'Сүхбаатар',
  'Багахангай',
  'Багануур',
  'Хан-Уул',
];

type SubCatId = {
  subCategoryId: string;
};

export default function () {
  const { subCategoryId } = useParams<SubCatId>();
  const [size, setSize] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [addInfo, setAddInfo] = useState<string>('');
  const { user } = useAuth();
  const router = useRouter();
  const userId = user?.id;
  const handleSubmit = () => {
    console.log('Submitting:', {
      size,
      subCategoryId,
      district,
      userId,
      address,
      addInfo,
    });

    const params: Record<string, string> = {
      size,
      subCategoryId,
      district,
      address,
      addInfo,
    };

    if (userId) {
      params.userId = userId;
    }

    const queryParams = new URLSearchParams(params).toString();
    router.push(`/clients-side/SecondOfFindTasker?${queryParams}`);
  };
  return (
    <>
      <Header />
      <Container className="bg-white w-full mx-auto rounded-lg">
        <div className="flex items-center gap-2 mb-3 text-gray-700">
          <h2 className="text-lg font-semibold">Describe Your Task</h2>
        </div>
        <p className="text-sm text-gray-700">
          Tell us about your task. We use these details to show Taskers in your
          area who fit your needs.
        </p>
        <div>
          <p className="mb-4 text-sm text-gray-700">
            Оршин суугаа дүүргээ сонгоно уу
          </p>
          <div>
            <div className="mb-6">
              <Select onValueChange={(value) => setDistrict(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Дүүргээ сонгоно уу" />
                </SelectTrigger>
                <SelectContent>
                  {districts.map((dist, i) => (
                    <SelectItem key={i} value={dist}>
                      {dist}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-600 text-sm mb-2"
                htmlFor="apartmentNumber"
              >
                Дэлгэрэнгүй хаяг
              </label>
              <input
                id="apartmentNumber"
                type="text"
                placeholder="Хаяг"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-4">Task Options</h2>
        <p className="text-sm text-gray-700 mb-4">How big is your task?</p>
        <div className="space-y-4 mb-6">
          <RadioGroup
            defaultValue=""
            onValueChange={(value: string) => setSize(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="small" id="option-one" />
              <Label htmlFor="option-one">Бага</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="option-two" />
              <Label htmlFor="option-two">Дунд</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="option-three" />
              <Label htmlFor="option-two">Их</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Tell Us the Details of Your Task
          </h2>
          <p className="text-sm text-gray-700">
            Start the conversation and tell your Tasker what you need done. This
            helps us show you only qualified and available Taskers for the job.
            Don’t worry, you can edit this later.
          </p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="taskDetails"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            Task Details
          </label>
          <textarea
            id="taskDetails"
            value={addInfo}
            onChange={(e) => setAddInfo(e.target.value)}
            placeholder="Describe the task you need help with..."
            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
          ></textarea>
          <p className="text-xs text-gray-500 mt-2">
            If you need two or more Taskers, please post additional tasks for
            each Tasker needed.
          </p>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-3 rounded-lg w-fit hover:bg-blue-600 transition duration-200"
        >
          See Taskers & Prices
        </button>
      </Container>
    </>
  );
}
