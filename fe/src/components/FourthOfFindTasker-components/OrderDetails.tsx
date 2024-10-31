import { Container } from '../assets/Container';
import Image from 'next/image';
import {
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaRuler,
  FaCar,
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export const OrderDetails = () => {
  return (
    <Container className="bg-white">
      <div className="border w-[320px] mt-[32px] p-4 rounded-lg shadow-md">
        {/* Tasker Info */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold">Нүүлгэлтэнд туслах жолооч</h2>
          <Image
            src="/picture/profile.png"
            alt="Tasker profile picture"
            width={72}
            height={72}
            className="rounded-full mx-auto mt-2"
          />
          <p className="font-semibold">Batar T.</p>
        </div>

        {/* Task Details */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <FaRegCalendarAlt className="mr-2" />
            <p>Tue, Oct 22 at 11:30am</p>
          </div>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <p>Улаанбаатар, Багануур</p>
          </div>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <p>9110 Katy Freeway, Houston, Texas 77055</p>
          </div>
          <div className="flex items-center mb-2">
            <FaRuler className="mr-2" />
            <p>Small - Est. 1hr</p>
          </div>
          <div className="flex items-center mb-2">
            <FaCar className="mr-2" />
            <p>Task requires a car</p>
          </div>
          {/* <Button className="bg-green-500 text-white font-bold py-2 px-4 mt-4 rounded-lg">
            Edit Task
          </Button> */}

          <Button variant="outline">Edit Task</Button>
        </div>

        {/* Task Details Input */}
        <div className="mt-4 ">
          <label className="block text-sm font-semibold mb-2">
            Your task details
          </label>
          <textarea
            className="w-full p-2 border rounded-md h-[130px]"
            placeholder="Enter task details"
          ></textarea>
          <p className="text-red-500 mt-1">Бөглөнө үү !!!</p>
        </div>

        {/* Price Details */}
        <div className="mt-4">
          <h3 className="font-bold text-lg">Price Details</h3>
          <div className="flex justify-between mt-2">
            <p>Hourly Rate</p>
            <p>$98.07/hr</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>Trust and Support Fee</p>
            <p>$36.10/hr</p>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <p>Total Rate</p>
            <p>$134.18/hr</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-4 text-sm">
          <p>
            You may see a temporary hold on your payment method in the amount of
            your Taskers hourly rate of $98.07. You can cancel at any time.
            Tasks cancelled less than 24 hours before the start time may be
            billed a{' '}
            <span className="text-green-600 underline">cancellation fee</span>{' '}
            of one hour. Tasks have a one-hour minimum.
          </p>
          <p className="mt-2">
            Please follow all public health regulations in your area.{' '}
            <span className="text-green-600 underline">Learn more</span>.
          </p>
        </div>
      </div>
    </Container>
  );
};
