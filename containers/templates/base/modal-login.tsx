import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { login } from '@/actions/templates/base/login';
import { ToggleSection } from '@/components/toggle-section';
import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { cn } from '@/utils/cn';

export function ModalLogin() {
  const loginToggleUrlState = useToggleUrlState('login');
  const registerToggleUrlState = useToggleUrlState('register');
  const handleShowModalRegister = () => {
    loginToggleUrlState.hide();
    registerToggleUrlState.show();
  };
  const handleCloseModalLogin = () => {
    loginToggleUrlState.hide();
  };

  // form
  const [formIsLoading, setFormIsLoading] = useState(false);
  const formFields = {
    phoneNumber: {
      type: 'number',
      label: 'شماره موبایل',
      errors: {
        isNotCorrect: 'شماره موبایل وارد شده معتبر نیست!',
      },
    },
    password: {
      type: 'password',
      label: 'رمز عبور',
      errors: {
        least8characters: 'رمز عبور باید حداقل 8 کاراکتر باشد!',
      },
    },
  };
  const formSchema = z.object({
    phoneNumber: z.string().regex(new RegExp(/^0\d{10}$/), {
      message: formFields.phoneNumber.errors.isNotCorrect,
    }),
    password: z.string().min(8, {
      message: formFields.password.errors.least8characters,
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });
  const handleSubmitForm = async () => {
    setFormIsLoading(true);
    const res = await login({
      body: {
        phone: form.getValues('phoneNumber'),
        password: form.getValues('password'),
      },
    });
    setFormIsLoading(false);
    if (res.status === 'success') {
      toast.success(res.message);
      loginToggleUrlState.hide();
      setTimeout(() => window.location.reload(), 3000);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <ToggleSection
      isShow={loginToggleUrlState.isShow}
      isBackDrop
      onClose={handleCloseModalLogin}
      className="fixed left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 sm:w-[500px]"
    >
      <div className="flex flex-col rounded-lg bg-white">
        {/* head */}
        <div className="flex w-full justify-between border-b p-2">
          <p className="w-1/2 rounded-lg bg-teal px-6 py-3 text-center text-white">
            ورود
          </p>
          <button
            onClick={handleShowModalRegister}
            className="w-1/2 px-6 py-3 text-center text-teal"
          >
            ثبت نام
          </button>
        </div>
        {/* body */}
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="flex w-full flex-col p-3"
        >
          {/* fields */}
          <div className="mb-4 mt-2 grid gap-2">
            {Object.entries(formFields).map(([key, field]) => {
              const error =
                form.formState.errors[
                  key as keyof z.infer<typeof formSchema>
                ]?.message?.toString();
              return (
                <div key={key} className="flex flex-col">
                  <label htmlFor={key} className="mb-1 text-sm text-teal">
                    {field.label}
                  </label>
                  <input
                    id={key}
                    type={field.type}
                    {...form.register(key as keyof z.infer<typeof formSchema>)}
                    className={cn({ 'border-red-500': !!error })}
                  />
                  {error ? (
                    <p className="mt-1 text-xs text-red-500">{error}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
          {/* submit */}
          <button
            disabled={formIsLoading}
            type="submit"
            className="rounded-lg bg-teal p-4 text-white transition-all disabled:bg-teal/50"
          >
            ورود
          </button>
        </form>
      </div>
    </ToggleSection>
  );
}
