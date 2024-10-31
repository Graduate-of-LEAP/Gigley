'use client';

import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';
import { Header } from '@/components/assets/Header';
import { TaskerDetailedProfileCard } from '@/components/assets/TaskerDetailedProfileCard';
import { TaskerProfileCard } from '@/components/assets/TaskerProfileCard';
import { DescriptionOfSecond } from '@/components/SecondOfFindTasker-components/DescriptionOfSecond';
import { FilterSideBar } from '@/components/SecondOfFindTasker-components/FilterSideBar';
import { MainBody } from '@/components/SecondOfFindTasker-components/MainBody';
import { SortedBy } from '@/components/SecondOfFindTasker-components/SortedBy';
import { ChooseDateAndTime } from '@/components/ThirdOfFindTasker-components/ChooseDateAndTime';
import { api } from '@/lib';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface QueryParams {
  size?: string;
  subCategoryId?: string;
  district?: string;
  address?: string;
  addInfo?: string;
}
export default function () {
  const searchParams = useSearchParams();

  // Use get() method to retrieve parameters safely
  const size = searchParams.get('size');
  const subCategoryId = searchParams.get('subCategoryId');
  const district = searchParams.get('district');
  const address = searchParams.get('address');
  const addInfo = searchParams.get('addInfo');
  const userId = searchParams.get('userId');

  console.log(size, subCategoryId, district, address, addInfo, userId);

  return (
    <>
      <Header />
      <DescriptionOfSecond />
      <MainBody />

      <ChooseDateAndTime />
    </>
  );
}
