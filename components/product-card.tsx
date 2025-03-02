'use client';

import { useKillua } from 'killua';
import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';
import { HiTrash } from 'react-icons/hi';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { cartSlice } from '@/slices/cart';
import { favoriteSlice } from '@/slices/favorite';
import { TProduct } from '@/types/product';
import { cn } from '@/utils/cn';
import { formatPrice } from '@/utils/format-price';

interface IProductCardProps {
  data: TProduct;
}

export function ProductCard({ data }: IProductCardProps) {
  const localstorageFavorite = useKillua(favoriteSlice);
  const localstorageCart = useKillua(cartSlice);
  const productToggleUrlState = useToggleUrlState('product');
  const handleAddToCart = () => localstorageCart.reducers.add(data);
  const handleIncrementQuantity = () =>
    localstorageCart.reducers.increment(data);
  const handleDecrementQuantity = () =>
    localstorageCart.reducers.decrement(data);
  const handleRemoveFromCart = () => localstorageCart.reducers.remove(data);
  const handleToggleFavorite = () => {
    if (localstorageFavorite.selectors.isInFavorites(data._id)) {
      localstorageFavorite.reducers.remove(data);
    } else {
      localstorageFavorite.reducers.add(data);
    }
  };
  const handleSeeProduct = () =>
    productToggleUrlState.show({
      id: String(data._id),
      image: `${process.env.BASE_URL}${data.image.path}`,
      title: data.title,
      description: data.description,
      priceWithoutDiscount: String(data.priceWithoutDiscount),
      priceWithDiscount: String(data.priceWithDiscount),
    });

  return (
    <div
      key={data._id}
      className="group relative flex flex-col justify-between rounded-xl border bg-white p-3"
    >
      {/* image / title / description */}
      <div className="flex gap-5">
        <Image
          src={`${process.env.BASE_URL}${data.image.path}`}
          alt={data.title}
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-2">
          <p className="max-w-[150px] truncate text-lg font-bold">
            {data.title}
          </p>
          <p className="line-clamp-3 max-w-[200px] truncate pl-8 text-sm text-gray-500">
            {data.description}
          </p>
        </div>
      </div>
      {/* like / see */}
      <div className="absolute left-2 top-3 flex flex-col gap-1">
        <button onClick={handleToggleFavorite}>
          {localstorageFavorite.selectors.isInFavorites(data._id) ? (
            <IoMdHeart size={22} className="fill-red-500" />
          ) : (
            <IoMdHeartEmpty size={22} className="fill-gray-400" />
          )}
        </button>
        <button onClick={handleSeeProduct}>
          <IoEyeOutline size={22} className="stroke-gray-400" />
        </button>
      </div>
      {/* cart actions / price */}
      <div className="mt-3 flex items-end justify-between border-t-2 border-dashed pt-3">
        {/* cart */}
        <div>
          {localstorageCart.selectors.isInCart(data) ? (
            <div className="flex h-10 w-24 items-center gap-5 rounded-lg border bg-gray px-3">
              <button onClick={handleIncrementQuantity}>+</button>
              <span>{localstorageCart.selectors.quantity(data)}</span>
              {localstorageCart.selectors.quantity(data) === 1 ? (
                <button onClick={handleRemoveFromCart}>
                  <HiTrash size={20} />
                </button>
              ) : (
                <button onClick={handleDecrementQuantity} className="text-lg">
                  -
                </button>
              )}
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="flex size-10 items-center justify-center rounded-lg border bg-gray p-3 text-gray-500 transition-all duration-300 hover:bg-teal hover:text-white"
            >
              <FiPlus size={26} />
            </button>
          )}
        </div>
        {/* cart actions */}
        <div>
          <div
            className={cn('flex gap-2', {
              hidden: data.priceWithoutDiscount === data.priceWithDiscount,
            })}
          >
            <p className="text-sm text-gray-500 line-through">
              {formatPrice(Number(data.priceWithoutDiscount))}
            </p>
            <p className="rounded-md bg-yellow px-2 py-0.5 text-sm text-white">
              %
              {Math.round(
                ((data.priceWithoutDiscount - data.priceWithDiscount) /
                  data.priceWithoutDiscount) *
                  100,
              )}
            </p>
          </div>
          <p className="text-center font-bold">
            {formatPrice(Number(data.priceWithDiscount))}
          </p>
        </div>
      </div>
    </div>
  );
}
