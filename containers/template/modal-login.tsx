import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ToggleSection } from '@/components/toggle-section';
import { useApiCall } from '@/hooks/api-call';
import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { APIlogin } from '@/services/login';
import { cn } from '@/utils/cn';

export function ModalLogin() {
  const loginToggleUrlState = useToggleUrlState('login');
  const registerToggleUrlState = useToggleUrlState('register');
  const handleShowModalRegister = () => {
    loginToggleUrlState.hide();
    registerToggleUrlState.show();
  };

  // form
  const [callApiSubmitBtn, isLoadingSubmitBtn] = useApiCall();
  const formSchema = z.object({
    phoneNumber: z.string().regex(new RegExp(/^0\d{10}$/), {
      message: 'شماره موبایل وارد شده معتبر نیست!',
    }),
    password: z.string().min(8, {
      message: 'رمز عبور باید حداقل 8 کاراکتر باشد!',
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: '',
      password: '',
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
    <ToggleSection
      isShow={loginToggleUrlState.isShow}
      isBackDrop
      onClose={loginToggleUrlState.hide}
      className="fixed left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 sm:w-[450px]"
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
          className="flex w-full flex-col p-2"
        >
          {/* fields */}
          <div className="mb-4 mt-2 grid gap-2">
            {/* phone */}
            <div>
              <label htmlFor="phone">تلفن همراه</label>
              <input
                id="phone"
                {...form.register('phoneNumber')}
                type="number"
              />
              <p
                className={cn({
                  hidden: !form.formState.errors.phoneNumber?.message,
                })}
              >
                {form.formState.errors.phoneNumber?.message}
              </p>
            </div>
            {/* password */}
            <div>
              <label htmlFor="password">رمز عبور</label>
              <input
                {...form.register('password')}
                id="password"
                type="password"
              />
              <p
                className={cn({
                  hidden: !form.formState.errors.password?.message,
                })}
              >
                {form.formState.errors.password?.message}
              </p>
            </div>
          </div>

          {/* submit */}
          <button
            type="submit"
            disabled={isLoadingSubmitBtn}
            className="rounded-lg bg-teal p-4 text-white disabled:bg-teal/50"
          >
            ورود
          </button>
        </form>
      </div>
    </ToggleSection>
  );
}
