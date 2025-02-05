'use client';

import 'swiper/css';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { eatablesData } from '@/resources/eatables';
import { cn } from '@/utils/cn';

export function Categories() {
  const [activedIndex, setActivedIndex] = useState(0);
  const swiperImagesRef = useRef<any>(null);
  return (
    <div className="flex flex-col gap-7">
      {/* categories */}
      <div className="container flex justify-center">
        <Swiper
          slidesPerView="auto"
          onSwiper={(swiper) => (swiperImagesRef.current = swiper)}
          spaceBetween={8}
          ref={swiperImagesRef}
          id="categories-slider"
        >
          {eatablesData.map((item, index) => (
            <SwiperSlide key={item.id} className="!w-fit rounded-lg">
              <button
                onClick={() => setActivedIndex(index)}
                className={cn(
                  'rounded-xl border transition-all w-[100px] overflow-hidden bg-white p-1.5',
                  {
                    'bg-green font-bold': activedIndex === index,
                  },
                )}
              >
                <div
                  className={cn('flex flex-col gap-2 p-1 items-center', {
                    'border-dashed border-2 border-teal rounded-lg':
                      activedIndex === index,
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
      {/* eatables */}
      <div className="container">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {eatablesData[activedIndex].children.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border bg-white p-3"
            >
              {/* image / title / description */}
              <div className="flex gap-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="line-clamp-3 text-smp text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
              {/* add to cart / price */}
              <div className="mt-3 flex items-end justify-between border-t-2 border-dashed pt-3">
                <button className="flex size-11 items-center justify-center rounded-lg border bg-gray p-3 text-gray-400 transition-all duration-300 hover:bg-teal hover:text-white">
                  <FiPlus size={26} />
                </button>
                <div>
                  <div
                    className={cn('flex gap-2', {
                      hidden: item.discount === 0,
                    })}
                  >
                    <p className="text-sm text-gray-500 line-through">
                      {item.priceWithoutDiscount.toLocaleString('fa-IR')} تومان
                    </p>
                    <p className="rounded-md bg-yellow px-1.5 text-white">
                      %{item.discount}
                    </p>
                  </div>
                  <p className="text-center text-lg font-bold">
                    {item.priceWithDiscount.toLocaleString('fa-IR')} تومان
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
