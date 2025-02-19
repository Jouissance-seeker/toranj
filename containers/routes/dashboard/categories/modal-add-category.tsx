'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ToggleSection } from '@/components/toggle-section';
import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { cn } from '@/utils/cn';

export function ModalAddCategory() {
  const editCategoryToggleUrlState = useToggleUrlState('add-category');
  const handleCloseModalAddCategory = () => {
    editCategoryToggleUrlState.hide(['title', 'image']);
  };

  // form
  const formFields = {
    image: {
      type: 'file',
      label: 'تصویر',
      errors: {
        isRequired: 'این فیلد اجباری است!',
      },
    },
    title: {
      type: 'text',
      label: 'عنوان',
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
    console.log(data);
  };

  return (
    <ToggleSection
      isShow={editCategoryToggleUrlState.isShow}
      isBackDrop
      onClose={handleCloseModalAddCategory}
      className="fixed left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 sm:w-[500px]"
    >
      <div className="flex flex-col rounded-lg bg-white">
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="flex w-full flex-col p-3"
        >
          {/* fields */}
          <div className="mb-4 mt-2 flex flex-col gap-2">
            {Object.entries(formFields).map(([key, field]) => {
              const error =
                form.formState.errors[
                  key as keyof z.infer<typeof formSchema>
                ]?.message?.toString();
              return (
                <div key={key} className={cn('flex flex-col')}>
                  <label htmlFor={key} className="mb-1 text-sm text-teal">
                    {field.label}
                  </label>
                  {key === 'image' ? (
                    <div className="relative">
                      <input
                        id={key}
                        type={field.type}
                        {...form.register(
                          key as keyof z.infer<typeof formSchema>,
                        )}
                        className={cn({ 'border-red-500': !!error })}
                        accept="image/*"
                      />
                      {!form.watch('image') && (
                        <div className="pointer-events-none absolute right-2 top-1/2 h-10 w-36 -translate-y-1/2 bg-gray text-sm text-gray-400" />
                      )}
                    </div>
                  ) : (
                    <input
                      id={key}
                      type={field.type}
                      {...form.register(
                        key as keyof z.infer<typeof formSchema>,
                      )}
                      className={cn({ 'border-red-500': !!error })}
                    />
                  )}
                  {error ? (
                    <p className="mt-1 text-xs text-red-500">{error}</p>
                  ) : null}
                </div>
              );
            })}
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
