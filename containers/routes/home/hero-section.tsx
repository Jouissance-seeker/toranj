import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="container">
      <div
        style={{
          clipPath: 'ellipse(100% 100% at 50% 0%)',
        }}
        className="relative size-full h-[450px] w-full rounded-t-2xl bg-teal"
      >
        {/* imsges */}
        <div>
          <Image
            className="absolute bottom-0 left-0 h-auto w-full max-w-[600px] lg:left-3"
            src="/images/routes/home/pizza.webp"
            alt="Pizza"
            width={600}
            height={400}
          />
          <Image
            className="absolute bottom-10 right-0 hidden md:block"
            src="/images/routes/home/leaf.svg"
            alt="Pizza"
            width={75}
            height={75}
          />
          <Image
            className="absolute left-0 top-10 hidden md:block"
            src="/images/routes/home/leaf.svg"
            alt="Pizza"
            width={75}
            height={75}
          />
        </div>
        {/* texts */}
        <div className="absolute flex flex-col gap-1 p-7 lg:p-20">
          <p className="text-sm text-slate-50/50">سفارش می‌پذیریم!</p>
          <p className="text-2xl font-bold text-white lg:text-3xl">
            تجربه غذایی لذیذ و به یادماندنی
          </p>
          <p className="mr-2 mt-2 max-w-[450px] border-r border-r-slate-50/30 py-1 pr-2 text-sm text-slate-50/50">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
      </div>
    </section>
  );
}
