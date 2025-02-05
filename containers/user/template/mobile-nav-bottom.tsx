'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaHeart, FaHome, FaShoppingCart } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';
import { PiShoppingBagOpenFill } from 'react-icons/pi';
import { cn } from '@/utils/cn';

export function MobileNavBottom() {
  const [currentPath, setCurrentPath] = useState('');
  const pathname = usePathname();
  useEffect(() => setCurrentPath(pathname), [pathname]);
  const navItems = [
    { text: 'خانه', icon: <FaHome size={22} />, path: '/' },
    { text: 'خوراکی ها', icon: <IoFastFood size={22} />, path: '/explore' },
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
    { text: 'علاقه مندی', icon: <FaHeart size={22} />, path: '/favorites' },
  ];

  return (
    <section className="pt-28 lg:pt-10">
      <div className="fixed bottom-0 z-50 h-[72px] w-full bg-[url('/images/mobile-footer-bg.svg')] bg-cover bg-center bg-no-repeat pb-2 pt-3 lg:hidden">
        <nav className="container">
          <ul className="flex w-full items-center justify-between gap-2">
            {navItems.map((item) => (
              <li key={item.text} className="w-[56px]">
                <Link
                  href={item.path}
                  className={cn(
                    'flex flex-col items-center text-[12px] gap-1 text-gray-700/60 relative transition-all',
                    {
                      'text-gray-700 after:size-1.5 after:absolute after:bg-yellow after:rounded-full after:-bottom-1.5':
                        currentPath === item.path,
                      'relative -top-9 bg-teal rounded-full size-14 flex justify-center items-center after:hidden':
                        item.path === '/cart',
                    },
                  )}
                >
                  {item.icon}
                  {item.path !== '/cart' && (
                    <p className="font-bold">{item.text}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
