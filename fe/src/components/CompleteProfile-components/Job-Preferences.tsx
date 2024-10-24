'use client';

import { useEffect, useState } from 'react';
import { Container } from '../assets/Container';
import { api } from '@/lib';

import { WorkDetailsModal } from './WorkDetailsModal';
import { SubCategoryCard } from './SubCategoriesCard';

export const JobPreference = () => {
  type SubCategory = {
    _id: string;
    subCategoryName: string;
    mainCategoryId: string; // This links the subcategory to its main category
  };

  type MainCategory = {
    _id: string;
    subCategories: SubCategory[];
    name: string;
  };

  const [mainCategories, setMainCategories] = useState<MainCategory[]>([]);
  const [authorization, setAuthorization] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<MainCategory | null>(
    null
  );
  const [selectedSubCategories, setSelectedSubCategories] = useState<
    SubCategory[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSubCategory, setActiveSubCategory] =
    useState<SubCategory | null>(null);

  // Get Authorization token from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthorization(localStorage.getItem('token'));
    }
  }, []);

  // Fetch main categories and set the first category as default
  useEffect(() => {
    const getMainCategories = async () => {
      if (!authorization) {
        console.error('Authorization token is missing');
        return;
      }

      try {
        const response = await api.get(
          'http://localhost:3001/mainCategory/get',
          {
            headers: {
              Authorization: `Bearer ${authorization}`,
            },
          }
        );

        setMainCategories(response.data);

        // Automatically select the first category after fetching categories
        if (response.data.length > 0) {
          setSelectedCategory(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    if (authorization) {
      getMainCategories();
    }
  }, [authorization]);

  // Handle checkbox selection for subcategories
  const handleSubCategorySelect = (subcategory: SubCategory) => {
    // If the subcategory is already selected, remove it, otherwise add it
    if (selectedSubCategories.find((sc) => sc._id === subcategory._id)) {
      // Uncheck subcategory, remove from selected list
      setSelectedSubCategories((prev) =>
        prev.filter((sc) => sc._id !== subcategory._id)
      );
    } else {
      // Add subcategory to selected list
      setSelectedSubCategories((prev) => [...prev, subcategory]);
    }
  };

  // Handle card click for subcategories
  const handleCardClick = (subcategory: SubCategory) => {
    setActiveSubCategory(subcategory);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container className="bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10">
        <div className="max-w-4xl w-full p-6 bg-white shadow-lg rounded-lg">
          {/* Header */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Great, so what kind of work are you here to do?
          </h1>
          <p className="text-gray-500 mb-6">
            Don’t worry, you can change these choices later on.
          </p>

          {/* Categories and Subcategories */}
          <div className="grid grid-cols-2 gap-6">
            {/* Categories */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-3">
                Select 1 category
              </h2>
              <ul className="space-y-2">
                {mainCategories.map((category) => (
                  <li
                    key={category._id}
                    className={`cursor-pointer p-2 rounded-lg ${
                      selectedCategory?._id === category._id
                        ? 'bg-[#1167b1] text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subcategories */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-3">
                Now, select your specialties
              </h2>
              <ul className="space-y-2">
                {selectedCategory ? (
                  selectedCategory.subCategories.map((subcategory) => (
                    <li
                      key={subcategory._id}
                      className="p-2 bg-gray-100 rounded-lg text-gray-700"
                    >
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-green-500 mr-3"
                          checked={selectedSubCategories.some(
                            (sc) => sc._id === subcategory._id
                          )}
                          onChange={(e) => {
                            handleSubCategorySelect(subcategory);
                          }}
                        />
                        {subcategory.subCategoryName}
                      </label>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">
                    Please select a category to see the specialties.
                  </p>
                )}
              </ul>
            </div>
          </div>

          {/* Display Selected Subcategories */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Selected Subcategories
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {selectedSubCategories.map((subcategory) => (
                <SubCategoryCard
                  key={subcategory._id}
                  subCategory={subcategory.subCategoryName}
                  onEdit={() => handleCardClick(subcategory)}
                />
              ))}
            </div>
          </div>

          {/* Modal for Work Details */}
          <WorkDetailsModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </Container>
  );
};
