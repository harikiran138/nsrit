"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/Button"
import content from "@/data/website_content.json"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nsrit-blue text-white pt-20">
      {/* Background Pattern/Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nsrit-blue via-[#003366] to-black opacity-90 z-0" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0" />
      
      {/* Abstract Shapes */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-nsrit-red blur-[120px] opacity-20 rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400 blur-[120px] opacity-20 rounded-full" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm font-medium backdrop-blur-sm mb-4">
            Counseling Code: <span className="text-nsrit-red font-bold">{content.counsellingCode}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            {content.instituteName}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {content.about.vision}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-nsrit-red hover:bg-red-700 text-white min-w-[160px]" asChild>
              <Link href="#academics">
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-black hover:bg-white/10 hover:text-white min-w-[160px]" asChild>
              <Link href={content.about.strategicDocuments.strategicPlan} target="_blank">
                Strategic Plan <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto"
        >
          {[
            { label: "Established", value: content.established },
            { label: "Courses", value: `${content.academics.ugPrograms.length + content.academics.pgPrograms.length}+` },
            { label: "Placement High", value: "39 LPA" }, // Hardcoded from WhyNSRIT
            { label: "Accreditation", value: "NAAC 'A'" },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
