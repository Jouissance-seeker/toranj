import { ProductCard } from '@/components/product-card';
import { categoriesData } from '@/resources/categories';

export function List() {
  return (
    <div className="col-span-1 grid h-fit grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
      {categoriesData
        .flatMap((category) => category.children)
        .map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
    </div>
  );
}
