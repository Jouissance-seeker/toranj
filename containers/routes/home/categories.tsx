'use client';

import 'swiper/css';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '@/components/product-card';
import { categoriesData } from '@/resources/categories';
import { cn } from '@/utils/cn';

export function Categories() {
  const [activedIndex, setActivedIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="container flex flex-col gap-7">
      <SectionHead title="دسته بندی ها" swiperRef={swiperRef} />
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

  return (
    <div className="flex justify-center">
      <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        onSwiper={(swiper) => (props.swiperRef.current = swiper)}
        id="categories-slider"
      >
        {categoriesData.map((item, index) => (
          <SwiperSlide key={item.id} className="!w-fit rounded-lg">
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

interface ISectionHeadProps {
  swiperRef: any;
  title: string;
}

export function SectionHead(props: ISectionHeadProps) {
  const handlePrev = () => {
    if (props.swiperRef.current && props.swiperRef.current.slidePrev) {
      props.swiperRef.current.slidePrev();
    }
  };
  const handleNext = () => {
    if (props.swiperRef.current && props.swiperRef.current.slideNext) {
      props.swiperRef.current.slideNext();
    }
  };

  return (
    <div className="flex items-center gap-3">
      <h2 className="text-lg font-bold text-gray-600">{props.title}</h2>
      <span className="h-px grow bg-gray-200" />
      <div className="mb-[-30px] flex size-fit gap-2 transition-all">
        <button
          className="z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-white"
          onClick={handlePrev}
        >
          <HiChevronRight className="size-4 fill-gray-600" />
        </button>
        <button
          className="z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-white"
          onClick={handleNext}
        >
          <HiChevronLeft className="size-4 fill-gray-600" />
        </button>
      </div>
    </div>
  );
}
