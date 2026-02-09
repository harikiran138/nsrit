"use client"

import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

import content from "@/data/website_content.json"

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Address */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{content.shortName}</h2>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 shrink-0 text-nsrit-red" />
                <p className="text-sm leading-relaxed">{content.contact.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-nsrit-red" />
                <p className="text-sm">{content.contact.phone.join(", ")}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-nsrit-red" />
                <a href={`mailto:${content.contact.email}`} className="text-sm hover:text-white transition-colors">
                  {content.contact.email}
                </a>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Link href={content.socialMedia.facebook} target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-nsrit-red transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href={content.socialMedia.instagram} target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-nsrit-red transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href={content.socialMedia.linkedin} target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-nsrit-red transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href={content.socialMedia.youtube} target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-nsrit-red transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              {['About Us', 'Admissions', 'Departments', 'Placements', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(" ", "")}`} className="hover:text-nsrit-red transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* Departments */}
           <div>
            <h3 className="text-lg font-bold mb-6">Departments</h3>
            <ul className="space-y-3 text-gray-400">
              {content.academics.departments.slice(0, 5).map((dept, i) => (
                <li key={i}>
                  <Link href={dept.url} target="_blank" className="hover:text-nsrit-red transition-colors text-sm">
                    {dept.name}
                  </Link>
                </li>
              ))}
              <li className="text-nsrit-red text-sm font-medium">View All Departments &rarr;</li>
            </ul>
          </div>

          {/* Map (Placeholder if iframe is messy) */}
          <div>
             <h3 className="text-lg font-bold mb-6">Location</h3>
             <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Map Integration
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {content.instituteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
