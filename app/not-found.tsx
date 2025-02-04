import Image from 'next/image';

export default function Home() {
  return (
    <div className="container flex size-full flex-col items-center justify-center gap-4">
      <Image
        src="/images/routes/not-found/404.png"
        alt="404"
        width={100}
        height={100}
      />
      <p className="text-lg font-bold text-red">صفحه موردنظر پیدا نشد!</p>
    </div>
  );
}
