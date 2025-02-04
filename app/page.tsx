import Image from "next/image";

export default function Home() {
  return (
    <section
      className="container"
      style={{
        clipPath: "ellipse(100% 100% at 50% 0%)",
      }}
    >
      <div className="bg-teal w-full relative rounded-t-2xl size-full h-[500px] lg:h-[450px]">
        <Image
          className="w-full h-auto absolute left-0 lg:left-3 bottom-0 max-w-[600px]"
          src="/images/routes/home/pizza.webp"
          alt="Pizza"
          width={600}
          height={400}
        />
        <Image
          className="absolute right-0 bottom-10 hidden md:block"
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
        <div className="absolute p-7 lg:p-20 flex flex-col gap-1">
          <p className="text-slate-50/50 text-sm">سفارش می‌پذیریم!</p>
          <p className="text-white text-3xl font-bold">
            تجربه غذایی لذیذ و به یادماندنی
          </p>
          <p className="text-slate-50/50 text-sm max-w-[450px] mt-2 border-r border-r-slate-50/30 pr-2 mr-2 py-1">
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
