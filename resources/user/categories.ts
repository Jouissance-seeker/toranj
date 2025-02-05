import { TProduct } from '@/types/user/product';

export const categoriesData: {
  id: number;
  image: string;
  title: string;
  children: TProduct[];
}[] = [
  {
    id: 1,
    image:
      'https://ezteam.ir/toranj/wp-content/uploads/2024/02/image_2024-02-04_091853870.png',
    title: 'ساندویچ',
    children: [
      {
        id: 1,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_154708069.png',
        title: 'برگر گوشت و قارچ',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        discount: 8,
        priceWithoutDiscount: 180000,
        priceWithDiscount: 165000,
        timeRequired: 15,
      },
      {
        id: 2,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_154405183.png',
        title: 'برگر دودی',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        discount: 0,
        priceWithoutDiscount: 180000,
        priceWithDiscount: 180000,
        timeRequired: 15,
      },
      {
        id: 3,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_154708069.png',
        title: 'برگر گوشت و قارچ',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        discount: 8,
        priceWithoutDiscount: 180000,
        priceWithDiscount: 165000,
        timeRequired: 15,
      },
      {
        id: 4,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_154405183.png',
        title: 'برگر دودی',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        discount: 0,
        priceWithoutDiscount: 180000,
        priceWithDiscount: 180000,
        timeRequired: 15,
      },
      {
        id: 5,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_154708069.png',
        title: 'برگر گوشت و قارچ',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        discount: 8,
        priceWithoutDiscount: 180000,
        priceWithDiscount: 165000,
        timeRequired: 15,
      },
      {
        id: 6,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_154405183.png',
        title: 'برگر دودی',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        discount: 0,
        priceWithoutDiscount: 180000,
        priceWithDiscount: 180000,
        timeRequired: 15,
      },
    ],
  },
  {
    id: 2,
    image:
      'https://ezteam.ir/toranj/wp-content/uploads/2024/02/image_2024-02-11_162838955.png',
    title: 'نوشابه',
    children: [
      {
        id: 3,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_151759387.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه مشکی قوطی',
        discount: 0,
        priceWithoutDiscount: 29000,
        priceWithDiscount: 29000,
        timeRequired: 5,
      },
      {
        id: 4,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_153759908.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه کوکا کولا',
        discount: 0,
        priceWithoutDiscount: 10000,
        priceWithDiscount: 10000,
        timeRequired: 5,
      },
    ],
  },
  {
    id: 3,
    image:
      'https://ezteam.ir/toranj/wp-content/uploads/2024/02/image_2024-02-04_091917301.png',
    title: 'پیتزا',
    children: [
      {
        id: 5,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_151759387.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه مشکی قوطی',
        discount: 0,
        priceWithoutDiscount: 29000,
        priceWithDiscount: 29000,
        timeRequired: 5,
      },
      {
        id: 6,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_153759908.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه کوکا کولا',
        discount: 0,
        priceWithoutDiscount: 10000,
        priceWithDiscount: 10000,
        timeRequired: 5,
      },
    ],
  },
  {
    id: 4,
    image:
      'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_154937763.png',
    title: 'مرغ',
    children: [
      {
        id: 7,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_151759387.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه مشکی قوطی',
        discount: 0,
        priceWithoutDiscount: 29000,
        priceWithDiscount: 29000,
        timeRequired: 5,
      },
      {
        id: 8,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_153759908.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه کوکا کولا',
        discount: 0,
        priceWithoutDiscount: 10000,
        priceWithDiscount: 10000,
        timeRequired: 5,
      },
    ],
  },
  {
    id: 5,
    image:
      'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_155640231.png',
    title: 'سیب زمینی',
    children: [
      {
        id: 9,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_151759387.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه مشکی قوطی',
        discount: 0,
        priceWithoutDiscount: 29000,
        priceWithDiscount: 29000,
        timeRequired: 5,
      },
      {
        id: 10,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_153759908.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه کوکا کولا',
        discount: 0,
        priceWithoutDiscount: 10000,
        priceWithDiscount: 10000,
        timeRequired: 5,
      },
    ],
  },
  {
    id: 6,
    image:
      'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_160951267.png',
    title: 'ایرانی',
    children: [
      {
        id: 11,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_151759387.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه مشکی قوطی',
        discount: 0,
        priceWithoutDiscount: 29000,
        priceWithDiscount: 29000,
        timeRequired: 5,
      },
      {
        id: 12,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_153759908.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه کوکا کولا',
        discount: 0,
        priceWithoutDiscount: 10000,
        priceWithDiscount: 10000,
        timeRequired: 5,
      },
    ],
  },
  {
    id: 7,
    image:
      'https://ezteam.ir/toranj/wp-content/uploads/2024/03/ice-cream_5089304-1.png',
    title: 'بستنی',
    children: [
      {
        id: 13,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_151759387.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه مشکی قوطی',
        discount: 0,
        priceWithoutDiscount: 29000,
        priceWithDiscount: 29000,
        timeRequired: 5,
      },
      {
        id: 14,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_153759908.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه کوکا کولا',
        discount: 0,
        priceWithoutDiscount: 10000,
        priceWithDiscount: 10000,
        timeRequired: 5,
      },
    ],
  },
  {
    id: 8,
    image:
      'https://ezteam.ir/toranj/wp-content/uploads/2024/03/drink_2738804-1.png',
    title: 'نوشیدنی',
    children: [
      {
        id: 15,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_151759387.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه مشکی قوطی',
        discount: 0,
        priceWithoutDiscount: 29000,
        priceWithDiscount: 29000,
        timeRequired: 5,
      },
      {
        id: 16,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_153759908.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه کوکا کولا',
        discount: 0,
        priceWithoutDiscount: 10000,
        priceWithDiscount: 10000,
        timeRequired: 5,
      },
    ],
  },
  {
    id: 9,
    image:
      'https://ezteam.ir/toranj/wp-content/uploads/2024/03/appetizer_1277756-1.png',
    title: 'پیش غذا',
    children: [
      {
        id: 17,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_151759387.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه مشکی قوطی',
        discount: 0,
        priceWithoutDiscount: 29000,
        priceWithDiscount: 29000,
        timeRequired: 5,
      },
      {
        id: 18,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_153759908.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه کوکا کولا',
        discount: 0,
        priceWithoutDiscount: 10000,
        priceWithDiscount: 10000,
        timeRequired: 5,
      },
    ],
  },
  {
    id: 10,
    image:
      'https://ezteam.ir/toranj/wp-content/uploads/2024/03/coffee_648567-1.png',
    title: 'قهوه',
    children: [
      {
        id: 19,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_151759387.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه مشکی قوطی',
        discount: 0,
        priceWithoutDiscount: 29000,
        priceWithDiscount: 29000,
        timeRequired: 5,
      },
      {
        id: 20,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_153759908.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه کوکا کولا',
        discount: 0,
        priceWithoutDiscount: 10000,
        priceWithDiscount: 10000,
        timeRequired: 5,
      },
    ],
  },
  {
    id: 11,
    image:
      'https://ezteam.ir/toranj/wp-content/uploads/2024/03/bbq-grill_7688706-1.png',
    title: 'کباب',
    children: [
      {
        id: 21,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_151759387.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه مشکی قوطی',
        discount: 0,
        priceWithoutDiscount: 29000,
        priceWithDiscount: 29000,
        timeRequired: 5,
      },
      {
        id: 22,
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/01/image_2024-03-13_153759908.png',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        title: 'نوشابه کوکا کولا',
        discount: 0,
        priceWithoutDiscount: 10000,
        priceWithDiscount: 10000,
        timeRequired: 5,
      },
    ],
  },
];
