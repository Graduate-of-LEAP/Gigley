'use client';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

export const FilterSideBar = () => {
  const timeData = [
    {
      time: "I'm Flexible",
    },
    {
      time: '8:00am',
    },
    {
      time: '8:30am',
    },
    {
      time: '9:00am',
    },
    {
      time: '9:30am',
    },
    {
      time: '10:00am',
    },
    {
      time: '10:30am',
    },
    {
      time: '11:00am',
    },
    {
      time: '11:30am',
    },
    {
      time: '12:00pm',
    },
    {
      time: '12:30pm',
    },
    {
      time: '1:00pm',
    },
    {
      time: '1:30pm',
    },
    {
      time: '2:00pm',
    },
    {
      time: '2:30pm',
    },
    {
      time: '3:00pm',
    },
    {
      time: '3:30pm',
    },
    {
      time: '4:00pm',
    },
    {
      time: '4:30pm',
    },
    {
      time: '5:00pm',
    },
    {
      time: '5:30pm',
    },
    {
      time: '6:00pm',
    },
    {
      time: '6:30pm',
    },
    {
      time: '7:00pm',
    },
    {
      time: '7:30pm',
    },
    {
      time: '8:00pm',
    },
    {
      time: '8:30pm',
    },
    {
      time: '9:00pm',
    },
    {
      time: '9:30pm',
    },
  ];

  const [sliderValues, setSliderValues] = useState([10, 105]);
  return (
    <div className="border border-[#848484] p-6 w-fit rounded-2xl bg-white">
      <div>
        <div className="text-[#1e1e1e] font-bold mb-6">Date</div>
        <div className="flex gap-x-2">
          <div>
            <div className="w-[155px] py-2 border border-[#848484] rounded-full font-semibold text-[#2d3c2f] text-center hover:border-[#1167b1] hover:bg-blue-50 cursor-pointer">
              Today
            </div>
            <div className="w-[155px] py-2 border border-[#848484] rounded-full font-semibold text-[#2d3c2f] text-center mt-2 hover:border-[#1167b1] hover:bg-blue-50 cursor-pointer">
              Within A Week
            </div>
          </div>

          <div>
            <div className="w-[155px] py-2 border border-[#848484] rounded-full font-semibold text-[#2d3c2f] text-center hover:border-[#1167b1] hover:bg-blue-50 cursor-pointer">
              Within 3 Days
            </div>
            <div className="w-[155px] py-2 border border-[#848484] rounded-full font-semibold text-[#2d3c2f] text-center mt-2 hover:border-[#1167b1] hover:bg-blue-50 cursor-pointer">
              Choose Dates
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-t-[#848484] py-6 mt-6">
        <div className="text-[#1e1e1e] font-bold mb-5">Time of day</div>
        <div className="flex flex-col gap-y-1">
          <div className="flex gap-x-3 items-center cursor-pointer">
            <input type="checkbox"></input>
            <div>Morning (8am - 12pm)</div>
          </div>
          <div className="flex gap-x-3 items-center cursor-pointer">
            <input type="checkbox"></input>
            <div>Afternoon (12pm - 5pm)</div>
          </div>
          <div className="flex gap-x-3 items-center cursor-pointer">
            <input type="checkbox"></input>
            <div>Evening (5pm - 9:30pm)</div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center w-full gap-2 mb-5">
          <hr className="flex-grow border-t border-[#848484]"></hr>
          <div className=" ">or choose a specific time</div>
          <hr className="flex-grow border-t border-[#848484]"></hr>
        </div>

        <select className="w-full px-5 py-3 rounded-full border border-[#848484] hover:border-[#1167b1] hover:bg-blue-50 cursor-pointer">
          {timeData.map((item, index) => {
            return <option key={index}>{item.time}</option>;
          })}
        </select>
      </div>

      <div className="border-t border-t-[#848484] py-6 mt-6">
        <div className="text-[#1e1e1e] font-bold mb-5">Price</div>

        <Slider
          defaultValue={[10, 150]}
          min={10}
          max={150}
          step={1}
          className="w-full h-3 bg-[#2c665d] rounded-lg "
          onValueChange={(newValues) => setSliderValues(newValues)}
        />

        <div className="flex justify-between text-sm mt-2">
          <span>${sliderValues[0]}</span>
          <span>${sliderValues[1]}+</span>
        </div>

        <div className="text-center mt-4">
          The average hourly rate is{' '}
          <span className="font-bold">
            ${((sliderValues[0] + sliderValues[1]) / 2).toFixed(2)}/hr
          </span>
        </div>
      </div>

      <div className="border-t border-t-[#848484] py-6 mt-6">
        <div className="text-[#1e1e1e] font-bold mb-5">Tasker type</div>
        <div className="flex flex-col gap-y-1">
          <div className="flex gap-x-3 items-center cursor-pointer">
            <input type="checkbox"></input>
            <div className="text-[18px]">Elite Tasker</div>
          </div>
          <div className="flex gap-x-3 items-center cursor-pointer">
            <input type="checkbox"></input>
            <div className="text-[18px]">Great value</div>
          </div>
        </div>
      </div>
    </div>
  );
};
