'use client';

import { useEffect, useState, useCallback } from 'react';
import { Container } from '../assets/Container';
import { api } from '@/lib';
import { WorkDetailsModal } from './WorkDetailsModal';
import { SubCategoryCard } from './SubCategoriesCard';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WorkDetail } from '../TaskerProfile-components/ProfileSection';

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
  const [workDetails, setWorkDetails] = useState<WorkDetail[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSubCategory, setActiveSubCategory] =
    useState<SubCategory | null>(null);
  const [editingWorkDetails, setEditingWorkDetails] =
    useState<WorkDetail | null>(null);

  // Fetch token on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthorization(localStorage.getItem('token'));
    }
  }, []);

  // Fetch main categories
  const getMainCategories = useCallback(async () => {
    if (!authorization) return;

    try {
      const response = await api.get('http://localhost:3001/mainCategory/get', {
        headers: { Authorization: `Bearer ${authorization}` },
      });
      setMainCategories(response.data);
      if (response.data.length > 0) setSelectedCategory(response.data[0]);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  }, [authorization]);

  // Fetch updated work details
  const fetchUpdatedWorkDetails = useCallback(async () => {
    if (!authorization) return;

    try {
      const response = await api.get('http://localhost:3001/workDetails/get', {
        headers: { Authorization: `Bearer ${authorization}` },
      });
      setWorkDetails(response.data);
    } catch (err) {
      console.error('Error fetching updated work details:', err);
    }
  }, [authorization]);

  // Fetch categories and work details when authorization is available
  useEffect(() => {
    if (authorization) {
      getMainCategories();
      fetchUpdatedWorkDetails();
    }
  }, [authorization, getMainCategories, fetchUpdatedWorkDetails]);

  // Handle subcategory selection
  const handleSubCategorySelect = async (subcategory: SubCategory) => {
    const isSelected = selectedSubCategories.some(
      (sc) => sc._id === subcategory._id
    );

    if (isSelected) {
      const relatedWorkDetail = workDetails.find(
        (detail) => detail.subCategoryId === subcategory._id
      );

      if (relatedWorkDetail) {
        try {
          await api.delete(
            `http://localhost:3001/workDetails/delete/${relatedWorkDetail._id}`,
            {
              headers: { Authorization: `Bearer ${authorization}` },
            }
          );
          setWorkDetails((prev) =>
            prev.filter((detail) => detail._id !== relatedWorkDetail._id)
          );
        } catch (err) {
          console.error('Error deleting work details:', err);
        }
      }

      setSelectedSubCategories((prev) =>
        prev.filter((sc) => sc._id !== subcategory._id)
      );
    } else {
      setSelectedSubCategories((prev) => [...prev, subcategory]);
    }
  };

  // Handle card click to open modal
  const handleCardClick = (
    subcategory: SubCategory,
    detail: WorkDetail | null = null
  ) => {
    setActiveSubCategory(subcategory);
    setEditingWorkDetails(detail);
    setIsModalOpen(true);
  };

  // Save work details
  const handleSave = async (details: WorkDetail) => {
    if (!activeSubCategory) return;

    try {
      if (editingWorkDetails) {
        await api.put(
          `http://localhost:3001/workDetails/update/${editingWorkDetails._id}`,
          {
            ...details,
            taskName: activeSubCategory.subCategoryName,
            subCategoryId: activeSubCategory._id,
          },
          {
            headers: { Authorization: `Bearer ${authorization}` },
          }
        );
        setWorkDetails((prev) =>
          prev.map((detail) =>
            detail._id === editingWorkDetails._id
              ? { ...detail, ...details }
              : detail
          )
        );
      } else {
        await api.post(
          'http://localhost:3001/workDetails/create',
          {
            ...details,
            subCategoryId: activeSubCategory._id,
            taskName: activeSubCategory.subCategoryName,
          },
          {
            headers: { Authorization: `Bearer ${authorization}` },
          }
        );

        await fetchUpdatedWorkDetails();
      }
    } catch (err) {
      console.error('Error saving work details:', err);
    }

    setIsModalOpen(false);
    setEditingWorkDetails(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingWorkDetails(null);
  };

  // Delete work detail
  const handleDeleteWorkDetail = async (
    workDetailId: string,
    subCategoryId: string
  ) => {
    try {
      await api.delete(
        `http://localhost:3001/workDetails/delete/${workDetailId}`,
        {
          headers: { Authorization: `Bearer ${authorization}` },
        }
      );
      setWorkDetails((prev) =>
        prev.filter((detail) => detail._id !== workDetailId)
      );

      const hasOtherDetails = workDetails.some(
        (detail) =>
          detail.subCategoryId === subCategoryId && detail._id !== workDetailId
      );

      if (!hasOtherDetails) {
        setSelectedSubCategories((prev) =>
          prev.filter((sc) => sc._id !== subCategoryId)
        );
      }
    } catch (err) {
      console.error('Error deleting work detail:', err);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (
      selectedSubCategories.some(
        (sc) => !workDetails.find((wd) => wd.subCategoryId === sc._id)
      )
    ) {
      return;
    }

    const workDetailsIds = workDetails.map((detail) => detail._id);

    try {
      await api.post(
        'http://localhost:3001/submitWorkDetails/submit',
        { workDetailsIds },
        {
          headers: { Authorization: `Bearer ${authorization}` },
        }
      );
      toast.success('Та өөрийн чадваруудаа амжилттай бүртгэлээ');
    } catch (err) {
      console.error('Error submitting work details:', err);
    }
  };

  return (
    <Container className="bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10">
        <div className="max-w-4xl w-full p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Сайн байна , Та ямар төрлийн ажил хийдэг вэ?
          </h1>
          <p className="text-gray-500 mb-6">
            Санаа зоволтгүй , та оруулсан мэдээллээ дараа өөрчлөх боломжтой
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-3">
                Ангилалаа сонгоорой
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
                Одоо нарийн ангиллаа сонгоорой
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
              Сонгогдсон нарийн ангиллууд
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {selectedSubCategories.map((subcategory) => (
                <SubCategoryCard
                  key={subcategory._id}
                  subCategory={subcategory.subCategoryName}
                  subCategoryId={subcategory._id}
                  workDetails={workDetails.filter(
                    (detail) => detail.subCategoryId === subcategory._id
                  )}
                  onEdit={(detail) => handleCardClick(subcategory, detail)}
                  onDelete={(workDetailId) =>
                    handleDeleteWorkDetail(workDetailId, subcategory._id)
                  }
                />
              ))}
            </div>
          </div>

          <WorkDetailsModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onSave={handleSave}
            existingDetails={editingWorkDetails}
            Authorization={authorization}
          />

          <Link href="/tasker-side/TaskerDashboard">
            <button
              className="mt-6 bg-[#1167b1] text-white py-2 px-4 rounded-lg w-full"
              onClick={handleSubmit}
            >
              Бүх мэдээллээ хадгалах
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
