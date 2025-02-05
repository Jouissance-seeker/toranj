import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { cn } from '@/utils/cn';

interface ICardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  priceWithoutDiscount: number;
  discount: number;
  priceWithDiscount: number;
}

export function Card(props: ICardProps) {
  return (
    <div
      key={props.id}
      className="relative flex flex-col justify-between rounded-xl border bg-white p-3"
    >
      {/* image / title / description */}
      <div className="flex gap-5">
        <Image src={props.image} alt={props.title} width={100} height={100} />
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold">{props.title}</p>
          <p className="line-clamp-3 text-smp text-gray-500">
            {props.description}
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
              hidden: props.discount === 0,
            })}
          >
            <p className="text-sm text-gray-500 line-through">
              {props.priceWithoutDiscount.toLocaleString('fa-IR')} تومان
            </p>
            <p className="rounded-md bg-yellow px-1.5 text-white">
              %{props.discount}
            </p>
          </div>
          <p className="text-center text-lg font-bold">
            {props.priceWithDiscount.toLocaleString('fa-IR')} تومان
          </p>
        </div>
      </div>
      {/* like */}
      <button>
        <IoMdHeartEmpty
          size={20}
          className="absolute left-4 top-4 fill-gray-500"
        />
      </button>
    </div>
  );
}
