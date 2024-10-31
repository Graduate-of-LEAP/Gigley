import { GrGallery } from 'react-icons/gr';

import Image from 'next/image';

interface WorkPhotoComponentProps {
  images: string[];
}

export const WorkPhotoComponent = ({ images }: WorkPhotoComponentProps) => {
  return (
    <div className="mt-6">
      <div className="text-[#1b1e1d] pb-2 font-semibold flex gap-x-1 items-center">
        <GrGallery />
        Гүйцэтгэсэн ажлын зургууд
      </div>
      <div className="flex gap-x-2 mt-2">
        {images?.slice(0, 4).map((image, index) => {
          return (
            <div
              key={index}
              className="relative w-[108px] h-[108px] cursor-pointer "
            >
              <Image
                src={image}
                alt="work photos"
                fill
                className="rounded-lg hover:border-[2px] hover:border-[#1066b2]"
              />
            </div>
          );
        })}
        <div className="relative w-[108px] h-[108px]">
          <Image
            src={images[1]}
            alt="work photos"
            fill
            className="rounded-lg"
          />
          <div className="bg-black w-full h-full opacity-70 flex justify-center items-center text-white text-2xl  rounded-lg hover:border-[2px] hover:border-[#1167b1]">
            +{images.length - 3}
          </div>
        </div>
      </div>
    </div>
  );
};
