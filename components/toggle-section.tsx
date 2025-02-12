import { ReactNode } from 'react';
import { HiMiniXMark } from 'react-icons/hi2';
import { cn } from '@/utils/cn';

interface IToggleSectionProps {
  children: ReactNode;
  onClose: () => void;
  isShow: boolean;
  isBackDrop?: boolean;
  className?: string;
}

export function ToggleSection(props: IToggleSectionProps) {
  return (
    <section>
      {/* backdrop */}
      <button
        onClick={() => props.onClose()}
        className={cn('fixed inset-0 z-40 transition-all', {
          show: props.isShow,
          hide: !props.isShow,
          'backdrop-blur-sm cursor-default bg-black/30': props.isBackDrop,
          hidden: !props.isBackDrop,
        })}
      />
      {/* section */}
      <div
        className={cn('transition-all relative z-50', props.className, {
          show: props.isShow,
          hide: !props.isShow,
        })}
      >
        <div className="container">
          <div className="rounded-md border border-gray-200 bg-white">
            {/* head */}
            <div className="absolute -top-10 right-2.5 flex p-1">
              <button
                onClick={() => {
                  props.onClose();
                }}
                className="flex size-8 items-center justify-center overflow-hidden rounded-lg bg-red-500"
              >
                <HiMiniXMark size={24} className="fill-white" />
              </button>
            </div>
            {/* body */}
            <div>{props.children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
