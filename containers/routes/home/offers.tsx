'use client';

import 'swiper/css';
import { useRef } from 'react';
import { SectionHead } from '@/components/section-head';

export function Offers() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="container flex flex-col gap-7">
      <SectionHead title="پیشنهاد سرآشپز" swiperRef={swiperRef} />
    </div>
  );
}
