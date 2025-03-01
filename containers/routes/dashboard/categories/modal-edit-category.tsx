'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { APIeditCategory } from '@/actions/routes/dashboard/categories/edit-category';
import { Feild } from '@/components/feild';
import { ToggleSection } from '@/components/toggle-section';
import { useToggleUrlState } from '@/hooks/toggle-url-state';

export function ModalEditCategory() {
  const searchParams = useSearchParams();
  const editCategoryToggleUrlState = useToggleUrlState('edit-category');
  const handleClose = () => {
    editCategoryToggleUrlState.hide(['title', 'id']);
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
    const res = await APIeditCategory({
      path: String(searchParams.get('id')),
      body: formData,
    });
    if (res.status === 'success') {
      await queryClient.refetchQueries({
        queryKey: ['categories'],
      });
      toast.success(res.message);
      form.reset();
      handleClose();
    } else {
      toast.error(res.message);
    }
  };

  // auto fill form
  useEffect(() => {
    if (editCategoryToggleUrlState.isShow) {
      form.reset({
        image: null,
        title: String(searchParams.get('title')),
      });
    }
  }, [editCategoryToggleUrlState.isShow]);

  return (
    <ToggleSection
      isShow={editCategoryToggleUrlState.isShow}
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
