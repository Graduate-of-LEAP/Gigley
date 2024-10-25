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
    mainCategoryId: string;
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
  const [workDetails, setWorkDetails] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSubCategory, setActiveSubCategory] =
    useState<SubCategory | null>(null);
  const [editingWorkDetails, setEditingWorkDetails] = useState<any | null>(
    null
  );

  console.log('editingWorkDetails', editingWorkDetails);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthorization(localStorage.getItem('token'));
    }
  }, []);

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
            headers: { Authorization: `Bearer ${authorization}` },
          }
        );
        setMainCategories(response.data);

        if (response.data.length > 0) {
          setSelectedCategory(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    if (authorization) {
      getMainCategories();
      fetchUpdatedWorkDetails();
    }
  }, [authorization]);

  const fetchUpdatedWorkDetails = async () => {
    if (!authorization) {
      console.error('Authorization token is missing');
      return;
    }

    try {
      const response = await api.get('http://localhost:3001/workDetails/get', {
        headers: { Authorization: `Bearer ${authorization}` },
      });
      setWorkDetails(response.data);
    } catch (error) {
      console.error('Error fetching updated work details:', error);
    }
  };

  const handleSubCategorySelect = (subcategory: SubCategory) => {
    if (selectedSubCategories.find((sc) => sc._id === subcategory._id)) {
      setSelectedSubCategories((prev) =>
        prev.filter((sc) => sc._id !== subcategory._id)
      );
    } else {
      setSelectedSubCategories((prev) => [...prev, subcategory]);
    }
  };

  const handleCardClick = (
    subcategory: SubCategory,
    existingDetails: any = null
  ) => {
    setActiveSubCategory(subcategory);

    if (existingDetails) {
      setEditingWorkDetails(existingDetails);
    } else {
      setEditingWorkDetails(null);
    }

    setIsModalOpen(true);
  };

  const handleDelete = async (subCategoryId: string) => {
    try {
      await api.delete(
        `http://localhost:3001/workDetails/delete/${subCategoryId}`,
        {
          headers: { Authorization: `Bearer ${authorization}` },
        }
      );

      setWorkDetails((prev) =>
        prev.filter((detail) => detail.subCategoryId !== subCategoryId)
      );
    } catch (error) {
      console.error('Error deleting work details:', error);
    }
  };

  const handleEdit = (details: any) => {
    setIsModalOpen(true);
    setEditingWorkDetails(details);
  };

  const handleSave = async (details: any) => {
    if (!activeSubCategory) {
      console.error('No subcategory selected');
      return;
    }

    try {
      if (editingWorkDetails) {
        if (!editingWorkDetails._id) {
          console.error('No valid ID for editing work details');
          return;
        }

        await api.put(
          `http://localhost:3001/workDetails/update/${editingWorkDetails._id}`,
          { ...details, taskName: activeSubCategory.subCategoryName },
          { headers: { Authorization: `Bearer ${authorization}` } }
        );
      } else {
        const response = await api.post(
          'http://localhost:3001/workDetails/create',
          {
            subCategoryId: activeSubCategory._id,
            taskName: activeSubCategory.subCategoryName,
            ...details,
          },
          { headers: { Authorization: `Bearer ${authorization}` } }
        );
        setWorkDetails((prev) => [...prev, response.data]);
      }

      await fetchUpdatedWorkDetails();
    } catch (error) {
      console.error('Error saving work details:', error);
    }

    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingWorkDetails(null);
  };

  // Submit all work details (Submit all work details IDs to Tasker database)
  const handleSubmit = async () => {
    const workDetailsIds = workDetails.map((detail) => detail._id); // Collect all workDetails IDs

    try {
      await api.post(
        'http://localhost:3001/submitWorkDetails/submit',
        { workDetailsIds },
        { headers: { Authorization: `Bearer ${authorization}` } }
      );

      alert('Work details submitted successfully!');
    } catch (error) {
      console.error('Error submitting work details:', error);
    }
  };

  return (
    <Container className="bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10">
        <div className="max-w-4xl w-full p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Great, so what kind of work are you here to do?
          </h1>
          <p className="text-gray-500 mb-6">
            Don’t worry, you can change these choices later on.
          </p>

          <div className="grid grid-cols-2 gap-6">
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
                          onChange={() => handleSubCategorySelect(subcategory)}
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

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Selected Subcategories
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {selectedSubCategories.map((subcategory) => (
                <SubCategoryCard
                  key={subcategory._id}
                  subCategory={subcategory.subCategoryName}
                  subCategoryId={subcategory._id} // Pass subCategoryId
                  workDetails={workDetails.filter(
                    (detail) => detail.subCategoryId === subcategory._id
                  )} // Filter work details by subCategoryId
                  onEdit={(existingDetails) =>
                    handleCardClick(subcategory, existingDetails)
                  } // Pass details to handleCardClick
                  onDelete={() => handleDelete(subcategory._id)} // Pass subCategoryId to handleDelete
                />
              ))}
            </div>
          </div>

          {/* Modal for Work Details */}
          <WorkDetailsModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onSave={handleSave}
            existingDetails={editingWorkDetails}
          />

          {/* Submit Button */}
          <button
            className="mt-6 bg-[#1167b1] text-white py-2 px-4 rounded-lg w-full"
            onClick={handleSubmit}
          >
            Submit All Work Details
          </button>
        </div>
      </div>
    </Container>
  );
};
