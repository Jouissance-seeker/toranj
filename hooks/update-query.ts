import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type QueryParams = { [key: string]: any };

type UpdaterFunction = (prevQuery: QueryParams) => QueryParams;

export function useUpdateQuery() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateQuery = (updater: UpdaterFunction) => {
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    const updatedQuery: QueryParams = {};

    updatedSearchParams.forEach((value, key) => {
      updatedQuery[key] = value;
    });

    const newQuery = updater({ ...updatedQuery });

    if (!newQuery || typeof newQuery !== 'object') {
      return;
    }

    Object.entries(newQuery).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        updatedSearchParams.set(key, value);
      } else {
        updatedSearchParams.delete(key);
      }
    });

    router.push(`${pathname}?${updatedSearchParams.toString()}`, {
      scroll: false,
    });
  };

  return updateQuery;
}
