import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaHeart, FaHome, FaShoppingCart } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';
import { PiShoppingBagOpenFill } from 'react-icons/pi';
import { getAuth } from '@/actions/templates/base/getAuth';
import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { TUser } from '@/types/user';
import { cn } from '@/utils/cn';

export function Header() {
  const pathname = usePathname();
  const loginToggleUrlState = useToggleUrlState('login');
  const handleShowModalLogin = () => {
    loginToggleUrlState.show();
  };
  const navItems = [
    {
      text: 'خانه',
      icon: <FaHome size={22} />,
      path: '/',
    },
    {
      text: 'لقمه ها',
      icon: <IoFastFood size={22} />,
      path: '/explore',
    },
    {
      text: 'سفارشات',
      icon: <PiShoppingBagOpenFill size={22} />,
      path: '/orders',
    },
    {
      text: 'علاقه مندی',
      icon: <FaHeart size={22} />,
      path: '/favorites',
    },
    {
      text: 'سبد خرید',
      icon: <FaShoppingCart size={22} />,
      path: '/cart',
    },
  ];
  const [auth, setAuth] = useState<{
    isLoggined: boolean;
    data: TUser | null;
  }>({
    isLoggined: false,
    data: null,
  });
  useEffect(() => {
    (async () => {
      const auth = await getAuth();
      setAuth(auth);
    })();
  }, []);

  return (
    <header className="container">
      <div className="my-6 flex items-center justify-between rounded-2xl bg-teal p-4">
        {/* logo */}
        <Link href="/">
          <Image src="/images/logo.svg" width={100} height={50} alt="لوگو" />
        </Link>
        {/* desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.path}
                  className={cn(
                    'flex flex-col text-sm gap-1.5 items-center text-white/60 relative transition-all',
                    {
                      'text-white after:size-1.5 after:absolute after:bg-yellow after:rounded-full after:-bottom-2':
                        pathname === item.path,
                    },
                  )}
                >
                  {item.icon}
                  <p className="font-medium">{item.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* login / profile || fullname / logout */}
        {auth.isLoggined ? (
          <div className="flex items-center gap-3">
            <Link
              href="/profile"
              className="rounded-lg bg-green p-2.5 font-medium text-teal"
            >
              {`${auth.data?.name} ${auth.data?.lastName}`}
            </Link>
            <button>
              <div className="relative flex items-center gap-2 rounded-lg border border-yellow p-2 text-sm text-yellow transition-all hover:bg-yellow hover:text-teal">
                <p className="whitespace-nowrap text-smp">خروج</p>
                <LuLogOut size={25} />
              </div>
            </button>
          </div>
        ) : (
          <button
            onClick={handleShowModalLogin}
            className="rounded-lg bg-green p-2.5 font-medium text-teal"
          >
            ورود / ثبت نام
          </button>
        )}
      </div>
    </header>
  );
}
