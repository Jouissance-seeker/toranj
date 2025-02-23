import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { APIregister } from '@/actions/templates/base/register';
import { Feild } from '@/components/feild';
import { ToggleSection } from '@/components/toggle-section';
import { useToggleUrlState } from '@/hooks/toggle-url-state';

export function ModalRegister() {
  const loginToggleUrlState = useToggleUrlState('login');
  const registerToggleUrlState = useToggleUrlState('register');
  const handleShowModalLogin = () => {
    registerToggleUrlState.hide();
    loginToggleUrlState.show();
  };
  const handleCloseModalRegister = () => {
    registerToggleUrlState.hide();
  };

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
    password: {
      label: 'رمز عبور',
      type: 'password',
      errors: {
        least8characters: 'رمز عبور باید حداقل 8 کاراکتر باشد!',
      },
    },
    confirmPassword: {
      label: 'تکرار رمز عبور',
      type: 'password',
      errors: {
        least8characters: 'رمز عبور باید حداقل 8 کاراکتر باشد!',
      },
    },
    address: {
      label: 'آدرس',
      type: 'text',
      errors: {
        least8characters: 'آدرس باید حداقل 10 کاراکتر باشد!',
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
    password: z.string().min(8, {
      message: formFields.password.errors.least8characters,
    }),
    confirmPassword: z.string().min(8, {
      message: formFields.confirmPassword.errors.least8characters,
    }),
    address: z.string().min(10, {
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
      password: '',
      confirmPassword: '',
      address: '',
    },
  });
  const handleSubmitForm = async () => {
    const res = await APIregister({
      body: {
        name: form.getValues('firstName'),
        lastName: form.getValues('lastName'),
        phone: form.getValues('phoneNumber'),
        email: form.getValues('email'),
        address: form.getValues('address'),
        password: form.getValues('password'),
        confirmPassword: form.getValues('confirmPassword'),
      },
    });
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
      isShow={registerToggleUrlState.isShow}
      isBackDrop
      onClose={handleCloseModalRegister}
      className="fixed left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 sm:w-[500px]"
    >
      <div className="flex flex-col rounded-lg bg-white">
        {/* head */}
        <div className="flex w-full justify-between border-b p-2">
          <button
            onClick={handleShowModalLogin}
            className="w-1/2 px-6 py-3 text-center text-teal"
          >
            ورود
          </button>
          <p className="w-1/2 rounded-lg bg-teal px-6 py-3 text-center text-white">
            ثبت نام
          </p>
        </div>
        {/* body */}
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="flex w-full flex-col p-3"
        >
          {/* fields */}
          <div className="mb-4 mt-2 grid grid-cols-2 gap-2">
            {Object.entries(formFields).map(([key, field]) => (
              <Feild name={key} key={key} field={field} form={form} />
            ))}
          </div>
          {/* submit */}
          <button
            type="submit"
            className="rounded-lg bg-teal p-4 text-white transition-all"
          >
            ثبت نام
          </button>
        </form>
      </div>
    </ToggleSection>
  );
}
