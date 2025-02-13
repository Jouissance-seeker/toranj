'use client';

import 'swiper/css';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { APIgetCategories } from '@/actions/routes/home/get-categories';
import { ProductCard } from '@/components/product-card';
import { categoriesData } from '@/resources/categories';
import { cn } from '@/utils/cn';

export function Categories() {
  const [activedIndex, setActivedIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="container flex w-screen flex-col gap-7">
      <div className="flex flex-col gap-5">
        <Top
          activedIndex={activedIndex}
          setActivedIndex={setActivedIndex}
          swiperRef={swiperRef}
        />
        <Bottom activedIndex={activedIndex} />
      </div>
    </section>
  );
}

interface ITopProps {
  activedIndex: number;
  setActivedIndex: (index: number) => void;
  swiperRef: any;
}

const Top = (props: ITopProps) => {
  const handleActiveCategory = (value: number) => {
    props.setActivedIndex(value);
  };
  const fetchCategories = useQuery({
    queryKey: ['categories'],
    queryFn: () => APIgetCategories(),
  });

  return (
    <div className="flex justify-center">
      <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        onSwiper={(swiper) => (props.swiperRef.current = swiper)}
        id="categories-slider"
      >
        {fetchCategories.data?.map((item, index) => (
          <SwiperSlide key={item._id} className="!w-fit rounded-lg">
            <button
              onClick={() => handleActiveCategory(index)}
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
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {categoriesData[props.activedIndex]?.children?.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </div>
  );
};
