import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHeart, FaHome, FaShoppingCart } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { PiShoppingBagOpenFill } from 'react-icons/pi';
import { cn } from '@/utils/cn';

export function Header() {
  const pathname = usePathname();
  const navItems = [
    {
      text: 'خانه',
      icon: <FaHome size={22} />,
      path: '/',
    },
    {
      text: 'محصولات',
      icon: <FaBagShopping size={22} />,
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

  return (
    <header className="container">
      <div className="my-6 flex items-center justify-between rounded-2xl bg-teal p-4">
        {/* logo */}
        <Link href="/">
          <Image
            src="/images/template/logo.svg"
            width={100}
            height={50}
            alt="لوگو"
          />
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
        {/* login / profile */}
        <button className="rounded-lg bg-green px-4 py-2.5 font-medium text-teal">
          ورود / ثبت نام
        </button>
      </div>
    </header>
  );
}
