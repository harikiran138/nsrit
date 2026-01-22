'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const footerLinks = {
    quickLinks: [
      { label: 'About Us', href: '/about' },
      { label: 'Admissions', href: '/admissions' },
      { label: 'Academics', href: '/academics' },
      { label: 'Placements', href: '/cdc' },
      { label: 'Library', href: '/quick-links' },
      { label: 'Grievance', href: '/feedback' },
    ],
    important: [
      { label: 'Governance', href: '/governance' },
      { label: 'Innovation Council', href: '/iic' },
      { label: 'Industry Connect', href: '/industry' },
      { label: 'Notifications', href: '/notifications' },
      { label: 'Events', href: '/events' },
      { label: 'Careers', href: '/careers' },
    ],
  };

  return (
    <footer className="bg-primary pt-16 border-t-4 border-accent">
      <Container className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="bg-white p-3 rounded-lg inline-block w-auto">
              <Image
                src="/main-logo1.png"
                alt="NSRIET Logo"
                width={120}
                height={60}
                className="h-auto w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Excellence in Engineering Education. Empowering students with knowledge, skills, and innovation for a better tomorrow.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-50 group-hover:opacity-100"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6 uppercase tracking-wider">Important</h4>
            <ul className="space-y-3">
              {footerLinks.important.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-50 group-hover:opacity-100"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  NSRIET Campus, Education District, City, State - 123456
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 123 456 7890</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@nsriet.edu.in</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright Bar */}
      <div className="bg-corporate-dark/30 py-6 border-t border-white/5">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} NSRIET. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
