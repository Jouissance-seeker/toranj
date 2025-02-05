import { useKillua } from 'killua';
import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { favoritesSlice } from '@/slices/favorites';
import { TProduct } from '@/types/product';
import { cn } from '@/utils/cn';

interface IProductCardProps {
  data: TProduct;
}

export function ProductCard(props: IProductCardProps) {
  const localstorageFavorites = useKillua(favoritesSlice);

  return (
    <div
      key={props.data.id}
      className="relative flex flex-col justify-between rounded-xl border bg-white p-3"
    >
      {/* image / title / description */}
      <div className="flex gap-5">
        <Image
          src={props.data.image}
          alt={props.data.title}
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold">{props.data.title}</p>
          <p className="line-clamp-3 text-smp text-gray-500">
            {props.data.description}
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
              hidden: props.data.discount === 0,
            })}
          >
            <p className="text-sm text-gray-500 line-through">
              {props.data.priceWithoutDiscount.toLocaleString('fa-IR')} تومان
            </p>
            <p className="rounded-md bg-yellow px-2 py-0.5 text-sm text-white">
              %{props.data.discount}
            </p>
          </div>
          <p className="text-center text-lg font-bold">
            {props.data.priceWithDiscount.toLocaleString('fa-IR')} تومان
          </p>
        </div>
      </div>
      {/* like */}
      <button
        onClick={() => {
          if (localstorageFavorites.selectors.isInFavorites(props.data.id)) {
            localstorageFavorites.reducers.remove(props.data);
          } else {
            localstorageFavorites.reducers.add(props.data);
          }
        }}
      >
        {localstorageFavorites.selectors.isInFavorites(props.data.id) ? (
          <IoMdHeart size={24} className="absolute left-3 top-3 fill-red-500" />
        ) : (
          <IoMdHeartEmpty
            size={24}
            className="absolute left-3 top-3 fill-gray-500"
          />
        )}
      </button>
    </div>
  );
}
