import { ToggleSection } from '@/components/user/toggle-section';
import { useToggleUrlState } from '@/hooks/toggle-url-state';

export function ModalRegister() {
  const loginToggleUrlState = useToggleUrlState('login');
  const registerToggleUrlState = useToggleUrlState('register');
  const handleShowModalLogin = () => {
    registerToggleUrlState.hide();
    loginToggleUrlState.show();
  };

  return (
    <ToggleSection
      isShow={registerToggleUrlState.isShow}
      isBackDrop
      onClose={registerToggleUrlState.hide}
      className="fixed left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 sm:w-[450px]"
    >
      <div className="flex justify-between rounded-lg bg-teal p-1">
        <div className="flex w-full justify-between">
          <button
            onClick={handleShowModalLogin}
            className="w-1/2 px-6 py-3 text-center text-white"
          >
            ورود
          </button>
          <p className="w-1/2 rounded-lg bg-green px-6 py-3 text-center text-teal">
            ثبت نام
          </p>
        </div>
      </div>
    </ToggleSection>
  );
}
