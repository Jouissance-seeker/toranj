import { useQuery } from '@tanstack/react-query';
import { APIgetProducts } from '@/actions/routes/explore/get-products';
import { Loader } from '@/components/loader';
import { ProductCard } from '@/components/product-card';

export function List() {
  const fetchProducts = useQuery({
    queryKey: ['products'],
    queryFn: () => APIgetProducts(),
  });

  if (fetchProducts.isLoading) {
    return <Loader />;
  }

  return (
    <section className="col-span-1 grid h-fit grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
      {fetchProducts.data?.map((item) => (
        <ProductCard key={item._id} data={item} />
      ))}
    </section>
  );
}
