'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { APIupdateAuth } from '@/actions/routes/profile/update-auth';
import { APIgetAuth } from '@/actions/templates/base/get-auth';
import { Feild } from '@/components/feild';

export function EditForm() {
  // form
  const formFields = {
    firstName: {
      label: 'نام',
      type: 'text',
      errors: {
        least3characters: 'نام باید حداقل 3 کاراکتر باشد!',
      },
    },
    lastName: {
      label: 'نام خانوادگی',
      type: 'text',
      errors: {
        least3characters: 'نام خانوادگی باید حداقل 3 کاراکتر باشد!',
      },
    },
    email: {
      label: 'ایمیل',
      type: 'email',
      errors: {
        isNotCorrect: 'ایمیل وارد شده معتبر نیست!',
      },
    },
    phoneNumber: {
      label: 'شماره موبایل',
      type: 'number',
      errors: {
        isNotCorrect: 'شماره موبایل وارد شده معتبر نیست!',
      },
    },
    address: {
      label: 'آدرس',
      type: 'text',
      errors: {
        least8characters: 'آدرس باید حداقل 8 کاراکتر باشد!',
      },
    },
  };
  const formSchema = z.object({
    firstName: z.string().min(3, {
      message: formFields.firstName.errors.least3characters,
    }),
    lastName: z.string().min(3, {
      message: formFields.lastName.errors.least3characters,
    }),
    email: z.string().email(formFields.email.errors.isNotCorrect),
    phoneNumber: z.string().regex(new RegExp(/^0\d{10}$/), {
      message: formFields.phoneNumber.errors.isNotCorrect,
    }),
    address: z.string().min(8, {
      message: formFields.address.errors.least8characters,
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
  const handleSubmitForm = async () => {
    const res = await APIupdateAuth({
      body: {
        name: form.getValues('firstName'),
        lastName: form.getValues('lastName'),
        email: form.getValues('email'),
        phone: form.getValues('phoneNumber'),
        address: form.getValues('address'),
      },
    });
    if (res.status === 'success') {
      toast.success(res.message);
      setTimeout(() => window.location.reload(), 3000);
    } else {
      toast.error(res.message);
    }
  };

  // fill form with user data
  const fetchAuth = useQuery({
    queryKey: ['auth'],
    queryFn: () => APIgetAuth(),
  });
  useEffect(() => {
    if (fetchAuth.data) {
      form.reset({
        firstName: fetchAuth.data.name,
        lastName: fetchAuth.data.lastName,
        email: fetchAuth.data.email,
        phoneNumber: fetchAuth.data.phone,
        address: fetchAuth.data.address,
      });
    }
  }, [fetchAuth.data]);

  return (
    <section>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        className="flex w-[350px] flex-col rounded-xl border bg-white p-3 sm:w-[500px]"
      >
        {/* fields */}
        <div className="mb-4 mt-2 grid gap-2">
          {Object.entries(formFields).map(([key, field]) => (
            <Feild name={key} key={key} field={field} form={form} />
          ))}
        </div>
        {/* submit */}
        <button type="submit" className="rounded-lg bg-teal p-4 text-white">
          ذخیره
        </button>
      </form>
    </section>
  );
}
