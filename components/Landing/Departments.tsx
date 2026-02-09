"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Cpu, Microscope, FlaskConical, Building2, Calculator, Wrench } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import content from "@/data/website_content.json"

// Map icons to department names based on keywords
const getIcon = (name: string) => {
  if (name.includes("Computer") || name.includes("AI")) return Cpu
  if (name.includes("Electronics")) return Calculator
  if (name.includes("Mechanical")) return Wrench
  if (name.includes("Civil")) return Building2
  if (name.includes("Science")) return Microscope
  return FlaskConical
}

export function Departments() {
  return (
    <section id="departments" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-nsrit-blue mb-4">Our Departments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            NSRIT offers a wide range of engineering disciplines, fostering innovation and technical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.academics.departments.map((dept, i) => {
            const Icon = getIcon(dept.name)
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={dept.url} target="_blank">
                  <Card className="h-full hover:shadow-lg transition-shadow border-gray-200 cursor-pointer group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-nsrit-blue/5 flex items-center justify-center mb-4 group-hover:bg-nsrit-blue group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-nsrit-blue transition-colors flex items-center justify-between">
                        {dept.name}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                    </CardHeader>
                    {dept.established && (
                      <CardContent>
                        <CardDescription>Est. {dept.established}</CardDescription>
                      </CardContent>
                    )}
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
