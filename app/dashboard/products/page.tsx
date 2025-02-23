import { List } from '@/containers/routes/dashboard/products/list';
import { ModalAddProduct } from '@/containers/routes/dashboard/products/modal-add-product';

export default function Page() {
  return (
    <div className="flex w-full items-center justify-center">
      <ModalAddProduct />
      <List />
    </div>
  );
}
