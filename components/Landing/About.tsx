"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Target, Eye, BookOpen } from "lucide-react"

import { cn } from "@/lib/utils"
import content from "@/data/website_content.json"

export function About() {
  const [activeTab, setActiveTab] = useState<"about" | "vision" | "mission">("about")

  const tabs = [
    { id: "about", label: "About NSRIT", icon: BookOpen },
    { id: "vision", label: "Our Vision", icon: Eye },
    { id: "mission", label: "Our Mission", icon: Target },
  ] as const

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side - Placeholder for now using generic education image or pattern */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            {/* Using a solid color placeholder if no image, or we could use an abstract pattern */}
            <div className="w-full h-full bg-nsrit-blue/5 flex items-center justify-center text-nsrit-blue/20">
               <span className="text-9xl font-bold opacity-20">NSRIT</span>
            </div>
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <h3 className="text-2xl font-bold">Excellence in Education</h3>
              <p className="opacity-90">Since {content.established}</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="flex space-x-4 border-b">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 pb-3 px-1 text-sm font-medium transition-colors relative",
                    activeTab === tab.id ? "text-nsrit-blue" : "text-gray-500 hover:text-gray-800"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-nsrit-blue"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "about" && (
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-gray-900">Building Leaders of Tomorrow</h2>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {content.about.description}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {content.about.history}
                      </p>
                    </div>
                  )}

                  {activeTab === "vision" && (
                    <div className="p-8 bg-blue-50 rounded-2xl border-l-4 border-nsrit-blue">
                      <h2 className="text-2xl font-bold text-nsrit-blue mb-4">Our Vision</h2>
                      <p className="text-xl text-gray-800 font-medium italic">
                        &quot;{content.about.vision}&quot;
                      </p>
                    </div>
                  )}

                  {activeTab === "mission" && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-nsrit-blue">Mission Statements</h2>
                      <ul className="space-y-4">
                        {content.about.mission.map((m, i) => (
                          <li key={i} className="flex gap-4 items-start">
                            <div className="mt-1 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-nsrit-red font-bold text-sm shrink-0">
                              M{i + 1}
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed">{m.replace(/^M\d\s*:\s*/, "")}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
