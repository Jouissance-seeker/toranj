import { List } from '@/containers/routes/dashboard/categories/list';
import { ModalAddCategory } from '@/containers/routes/dashboard/categories/modal-add-category';
import { ModalEditCategory } from '@/containers/routes/dashboard/categories/modal-edit-category';

export default function Page() {
  return (
    <div className="flex w-full items-center justify-center">
      <ModalAddCategory />
      <ModalEditCategory />
      <List />
    </div>
  );
}
