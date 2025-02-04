import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHeart, FaHome, FaShoppingCart } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { PiShoppingBagOpenFill } from 'react-icons/pi';
import { cn } from '@/utils/cn';

export function Footer() {
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
      text: 'سبد خرید',
      icon: <FaShoppingCart size={22} color="#fff" />,
      path: '/cart',
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
  ];

  return (
    <footer>
      <div className='container fixed bottom-0 h-[72px] w-full bg-[url("/images/template/mobile-footer-bg.svg")] bg-cover bg-center bg-no-repeat pb-2 pt-3 lg:hidden'>
        <nav>
          <ul className="flex w-full items-center justify-between gap-2">
            {navItems.map((item) => (
              <li key={item.text} className="w-[56px]">
                <Link
                  href={item.path}
                  className={cn(
                    'flex flex-col text-[12px] gap-1 items-center text-gray-700/60 relative transition-all',
                    {
                      'text-gray-700 after:size-1.5 after:absolute after:bg-yellow after:rounded-full after:-bottom-2.5':
                        pathname === item.path,
                      'relative -top-9 bg-teal rounded-full size-14 flex justify-center items-center after:hidden':
                        item.path === '/cart',
                    },
                  )}
                >
                  {item.icon}
                  <p
                    className={cn('font-bold', {
                      hidden: item.path === '/cart',
                    })}
                  >
                    {item.text}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
