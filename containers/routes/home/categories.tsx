'use client';

import 'swiper/css';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '@/components/routes/global/card';
import { Head } from '@/components/routes/home/head';
import { eatablesData } from '@/resources/eatables';
import { cn } from '@/utils/cn';

export function Categories() {
  const [activedIndex, setActivedIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <div className="container flex flex-col gap-7">
      <Head title="دسته بندی ها" swiperRef={swiperRef} />
      <div className="flex flex-col gap-5">
        <Top
          activedIndex={activedIndex}
          setActivedIndex={setActivedIndex}
          swiperRef={swiperRef}
        />
        <Bottom activedIndex={activedIndex} />
      </div>
    </div>
  );
}

interface ITopProps {
  activedIndex: number;
  setActivedIndex: (index: number) => void;
  swiperRef: any;
}

const Top = (props: ITopProps) => {
  return (
    <div className="flex justify-center">
      <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        onSwiper={(swiper) => (props.swiperRef.current = swiper)}
        id="categories-slider"
      >
        {eatablesData.map((item, index) => (
          <SwiperSlide key={item.id} className="!w-fit rounded-lg">
            <button
              onClick={() => props.setActivedIndex(index)}
              className={cn(
                'rounded-xl border transition-all w-[100px] overflow-hidden bg-white p-1.5',
                {
                  'bg-green font-bold': props.activedIndex === index,
                },
              )}
            >
              <div
                className={cn('flex flex-col gap-2 p-1 items-center', {
                  'border-dashed border-2 border-teal rounded-lg':
                    props.activedIndex === index,
                })}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                />
                <p>{item.title}</p>
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

interface IBottomProps {
  activedIndex: number;
}

const Bottom = (props: IBottomProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {eatablesData[props.activedIndex]?.children?.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
