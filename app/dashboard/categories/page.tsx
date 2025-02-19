import { List } from '@/containers/routes/dashboard/categories/list';
import { ModalAddCategory } from '@/containers/routes/dashboard/categories/modal-add-category';

export default function Page() {
  return (
    <div className="flex w-full items-center justify-center">
      <ModalAddCategory />
      <List />
    </div>
  );
}
