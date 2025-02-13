import { TProduct } from '@/types/product';

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
        _id: '67acafbc7db958e9ce3efaee',
        title: 'نوشابه قوطی فانتا',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
        discount: '0',
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_153132098.png',
        priceWithoutDiscount: '20000',
        priceWithDiscount: '20000',
      },
      {
        _id: '67acafec7db958e9ce3efaf2',
        title: 'نوشابه قوطی کوکاکولا',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
        discount: '20',
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_153132098.png',
        priceWithoutDiscount: '22000',
        priceWithDiscount: '22000',
      },
      {
        _id: '67acb0357db958e9ce3efaf6',
        title: 'نوشابه لیموناد فانتا',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
        discount: '0',
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_153132098.png',
        priceWithoutDiscount: '20000',
        priceWithDiscount: '20000',
      },
      {
        _id: '67acb0707db958e9ce3efafa',
        title: 'نوشابه زیرو کوکاکولا',
        description:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
        discount: '0',
        image:
          'https://ezteam.ir/toranj/wp-content/uploads/2024/03/image_2024-03-13_153132098.png',
        priceWithoutDiscount: '20000',
        priceWithDiscount: '20000',
      },
    ],
  },
];
