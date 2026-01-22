'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, Mail, Search } from 'lucide-react';
import { navigationItems, MenuItem } from '@/lib/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const TopBar = () => (
  <div className="bg-primary text-white py-2 text-sm hidden lg:block">
    <Container className="flex justify-between items-center">
      <div className="flex gap-6">
        <span className="hover:text-gray-200 cursor-pointer flex items-center gap-2">
          <Phone size={14} /> +91 123 456 7890
        </span>
        <span className="hover:text-gray-200 cursor-pointer flex items-center gap-2">
          <Mail size={14} /> info@nsriet.edu.in
        </span>
      </div>
      <div className="flex gap-4 font-medium">
        <Link href="/faculty" className="hover:text-accent transition-colors">Faculty</Link>
        <span className="opacity-30">|</span>
        <Link href="/students" className="hover:text-accent transition-colors">Students</Link>
        <span className="opacity-30">|</span>
        <Link href="/parents" className="hover:text-accent transition-colors">Parents</Link>
        <span className="opacity-30">|</span>
        <Link href="/alumni" className="hover:text-accent transition-colors">Alumni</Link>
      </div>
    </Container>
  </div>
);

const NavItem = ({ item, isMobile = false, closeMenu }: { item: MenuItem; isMobile?: boolean; closeMenu?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  if (isMobile) {
    return (
      <div className="border-b border-gray-100 last:border-0">
        <div 
          className="flex justify-between items-center py-3 px-4 font-medium text-corporate-textPrimary"
          onClick={() => hasSubmenu && setIsOpen(!isOpen)}
        >
          {hasSubmenu ? (
            <span className="flex-1 flex justify-between items-center">
              {item.name}
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </span>
          ) : (
            <Link href={item.href} className="block w-full" onClick={closeMenu}>
              {item.name}
            </Link>
          )}
        </div>
        {hasSubmenu && isOpen && (
          <div className="bg-gray-50 border-t border-gray-100">
            {item.submenu!.map((sub) => (
              <Link 
                key={sub.name} 
                href={sub.href} 
                className="block py-2.5 px-8 text-sm text-gray-600 hover:text-primary hover:bg-gray-100"
                onClick={closeMenu}
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative group h-full flex items-center">
      <Link 
        href={item.href} 
        className="flex items-center gap-1.5 px-4 py-6 text-[15px] font-medium text-corporate-textPrimary hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary"
      >
        {item.name}
        {hasSubmenu && <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />}
      </Link>
      
      {hasSubmenu && (
        <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-primary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 rounded-b-lg">
          <div className="py-2">
            {item.submenu!.map((sub) => (
              <Link 
                key={sub.name} 
                href={sub.href} 
                className="block px-6 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <Container>
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 relative h-16 w-48 md:h-20 md:w-64">
               <Link href="/">
                <Image 
                  src="/main-logo1.png" 
                  alt="NSRIET Logo" 
                  fill 
                  className="object-contain object-left"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center h-full">
              {navigationItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
              <div className="ml-6 pl-6 border-l border-gray-200">
                <Button variant="primary" size="sm" className="font-semibold bg-accent hover:bg-accent/90 border-0 shadow-none rounded-full px-6">
                  Admissions
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-primary focus:outline-none"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <span className="font-bold text-lg text-primary">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-red-500">
                <X size={24} />
              </button>
            </div>
            <div className="py-2">
              {navigationItems.map((item) => (
                <NavItem key={item.name} item={item} isMobile closeMenu={() => setMobileMenuOpen(false)} />
              ))}
              <div className="p-4 mt-4 bg-gray-50 border-t border-gray-100">
                <Button className="w-full justify-center bg-accent hover:bg-accent/90">Apply Now</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
