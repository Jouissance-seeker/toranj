import { ToggleSection } from '@/components/toggle-section';
import { useToggleUrlState } from '@/hooks/toggle-url-state';

export function ModalDescription() {
  const descriptionToggleUrlState = useToggleUrlState('description');
  const handleCloseModalDescription = () => {
    descriptionToggleUrlState.hide();
  };

  return (
    <ToggleSection
      isShow={descriptionToggleUrlState.isShow}
      isBackDrop
      onClose={handleCloseModalDescription}
      className="fixed left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 sm:w-[500px]"
    >
      <div className="custom-scrollbar flex max-h-[500px] flex-col gap-2 overflow-y-scroll rounded-lg bg-white p-2 text-smp">
        <p>توسعه فرانت-اند : حمید شاهسونی</p>
        <hr />
        <p>توسعه بک-اند : محمد خطایی</p>
        <hr />
        <div>
          <p>قابلیت ها در سمت کاربر :</p>
          <ul>
            <li>
              <p>1. دیدن لیست محصولات بر اساس دسته بندی</p>
              <p>2. دیدن لیست تمامی محصولات</p>
              <p>3. افزودن محصول به سبد خرید بر حسب تعداد</p>
              <p>4. افزودن محصول به علاقه مندی ها</p>
              <p>5. ثبت سفارش</p>
              <p>6. دیدن مشخصات محصول</p>
              <p>7. دیدن لیست سفارشات</p>
              <p>8. ثبت نام و ورود به وبسایت</p>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <p>قابلیت ها در سمت ادمین :</p>
          <ul>
            <li>
              <p>1. دیدن لیست دسته بندی ها</p>
              <p>2. افزودن دسته بندی جدید</p>
              <p>3. ویرایش دسته بندی</p>
              <p>4. حذف دسته بندی</p>
              <p>5. دیدن لیست محصولات</p>
              <p>6. افزودن محصول جدید</p>
              <p>7. ویرایش محصول</p>
              <p>8. حذف محصول</p>
              <p>9. دیدن لیست سفارشات</p>
              <p>10. دیدن لیست کاربر ها</p>
              <p>11. حذف کاربر</p>
              <p>12. تغییر رول کاربر</p>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <p>تکنولوژی های استفاده شده در فرانت-اند :</p>
          <ul>
            <li>1. nextjs</li>
            <li>2. typescript</li>
            <li>3. tailwind</li>
            <li>4. killua</li>
            <li>5. react-hook-form</li>
            <li>6. ...</li>
          </ul>
        </div>
      </div>
    </ToggleSection>
  );
}
