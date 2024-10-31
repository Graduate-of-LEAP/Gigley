'use client';

import { Tasker } from '@/app/tasker-side/TaskerDashboard/page';
import { Header } from '@/components/assets/Header';
import { TaskerProfileCard } from '@/components/assets/TaskerProfileCard';
import { DescriptionOfSecond } from '@/components/SecondOfFindTasker-components/DescriptionOfSecond';
import { FilterSideBar } from '@/components/SecondOfFindTasker-components/FilterSideBar';
import { MainBody } from '@/components/SecondOfFindTasker-components/MainBody';
import { SortedBy } from '@/components/SecondOfFindTasker-components/SortedBy';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function () {
  return (
    <>
      <Header />
      <DescriptionOfSecond />
      <MainBody />
    </>
  );
}
