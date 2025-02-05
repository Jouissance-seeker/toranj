import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useToggleUrlState(key: string) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const prefixedKey = `toggle-${key}`;
  const [state, setState] = useState(searchParams.has(prefixedKey));

  useEffect(() => {
    setState(searchParams.has(prefixedKey));
  }, [searchParams, prefixedKey]);

  const updateUrl = async (newState: boolean) => {
    if (newState === state) return;
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    Array.from(updatedSearchParams.keys()).forEach((paramKey) => {
      if (paramKey.startsWith('toggle-')) {
        updatedSearchParams.delete(paramKey);
      }
    });
    if (newState) {
      updatedSearchParams.set(prefixedKey, 'true');
    }
    router.push(`${pathname}?${updatedSearchParams.toString()}`, {
      scroll: false,
    });
    setState(newState);
  };

  return {
    isShow: state,
    toggle: () => updateUrl(!state),
    hide: () => updateUrl(false),
    show: () => updateUrl(true),
  };
}
