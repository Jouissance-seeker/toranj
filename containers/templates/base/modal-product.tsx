import { useKillua } from 'killua';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { HiTrash } from 'react-icons/hi2';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { Loader } from '@/components/loader';
import { ToggleSection } from '@/components/toggle-section';
import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { cartSlice } from '@/slices/cart';
import { favoriteSlice } from '@/slices/favorite';
import { cn } from '@/utils/cn';
import { formatPrice } from '@/utils/format-price';

export function ModalProduct() {
  const searchParams = useSearchParams();
  const data = {
    id: Number(searchParams.get('id') || 0),
    image: searchParams.get('image') || '',
    title: searchParams.get('title') || '',
    description: searchParams.get('description') || '',
    discount: Number(searchParams.get('discount')) || 0,
    priceWithoutDiscount: Number(searchParams.get('priceWithoutDiscount')) || 0,
    priceWithDiscount: Number(searchParams.get('priceWithDiscount')) || 0,
  };
  const localstorageCart = useKillua(cartSlice);
  const handleAddToCart = () => localstorageCart.reducers.add(data);
  const handleIncrementQuantity = () =>
    localstorageCart.reducers.increment(data);
  const handleDecrementQuantity = () =>
    localstorageCart.reducers.decrement(data);
  const handleRemoveFromCart = () => localstorageCart.reducers.remove(data);
  const productToggleUrlState = useToggleUrlState('product');
  const localstorageFavorite = useKillua(favoriteSlice);
  const handleToggleFavorite = () => {
    if (localstorageFavorite.selectors.isInFavorites(data.id)) {
      localstorageFavorite.reducers.remove(data);
    } else {
      localstorageFavorite.reducers.add(data);
    }
  };

  return (
    <ToggleSection
      isShow={productToggleUrlState.isShow}
      isBackDrop
      onClose={() => {
        productToggleUrlState.hide([
          'id',
          'image',
          'title',
          'description',
          'discount',
          'priceWithoutDiscount',
          'priceWithDiscount',
        ]);
      }}
      className="fixed left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 sm:w-[500px]"
    >
      <div className="relative flex flex-col items-center gap-3 p-3">
        {productToggleUrlState.isShow ? (
          <>
            {/* image */}
            <Image
              src={data.image}
              alt={data.title}
              width={130}
              height={130}
              className="sm:size-[150px]"
            />
            {/* like */}
            <button
              onClick={handleToggleFavorite}
              className="absolute left-3 top-3"
            >
              {localstorageFavorite.selectors.isInFavorites(data.id) ? (
                <IoMdHeart size={25} className="fill-red-500" />
              ) : (
                <IoMdHeartEmpty size={25} className="fill-gray-400" />
              )}
            </button>
            {/* title */}
            <p className="font-bold sm:text-lg">{data.title}</p>
            {/* description */}
            <p className="text-center text-sm text-gray-500 sm:text-smp">
              {data.description}
            </p>
            <hr className="w-full" />
            <div className="flex w-full items-center justify-between">
              {/* cart action */}
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
                      <button
                        onClick={handleDecrementQuantity}
                        className="text-lg"
                      >
                        -
                      </button>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="flex h-10 items-center justify-center rounded-lg border bg-teal px-3 py-5 text-smp text-white transition-all duration-300"
                  >
                    افزودن به سبد خرید
                  </button>
                )}
              </div>
              {/* price */}
              <div>
                <div
                  className={cn('flex gap-2', {
                    hidden: data.discount === 0,
                  })}
                >
                  <p className="text-sm text-gray-500 line-through">
                    {formatPrice(data.priceWithoutDiscount)}
                  </p>
                  <p className="rounded-md bg-yellow px-2 py-0.5 text-sm text-white">
                    %{data.discount}
                  </p>
                </div>
                <p>{formatPrice(data.priceWithDiscount)}</p>
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </ToggleSection>
  );
}
