import { ReactNode, RefObject, useRef } from 'react';
import { HiMiniXMark } from 'react-icons/hi2';
import { useOnClickOutside } from 'usehooks-ts';
import { cn } from '@/utils/cn';

interface IToggleSectionProps {
  children: ReactNode;
  onClose: () => void;
  isShow: boolean;
  isBackDrop?: boolean;
  className?: string;
}

export function ToggleSection(props: IToggleSectionProps) {
  // close tooltip when clicking outside
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(sectionRef as RefObject<HTMLElement>, () => {
    props.onClose();
  });

  return (
    <section>
      {/* backdrop */}
      <div
        className={cn('fixed inset-0 z-40 transition-all', {
          show: props.isShow,
          hide: !props.isShow,
          'backdrop-blur-sm bg-black/10': props.isBackDrop,
          hidden: !props.isBackDrop,
        })}
      />
      {/* section */}
      <div
        ref={sectionRef}
        className={cn('transition-all  relative z-50', props.className, {
          show: props.isShow,
          hide: !props.isShow,
        })}
      >
        <div className="container">
          <div className="rounded-md border border-gray-200 bg-white">
            {/* head */}
            <div className="absolute -top-11 right-2 flex p-2">
              <button
                onClick={props.onClose}
                className="flex size-8 items-center justify-center overflow-hidden rounded-md bg-red-500"
              >
                <HiMiniXMark size={20} className="fill-white" />
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
