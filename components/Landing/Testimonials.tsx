"use client"

import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import content from "@/data/website_content.json"

export function Testimonials() {
  return (
    <section className="py-20 bg-nsrit-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-nsrit-red/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-16">Stories of Success</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {content.testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-white/10 border-white/20 backdrop-blur-md text-white">
              <CardContent className="pt-8">
                <Quote className="w-10 h-10 text-nsrit-red mb-4 opacity-80" />
                <p className="text-lg italic leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <div className="font-bold text-xl">{testimonial.author}</div>
                  <div className="text-gray-300 text-sm">{testimonial.organization}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
