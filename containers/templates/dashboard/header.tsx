import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import toast from 'react-hot-toast';
import { BiSolidCategory } from 'react-icons/bi';
import { FaShoppingCart, FaUsers } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';
import { PiShoppingBagOpenFill } from 'react-icons/pi';
import { APIlogout } from '@/actions/templates/base/logout';
import { cn } from '@/utils/cn';

export function Header() {
  const navItems = [
    {
      text: 'سفارشات',
      icon: <PiShoppingBagOpenFill size={27} />,
      path: '/dashboard/orders',
    },
    {
      text: 'کاربران',
      icon: <FaUsers size={27} />,
      path: '/dashboard/users',
    },
    {
      text: 'دسته بندی',
      icon: <BiSolidCategory size={27} />,
      path: '/dashboard/categories',
    },
    {
      text: 'محصولات',
      icon: <FaShoppingCart size={27} />,
      path: '/dashboard/products',
    },
  ];

  return (
    <header>
      <Desktop navItems={navItems} />
      <Mobile navItems={navItems} />
    </header>
  );
}

interface IDesktopProps {
  navItems: {
    text: string;
    icon: ReactNode;
    path: string;
  }[];
}

const Desktop = (props: IDesktopProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleLogout = () => {
    APIlogout();
    router.push('/');
    toast.success('با موفقیت خارج شدید');
    setTimeout(() => window.location.reload(), 3000);
  };

  return (
    <div className="relative hidden size-full w-56 border bg-teal p-4 text-white lg:block">
      {/* logo */}
      <div className="flex justify-center pb-5 pt-2">
        <Link href="/">
          <Image src="/images/logo.svg" width={100} height={50} alt="لوگو" />
        </Link>
      </div>
      {/* nav items */}
      <nav>
        <ul className="flex flex-col gap-5">
          {props.navItems.map((item) => (
            <li key={item.text}>
              <Link
                href={item.path}
                className={cn(
                  'flex text-sm gap-2 items-center text-white/60 relative transition-all',
                  {
                    'text-white after:w-1.5 after:h-6 after:absolute after:bg-yellow after:rounded-l-md after:-right-4 after:bottom-0':
                      pathname === item.path,
                  },
                )}
              >
                {item.icon}
                <p className="whitespace-nowrap font-medium">{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* logout btn */}
      <button
        onClick={handleLogout}
        className="absolute bottom-5 left-1/2 -translate-x-1/2"
      >
        <div className="relative flex items-center gap-2 rounded-lg border border-yellow px-3 py-2 text-sm text-yellow transition-all hover:bg-yellow hover:text-teal">
          <LuLogOut size={25} />
          <p className="whitespace-nowrap text-smp">خروج</p>
        </div>
      </button>
    </div>
  );
};

interface IMobileProps {
  navItems: {
    text: string;
    icon: ReactNode;
    path: string;
  }[];
}

const Mobile = (props: IMobileProps) => {
  const pathname = usePathname();

  return (
    <div className="relative flex size-full justify-center border bg-teal py-4 text-white lg:hidden">
      <nav className="w-full max-w-[350px]">
        <ul className="flex justify-between gap-2">
          {props.navItems.map((item) => (
            <li key={item.text}>
              <Link
                href={item.path}
                className={cn(
                  'flex text-sm gap-1 items-center text-white/60 relative transition-all',
                  {
                    'text-white after:w-8 after:h-1.5 after:absolute after:bg-yellow after:rounded-t-md after:right-1/2 after:translate-x-1/2 after:-bottom-4':
                      pathname === item.path,
                  },
                )}
              >
                {item.icon}
                <p className="whitespace-nowrap font-medium">{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
