'use client';

import 'swiper/css';
import { useRef } from 'react';
import { SectionHead } from '@/components/section-head';

export function Discount() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="container flex flex-col gap-7">
      <SectionHead title="تخفیفات ویژه" swiperRef={swiperRef} />
    </div>
  );
}
