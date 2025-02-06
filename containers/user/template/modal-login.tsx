import { ToggleSection } from '@/components/user/toggle-section';
import { useToggleUrlState } from '@/hooks/toggle-url-state';

export function ModalLogin() {
  const loginToggleUrlState = useToggleUrlState('login');
  const registerToggleUrlState = useToggleUrlState('register');
  const handleShowModalRegister = () => {
    loginToggleUrlState.hide();
    registerToggleUrlState.show();
  };

  return (
    <ToggleSection
      isShow={loginToggleUrlState.isShow}
      isBackDrop
      onClose={loginToggleUrlState.hide}
      className="fixed left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 sm:w-[450px]"
    >
      <div className="flex justify-between rounded-lg bg-teal p-1">
        <div className="flex w-full justify-between">
          <p className="w-1/2 rounded-lg bg-green px-6 py-3 text-center text-teal">
            ورود
          </p>
          <button
            onClick={handleShowModalRegister}
            className="w-1/2 px-6 py-3 text-center text-white"
          >
            ثبت نام
          </button>
        </div>
      </div>
    </ToggleSection>
  );
}
