'use client';

import 'swiper/css';
import { useRef } from 'react';
import { Head } from '@/components/routes/home/head';

export function Offers() {
  const swiperRef = useRef<any>(null);

  return (
    <div className="container flex flex-col gap-7">
      <Head title="پیشنهاد سرآشپز" swiperRef={swiperRef} />
    </div>
  );
}
