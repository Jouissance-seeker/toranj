import Image from 'next/image';

interface IEmptyProps {
  text: string;
}

export function Empty(props: IEmptyProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <Image src="/images/waiter.svg" width={350} height={350} alt="گارسون" />
      <p className="lg:text-lg">{props.text}</p>
    </div>
  );
}
