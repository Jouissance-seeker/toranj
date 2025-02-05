import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface IHeadProps {
  swiperRef: any;
  title: string;
}

export function Head(props: IHeadProps) {
  const handlePrev = () => {
    if (props.swiperRef.current && props.swiperRef.current.slidePrev) {
      props.swiperRef.current.slidePrev();
    }
  };
  const handleNext = () => {
    if (props.swiperRef.current && props.swiperRef.current.slideNext) {
      props.swiperRef.current.slideNext();
    }
  };

  return (
    <div className="flex items-center gap-3">
      <h2 className="text-lg font-bold text-gray-600">{props.title}</h2>
      <span className="h-px grow bg-gray-200" />
      <div className="mb-[-30px] flex size-fit gap-2 transition-all">
        <button
          className="z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-white"
          onClick={handlePrev}
        >
          <HiChevronRight className="size-4 fill-gray-600" />
        </button>
        <button
          className="z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-white"
          onClick={handleNext}
        >
          <HiChevronLeft className="size-4 fill-gray-600" />
        </button>
      </div>
    </div>
  );
}
