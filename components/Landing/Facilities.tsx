"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

import content from "@/data/website_content.json"

export function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">World-Class Facilities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience a campus designed for holistic development and modern learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {content.campusLife.facilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-nsrit-red/50 transition-colors ${
                i === 0 || i === 3 ? "lg:col-span-2" : ""
              }`}
            >
              <Link href={item.url} target="_blank" className="block w-full h-full">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
                <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-nsrit-red transition-colors">{item.name}</h3>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-nsrit-red" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
