import { GrGallery } from 'react-icons/gr';

import Image from 'next/image';

const workPhoto = [
  {
    img: '/picture/how-it-works.png',
  },
  {
    img: '/picture/wp-2.jpg',
  },
  {
    img: '/picture/wp-1.jpg',
  },
  {
    img: '/picture/wp-2.jpg',
  },
  {
    img: '/picture/wp-2.jpg',
  },
  {
    img: '/picture/how-it-works.png',
  },
  {
    img: '/picture/wp-2.jpg',
  },
];

export const WorkPhotoComponent = () => {
  return (
    <div className="mt-6">
      <div className="text-[#1b1e1d] pb-2 font-semibold flex gap-x-1 items-center">
        <GrGallery />
        Гүйцэтгэсэн ажлын зургууд
      </div>
      <div className="flex gap-x-2 mt-2">
        {workPhoto.slice(0, 4).map((item, index) => {
          return (
            <div
              key={index}
              className="relative w-[108px] h-[108px] cursor-pointer "
            >
              <Image
                src={item.img}
                alt="work photos"
                fill
                className="rounded-lg hover:border-[2px] hover:border-[#1066b2]"
              />
            </div>
          );
        })}
        <div className="relative w-[108px] h-[108px]">
          <Image
            src={workPhoto[5]?.img}
            alt="work photos"
            fill
            className="rounded-lg"
          />
          <div className="bg-black w-full h-full opacity-70 flex justify-center items-center text-white text-2xl  rounded-lg hover:border-[2px] hover:border-[#1167b1]">
            +{workPhoto.length - 3}
          </div>
        </div>
      </div>
    </div>
  );
};
