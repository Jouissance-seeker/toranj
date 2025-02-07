'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useApiCall } from '@/hooks/api-call';
import { APIlogin } from '@/services/login';
import { cn } from '@/utils/cn';

export function EditForm() {
  const [callApiSubmitBtn, isLoadingSubmitBtn] = useApiCall();
  const formSchema = z.object({
    firstName: z.string().min(3, {
      message: 'نام باید حداقل 3 کاراکتر باشد!',
    }),
    lastName: z.string().min(3, {
      message: 'نام خانوادگی باید حداقل 3 کاراکتر باشد!',
    }),
    email: z.string().email('ایمیل وارد شده معتبر نیست!'),
    phoneNumber: z.string().regex(new RegExp(/^0\d{10}$/), {
      message: 'شماره موبایل وارد شده معتبر نیست!',
    }),
    address: z
      .string({
        required_error: 'آدرس الزامی است',
      })
      .min(8, {
        message: 'آدرس باید حداقل 8 کاراکتر باشد!',
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
    },
  });
  const handleSubmitForm = async (values: any) => {
    callApiSubmitBtn(
      APIlogin({
        body: {
          phone: values.phoneNumber,
          password: values.password,
        },
      }),
      () => {
        // ...
      },
    );
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmitForm)}
      className="flex w-[350px] flex-col rounded-xl border bg-white p-3 sm:w-[500px]"
    >
      {/* fields */}
      <div className="mb-4 grid grid-cols-2 gap-2">
        {/* first name */}
        <div className="col-span-1">
          <label htmlFor="firstName">نام</label>
          <input
            id="firstName"
            {...form.register('firstName')}
            className={cn({
              'border-red-500': form.formState.errors.firstName,
            })}
          />
          <p
            className={cn({
              hidden: !form.formState.errors.firstName?.message,
            })}
          >
            {form.formState.errors.firstName?.message}
          </p>
        </div>
        {/* last name */}
        <div className="col-span-1">
          <label htmlFor="lastName">نام خانوادگی</label>
          <input
            id="lastName"
            {...form.register('lastName')}
            className={cn({
              'border-red-500': form.formState.errors.lastName,
            })}
          />
          <p
            className={cn({
              hidden: !form.formState.errors.lastName?.message,
            })}
          >
            {form.formState.errors.lastName?.message}
          </p>
        </div>
        {/* email */}
        <div className="col-span-1">
          <label htmlFor="email">ایمیل</label>
          <input
            id="email"
            {...form.register('email')}
            className={cn({
              'border-red-500': form.formState.errors.email,
            })}
          />
          <p
            className={cn({
              hidden: !form.formState.errors.email?.message,
            })}
          >
            {form.formState.errors.email?.message}
          </p>
        </div>
        {/* phone */}
        <div className="col-span-1">
          <label htmlFor="phone">تلفن همراه</label>
          <input
            id="phone"
            {...form.register('phoneNumber')}
            type="number"
            className={cn({
              'border-red-500': form.formState.errors.phoneNumber,
            })}
          />
          <p
            className={cn({
              hidden: !form.formState.errors.phoneNumber?.message,
            })}
          >
            {form.formState.errors.phoneNumber?.message}
          </p>
        </div>
        {/* address */}
        <div className="col-span-2">
          <label htmlFor="address">آدرس</label>
          <textarea
            id="address"
            {...form.register('address')}
            className={cn({
              'border-red-500': form.formState.errors.address,
            })}
          />
          <p
            className={cn({
              hidden: !form.formState.errors.address?.message,
            })}
          >
            {form.formState.errors.address?.message}
          </p>
        </div>
      </div>
      {/* submit */}
      <button
        type="submit"
        disabled={isLoadingSubmitBtn}
        className="rounded-lg bg-teal p-4 text-white disabled:bg-teal/50"
      >
        ذخیره
      </button>
    </form>
  );
}
