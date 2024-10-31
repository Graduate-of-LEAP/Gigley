import React from 'react';
import { api } from '@/lib';

type ImageUploaderProps = {
  images: string[];
  setImages: (images: string[]) => void;
  Authorization: string | null;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({
  images,
  setImages,
  Authorization,
}) => {
  const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('image', file);

      try {
        if (!Authorization) {
          console.error('Authorization token is missing');
          return;
        }

        const response = await api.post(
          'http://localhost:3001/upload',
          formData,
          {
            headers: {
              Authorization: `Bearer ${Authorization}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        const imageUrl = response.data.secure_url;
        setImages([...images, imageUrl]);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg  bg-white w-full h-full">
      <label className="block text-gray-700 font-medium mb-4">
        Өмнөх гүйцэтгэсэн ажлынхаа зургуудыг оруулна уу!
      </label>
      <div className="flex space-x-4 ">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-24 h-24 border border-dashed border-gray-300 "
          >
            <img
              src={image}
              alt={`uploaded ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <input
          type="file"
          onChange={handleAddImage}
          className="w-24 h-24  hover:bg-gray-300 border border-dashed border-gray-300 rounded-sm flex justify-center items-center"
        />
      </div>
    </div>
  );
};

export default ImageUploader;
