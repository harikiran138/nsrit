"use client"

import { Briefcase, TrendingUp } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import content from "@/data/website_content.json"

export function Placements() {
  return (
    <section id="placements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Stats & Info */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-nsrit-blue">Career & Placements</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We ensure our students are industry-ready with rigorous training and strong corporate connections. 
              Our placement cell works tirelessly to bring the best opportunities.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 text-nsrit-blue mb-4" />
                <div className="text-4xl font-bold text-nsrit-blue mb-1">39 LPA</div>
                <div className="text-sm text-gray-600 font-medium">Highest Package</div>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <Briefcase className="w-8 h-8 text-nsrit-red mb-4" />
                <div className="text-4xl font-bold text-nsrit-red mb-1">100%</div>
                <div className="text-sm text-gray-600 font-medium">Assistance</div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Placement Officer</h4>
              <p className="text-gray-700">{content.placements.contact.name}</p>
              <a href={`mailto:${content.placements.contact.email}`} className="text-nsrit-red hover:underline text-sm">
                {content.placements.contact.email}
              </a>
            </div>

            <Button asChild>
              <Link href="https://nsrit.edu.in/placements/" target="_blank">
                View Placement Report
              </Link>
            </Button>
          </div>

          {/* Recruiters Grid */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Top Recruiters</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {content.recruiters.map((recruiter, i) => (
                <Card key={i} className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all hover:shadow-md cursor-pointer border-gray-100">
                  <span className="font-bold text-gray-700">{recruiter}</span>
                  {/* Ideally we would map company names to logos here */}
                </Card>
              ))}
              {/* Add some placeholders to fill grid */}
              {["Wipro", "Capgemini", "Accenture", "HCL"].map((company, i) => (
                <Card key={`ph-${i}`} className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all hover:shadow-md cursor-pointer border-gray-100">
                  <span className="font-bold text-gray-400">{company}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
