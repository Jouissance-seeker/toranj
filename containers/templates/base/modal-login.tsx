import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { APIlogin } from '@/actions/templates/base/login';
import { Feild } from '@/components/feild';
import { ToggleSection } from '@/components/toggle-section';
import { useToggleUrlState } from '@/hooks/toggle-url-state';

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
      phoneNumber: '09000000000',
      password: 'aaaaaaaa',
    },
  });
  const handleSubmitForm = async () => {
    const res = await APIlogin({
      body: {
        phone: form.getValues('phoneNumber'),
        password: form.getValues('password'),
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
            {Object.entries(formFields).map(([key, field]) => (
              <Feild name={key} key={key} field={field} form={form} />
            ))}
          </div>
          {/* submit */}
          <button
            type="submit"
            className="rounded-lg bg-teal p-4 text-white transition-all"
          >
            ورود
          </button>
        </form>
      </div>
    </ToggleSection>
  );
}
