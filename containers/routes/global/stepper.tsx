import { FiMapPin, FiShoppingCart } from 'react-icons/fi';
import { LuWallet } from 'react-icons/lu';
import { cn } from '@/utils/cn';

interface IStepperProps {
  step: 'cart' | 'checkout' | 'payment';
}

export function Stepper(props: IStepperProps) {
  const steps = ['cart', 'checkout', 'payment'];
  const currentStepIndex = steps.indexOf(props.step);

  return (
    <div className="col-span-full flex items-center justify-between gap-2 whitespace-nowrap text-smp">
      <div className="flex flex-col items-center gap-1">
        <div
          className={cn(
            'flex size-14 items-center justify-center rounded-full bg-white',
            {
              'bg-green': currentStepIndex >= steps.indexOf('cart'),
            },
          )}
        >
          <FiShoppingCart size={22} className="text-teal" />
        </div>
        <p className="pt-0.5">سبد خرید</p>
      </div>
      <div className="h-[1px] w-full bg-[#3F4064] opacity-50" />
      <div className="flex flex-col items-center gap-1">
        <div
          className={cn(
            'flex size-14 items-center justify-center rounded-full bg-white',
            {
              'bg-green': currentStepIndex >= steps.indexOf('checkout'),
            },
          )}
        >
          <FiMapPin size={22} className="text-teal" />
        </div>
        <p className="pt-0.5">آدرس تحویل</p>
      </div>
      <div className="h-[1px] w-full bg-[#3F4064] opacity-50" />
      <div className="flex flex-col items-center gap-1">
        <div
          className={cn(
            'flex size-14 items-center justify-center rounded-full bg-white',
            {
              'bg-green': currentStepIndex >= steps.indexOf('payment'),
            },
          )}
        >
          <LuWallet size={22} className="text-teal" />
        </div>
        <p className="pt-0.5">پرداخت</p>
      </div>
    </div>
  );
}
