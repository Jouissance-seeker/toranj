'use client';

import { useKillua } from 'killua';
import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';
import { HiTrash } from 'react-icons/hi';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { cartSlice } from '@/slices/user/cart';
import { favoriteSlice } from '@/slices/user/favorite';
import { TProduct } from '@/types/user/product';
import { cn } from '@/utils/cn';

interface IProductCardProps {
  data: TProduct;
}

export function ProductCard({ data }: IProductCardProps) {
  const localstorageFavorite = useKillua(favoriteSlice);
  const localstorageCart = useKillua(cartSlice);
  const isInCart = localstorageCart.selectors.isInCart(data);
  const quantityInCart = localstorageCart.selectors.quantity(data);
  const isInFavorites = localstorageFavorite.selectors.isInFavorites(data.id);
  const productToggleUrlState = useToggleUrlState('product');
  const handleAddToCart = () => localstorageCart.reducers.add(data);
  const handleIncrementQuantity = () =>
    localstorageCart.reducers.increment(data);
  const handleDecrementQuantity = () =>
    localstorageCart.reducers.decrement(data);
  const handleRemoveFromCart = () => localstorageCart.reducers.remove(data);
  const handleToggleFavorite = () => {
    if (isInFavorites) {
      localstorageFavorite.reducers.remove(data);
    } else {
      localstorageFavorite.reducers.add(data);
    }
  };

  return (
    <div
      key={data.id}
      className="relative flex flex-col justify-between rounded-xl border bg-white p-3"
    >
      {/* image / title / description */}
      <div className="flex gap-5">
        <Image src={data.image} alt={data.title} width={100} height={100} />
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold">{data.title}</p>
          <p className="line-clamp-3 pl-4 text-sm text-gray-500">
            {data.description}
          </p>
        </div>
      </div>
      {/* like */}
      <button onClick={handleToggleFavorite}>
        {isInFavorites ? (
          <IoMdHeart size={24} className="absolute left-2 top-8 fill-red-500" />
        ) : (
          <IoMdHeartEmpty
            size={24}
            className="absolute left-2 top-8 fill-gray-400"
          />
        )}
      </button>
      {/* see */}
      <button onClick={productToggleUrlState.show}>
        <IoEyeOutline
          size={24}
          className="absolute left-2 top-2 stroke-gray-400"
        />
      </button>
      {/* add to cart / price */}
      <div className="mt-3 flex items-end justify-between border-t-2 border-dashed pt-3">
        {isInCart ? (
          <div className="flex h-10 w-24 items-center gap-5 rounded-lg border bg-gray px-3">
            <button onClick={handleIncrementQuantity}>+</button>
            <span>{quantityInCart}</span>
            {quantityInCart === 1 ? (
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
        <div>
          <div
            className={cn('flex gap-2', {
              hidden: data.discount === 0,
            })}
          >
            <p className="text-sm text-gray-500 line-through">
              {data.priceWithoutDiscount.toLocaleString('fa-IR')} تومان
            </p>
            <p className="rounded-md bg-yellow px-2 py-0.5 text-sm text-white">
              %{data.discount}
            </p>
          </div>
          <p className="text-center text-lg font-bold">
            {data.priceWithDiscount.toLocaleString('fa-IR')} تومان
          </p>
        </div>
      </div>
    </div>
  );
}
