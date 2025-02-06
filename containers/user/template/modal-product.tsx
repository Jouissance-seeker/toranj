import { ToggleSection } from '@/components/user/toggle-section';
import { useToggleUrlState } from '@/hooks/toggle-url-state';

export function ModalProduct() {
  const loginToggleUrlState = useToggleUrlState('product');

  return (
    <ToggleSection
      isShow={loginToggleUrlState.isShow}
      isBackDrop
      onClose={loginToggleUrlState.hide}
      className="fixed left-1/2 top-1/2 w-[350px] -translate-x-1/2 -translate-y-1/2 sm:w-[450px]"
    >
      <div className="p-3">
        <h1 className="text-lg font-bold">Modal Product</h1>
      </div>
    </ToggleSection>
  );
}
