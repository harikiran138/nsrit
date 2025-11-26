'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigationItems, MenuItem } from '@/lib/navigation';

const NavLink = ({ item, onClick }: { item: MenuItem; onClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else {
      onClick();
    }
  };

  return (
    <div className="relative">
      <Link
        href={item.href}
        onClick={handleToggle}
        className="flex items-center justify-between px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700"
      >
        {item.name}
        {item.submenu && <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </Link>
      {item.submenu && isOpen && (
        <div className="pl-4">
          {item.submenu.map((subItem) => (
            <NavLink key={subItem.name} item={subItem} onClick={onClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleDesktopMenu = (name: string) => {
    setOpenDesktopMenu(openDesktopMenu === name ? null : name);
  };

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDesktopMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDesktopMenu(null);
    }, 300); // 300ms delay
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setOpenDesktopMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="relative z-40 bg-gradient-to-r from-corporate-navy to-corporate-blue text-white shadow-lg font-['Arial_Narrow']">
      <div className="bg-corporate-darkBlue">
        <div className="section-container py-2 flex justify-between items-center text-sm text-white">
          <div>
           
          </div>
          <div className="hidden lg:flex items-center space-x-4 text-base font-medium">
            <Link href="#" className="hover:text-corporate-lightBlue transition-colors">Circular Notification</Link>
            <span className="text-white/60">|</span>
            <Link href="#" className="hover:text-corporate-lightBlue transition-colors">Upcoming Events</Link>
            <span className="text-white/60">|</span>
            <Link href="/quick-links/feedback" className="hover:text-corporate-lightBlue transition-colors">Feedback</Link>
            <span className="text-white/60">|</span>
            <Link href="#" className="hover:text-corporate-lightBlue transition-colors">News Bulletin</Link>
            <span className="text-white/60">|</span>
            <Link href="/cdc/career-guidance" className="hover:text-corporate-lightBlue transition-colors">Career Opportunities</Link>
          </div>
        </div>
      </div>
      {/* Logo at the top */}
      <div className="pb-1">
        <Link href="/">
          <div className="relative h-20 w-full">
            <Image src="/main-logo1.png" alt="NSRIET Logo" fill className="object-cover" />
          </div>
        </Link>
      </div>

      <div className="section-container pt-[6px] pb-2 relative">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
                onMouseLeave={() => item.submenu && handleMouseLeave()}
              >
                <Link href={item.href} className="text-white hover:opacity-90 font-medium transition-all flex items-center gap-1 py-[7px] px-4 rounded-md hover:bg-white/10">
                  {item.name}
                  {item.submenu && <ChevronDown className={`w-4 h-4 transition-transform ${openDesktopMenu === item.name ? 'rotate-180' : ''}`} />}
                </Link>
                {item.submenu && openDesktopMenu === item.name && (
                  <div
                    className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden min-w-[280px] border border-gray-200 dark:border-gray-700"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name} className="relative group/submenu">
                        <Link
                          href={subItem.href}
                          className="block px-5 py-3 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm border-b border-gray-100 dark:border-gray-700 last:border-b-0 flex items-center justify-between"
                        >
                          {subItem.name}
                           {subItem.submenu && <ChevronDown className="w-3 h-3 opacity-50 ml-2" />}
                        </Link>
                        {subItem.submenu && (
                           <div className="absolute left-full top-0 ml-1 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden min-w-[280px] border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all">
                            {subItem.submenu.map((subSubItem) => (
                              <Link
                                key={subSubItem.name}
                                href={subSubItem.href}
                                className="block px-4 py-2.5 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700"
                              >
                                {subSubItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 sm:px-6 py-4 space-y-2">
            {navigationItems.map((item) => (
              <NavLink key={item.name} item={item} onClick={() => setIsMenuOpen(false)} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
