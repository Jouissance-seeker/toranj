'use client';

import 'swiper/css';
import { useRef } from 'react';
import { Head } from '@/components/routes/home/head';

export function Discount() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="container flex flex-col gap-7">
      <Head title="تخفیفات ویژه" swiperRef={swiperRef} />
    </div>
  );
}
