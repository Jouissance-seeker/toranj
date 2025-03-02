'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { APIeditProduct } from '@/actions/routes/dashboard/products/edit-product';
import { APIgetCategories } from '@/actions/routes/global/get-categories';
import { Feild } from '@/components/feild';
import { ToggleSection } from '@/components/toggle-section';
import { useToggleUrlState } from '@/hooks/toggle-url-state';

export function ModalEditProduct() {
  const editProductToggleUrlState = useToggleUrlState('edit-product');
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const handleClose = () => {
    editProductToggleUrlState.hide([
      'title',
      'description',
      'id',
      'category',
      'priceWithoutDiscount',
      'priceWithDiscount',
      'image',
    ]);
    form.reset();
  };

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
    category: {
      type: 'select',
      label: 'دسته بندی',
      data: [] as any,
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
    description: z.string().min(1, {
      message: formFields.description.errors.isRequired,
    }),
    priceWithoutDiscount: z.string().min(1, {
      message: formFields.priceWithoutDiscount.errors.isRequired,
    }),
    priceWithDiscount: z.string().min(1, {
      message: formFields.priceWithDiscount.errors.isRequired,
    }),
    category: z.string().min(1, {
      message: formFields.category.errors.isRequired,
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: null,
      title: '',
      description: '',
      priceWithoutDiscount: '',
      priceWithDiscount: '',
      category: '',
    },
  });
  const handleSubmitForm = async (data: any) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('priceWithoutDiscount', data.priceWithoutDiscount);
    formData.append('priceWithDiscount', data.priceWithDiscount);
    formData.append('categoryID', data.category);
    formData.append('image', data.image[0]);
    const res = await APIeditProduct({
      path: String(searchParams.get('id')),
      body: formData,
    });
    if (res.status === 'success') {
      await queryClient.refetchQueries({
        queryKey: ['products'],
      });
      toast.success(res.message);
      handleClose();
      form.reset();
    } else {
      toast.error(res.message);
    }
  };

  // fetch categories and set data category field
  const fetchCategories = useQuery({
    queryKey: ['categories'],
    queryFn: () => APIgetCategories(),
  });
  if (fetchCategories.isSuccess) {
    formFields.category.data = fetchCategories.data?.map((item) => ({
      key: item.title,
      value: item._id,
    }));
  }

  // auto fill form
  useEffect(() => {
    if (editProductToggleUrlState.isShow) {
      form.reset({
        image: null,
        title: String(searchParams.get('title')),
        description: String(searchParams.get('description')),
        priceWithoutDiscount: String(searchParams.get('priceWithoutDiscount')),
        priceWithDiscount: String(searchParams.get('priceWithDiscount')),
        category: String(searchParams.get('category')),
      });
    }
  }, [editProductToggleUrlState.isShow]);

  return (
    <ToggleSection
      isShow={editProductToggleUrlState.isShow}
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
            ذخیره
          </button>
        </form>
      </div>
    </ToggleSection>
  );
}
