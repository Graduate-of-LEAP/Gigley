import { useEffect, useState } from 'react';
import { Container } from '../assets/Container';
import { SortedBy } from './SortedBy';
import { api } from '@/lib';
import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';
import { useRouter, useSearchParams } from 'next/navigation';
import { Slider } from '@radix-ui/react-slider';
import { IoTrophySharp } from 'react-icons/io5';
import { MdOutlineStar } from 'react-icons/md';
import { TaskerDetailedProfileCard } from '../assets/TaskerDetailedProfileCard';
import { toast } from 'react-toastify';

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

export type WorkDetailType = {
  _id: string;
  taskerId: Tasker;
  subCategoryId: string;
  taskName: string;
  images: string[];
  hourlyRate: string;
  vehicles: string;
  tools: string;
  skillsAndExperience: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const MainBody = () => {
  const [workDetails, setWorkDetails] = useState<WorkDetailType[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sliderValues, setSliderValues] = useState([10, 105]);

  const getTaskersByWork = async () => {
    try {
      const response = await api.get('/getAllTasker/taskersWithWork', {
        params: { workId: subCategoryId },
      });
      setWorkDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTaskersByWork();
  }, []);

  const size = searchParams.get('size');
  const subCategoryId = searchParams.get('subCategoryId');
  const district = searchParams.get('district');
  const address = searchParams.get('address');
  const addInfo = searchParams.get('addInfo');
  const userId = searchParams.get('userId');

  const createTask = async (taskerId: string) => {
    try {
      await api.post('/task/create', {
        taskSize: size,
        location: address,
        description: addInfo,
        customerId: userId,
        taskerId,
        district,
        subCategoryId,
      });
      toast.success('Tasker луу амжилттай хүсэлт илгээлээ');
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="bg-[#f4f7f6] h-fit">
      <SortedBy />
      <div className="flex gap-x-6 justify-center">
        <div className="border border-[#848484] p-6 w-fit h-fit rounded-2xl bg-white">
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
        {/* <FilterSideBar /> */}
        {/* <TaskerProfileCard /> */}

        <div className="flex-col gap-y-3">
          {workDetails.map((detail, index) => (
            <div
              key={index}
              className="w-fit h-fit flex gap-x-6 p-6 border border-[#848484] rounded-2xl bg-white mb-[24px]"
            >
              <div className="flex flex-col items-center">
                <div className="w-[204px] h-[204px] bg-gray-700 rounded-full relative flex">
                  <img
                    src={detail.taskerId?.profileImage}
                    alt="profile pic"
                    className="rounded-full"
                  />
                </div>

                <div className="text-[#1167b1] font-semibold cursor-pointer py-2 text-center">
                  View Profiles & <br /> Reviews
                </div>

                <button
                  onClick={() => createTask(detail.taskerId._id)}
                  className="py-3 px-6 bg-[#1167b1] text-white font-semibold rounded-full cursor-pointer"
                >
                  Hire tasker
                </button>
              </div>

              <div className="flex-1">
                <div className="">
                  <div className="text-[24px] text-[#1f1f1f] font-bold flex justify-between">
                    <div className="cursor-pointer hover:text-[#1167b1]">
                      {detail.taskerId?.firstName} {detail.taskerId?.lastName}
                    </div>
                    <div className="font-semibold">{}</div>
                  </div>

                  <div className="flex gap-x-2 mt-2">
                    <div className="flex gap-1 py-[3px] px-[4px] bg-[#f4e6f8] items-center text-[12px] text-[#8551b1] rounded-sm w-fit font-semibold uppercase">
                      <IoTrophySharp />
                      <div>Tag</div>
                    </div>

                    <div className="flex gap-1 py-[3px] px-[4px] bg-[#dbfff2] items-center text-[12px] text-[#1167b1] rounded-sm w-fit font-semibold uppercase">
                      rating
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-x-1">
                      <MdOutlineStar className="text-[18px]" />
                      <div className="flex text-[#1a1e1d] gap-x-1">
                        <div>avarage rating</div>
                        <div>(total Reviews)</div>
                      </div>
                    </div>

                    <div className="text-[#2a9df4] font-semibold">
                      total task,
                    </div>
                    <div className="text-[#595c5b]">category tasks overall</div>
                  </div>

                  <div className="text-[#595c5b] bg-[#f4f7f6] p-3 rounded-md mt-6">
                    <div className="font-bold mb-2">How I can help:</div>
                    <div className="w-[480px]">
                      {detail.skillsAndExperience}
                    </div>
                    <div className="text-[#2a9df4] font-semibold">
                      <TaskerDetailedProfileCard item={detail} />
                    </div>
                  </div>

                  {/* {reviewData.slice(0, 1).map((review, index) => (
                    <OneReviewComponent key={index} item={review} />
                  ))} */}
                </div>
                {/* <TaskerIntroComponent key={index} item={detail} /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
