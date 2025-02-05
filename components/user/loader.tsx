import { ThreeDots } from 'react-loader-spinner';
import { cn } from '@/utils/cn';

interface ILoaderProps {
  className?: string;
}

export const Loader = (props: ILoaderProps) => {
  return (
    <div
      id="loader"
      className={cn(
        'flex h-full w-full items-center justify-center',
        props.className,
      )}
    >
      <ThreeDots width="70" radius="9" color="#183D3D" />
    </div>
  );
};
