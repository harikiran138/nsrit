'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <footer className="bg-gradient-to-b from-blue-600 to-blue-900 text-white pt-16 pb-0 relative">
      <div className="absolute inset-0 h-[70%] w-full bg-cover bg-center opacity-10 text-transparent" style={{ backgroundImage: 'url(/footer-bg.jpg)' }}></div>
      {/* Main Footer Content */}
      <div className="section-container px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/main-logo1.png"
              alt="NSRIET Logo"
              width={80}
              height={50}
              className="mb-4 bg-white/10 rounded-lg p-2 backdrop-blur-sm"
            />
            <h3 className="font-bold text-xl mb-4">NSRIET</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Excellence in Engineering Education. Empowering students with knowledge, skills, and innovation for a better tomorrow.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-400 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-blue-100 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-400 rounded-full"></span>
              Important Links
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.important.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-blue-100 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-400 rounded-full"></span>
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-blue-100">NSRIET Campus, Education District, City, State - 123456</span>
              </li>
              <li className="flex items-center gap-3 group hover:text-white transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-blue-100">+91 1234567890</span>
              </li>
              <li className="flex items-center gap-3 group hover:text-white transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-blue-100">info@nsriet.edu.in</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-3 bg-white/10 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-white/10">
        <div className="section-container px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-blue-200"
            >
              © {new Date().getFullYear()} NSRIET. All rights reserved. | <span className="font-medium">Engineering Excellence</span>
            </motion.p>

            {/* Bottom Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 md:gap-6 md:justify-end text-sm"
            >
              <Link
                href="/privacy"
                className="text-blue-200 hover:text-white hover:underline transition-colors group flex items-center gap-1"
              >
                Privacy Policy
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="/terms"
                className="text-blue-200 hover:text-white hover:underline transition-colors group flex items-center gap-1"
              >
                Terms of Service
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
