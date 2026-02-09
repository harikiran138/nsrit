"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

import content from "@/data/website_content.json"

export function Highlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-nsrit-blue mb-4">Why Choose NSRIT?</h2>
          <p className="text-gray-600">
            Discover the unique advantages that make us a leading institution for engineering education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.about.whyNSRIT.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex gap-4 items-start"
            >
              <div className="mt-1 bg-green-100 p-2 rounded-full shrink-0">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <p className="font-medium text-gray-800 leading-snug">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
