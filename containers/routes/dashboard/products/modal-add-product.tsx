'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { APIaddCategory } from '@/actions/routes/dashboard/categories/add-category';
import { Feild } from '@/components/feild';
import { ToggleSection } from '@/components/toggle-section';
import { useToggleUrlState } from '@/hooks/toggle-url-state';

export function ModalAddProduct() {
  const addProductToggleUrlState = useToggleUrlState('add-product');
  const handleClose = () => {
    addProductToggleUrlState.hide();
    form.reset();
  };
  const queryClient = useQueryClient();

  // form
  const formFields = {
    title: {
      type: 'text',
      label: 'عنوان',
      errors: {
        isRequired: 'این فیلد اجباری است!',
      },
    },
    description: {
      type: 'text',
      label: 'توضیحات',
      errors: {
        isRequired: 'این فیلد اجباری است!',
      },
    },
    priceWithoutDiscount: {
      type: 'number',
      label: 'مبلغ بدون تحفیف',
      errors: {
        isRequired: 'این فیلد اجباری است!',
      },
    },
    priceWithDiscount: {
      type: 'number',
      label: 'مبلغ با تحفیف',
      errors: {
        isRequired: 'این فیلد اجباری است!',
      },
    },
    image: {
      type: 'image',
      label: 'تصویر',
      errors: {
        isRequired: 'این فیلد اجباری است!',
      },
    },
  };
  const formSchema = z.object({
    image: z.any().refine((file) => file?.length > 0, {
      message: formFields.image.errors.isRequired,
    }),
    title: z.string().min(1, {
      message: formFields.title.errors.isRequired,
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: null,
      title: '',
    },
  });
  const handleSubmitForm = async (data: any) => {
    const formData = new FormData();
    formData.append('cover', data.image[0]);
    formData.append('title', data.title);
    const res = await APIaddCategory({ body: formData });
    if (res.status === 'success') {
      toast.success(res.message);
      handleClose();
      form.reset();
      queryClient.refetchQueries({
        queryKey: ['products'],
      });
    } else {
      toast.error(res.message);
    }
  };

  return (
    <ToggleSection
      isShow={addProductToggleUrlState.isShow}
      isBackDrop
      onClose={handleClose}
      className="fixed left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 sm:w-[500px]"
    >
      <div className="flex flex-col rounded-lg bg-white">
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="flex w-full flex-col p-3"
        >
          {/* fields */}
          <div className="mb-4 mt-2 flex flex-col gap-2">
            {Object.entries(formFields).map(([key, field]) => (
              <Feild name={key} key={key} field={field} form={form} />
            ))}
          </div>
          {/* submit */}
          <button
            type="submit"
            className="rounded-lg bg-teal p-4 text-white transition-all"
          >
            افزودن
          </button>
        </form>
      </div>
    </ToggleSection>
  );
}
