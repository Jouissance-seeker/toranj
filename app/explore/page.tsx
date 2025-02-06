import { ProductCard } from '@/components/product-card';
import { categoriesData } from '@/resources/categories';

export default function Page() {
  return (
    <div className="container grid h-fit grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {categoriesData
        .flatMap((category) => category.children)
        .map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
    </div>
  );
}
