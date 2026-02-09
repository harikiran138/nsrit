"use client"

import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import content from "@/data/website_content.json"

export function Faculty() {
  const leaders = [
    { ...content.leadership.president, role: "President", image: "/placeholder-president.jpg" },
    { ...content.leadership.principal, role: "Principal", image: "/placeholder-principal.jpg" },
    { ...content.leadership.cmo, role: "CMO", image: "/placeholder-cmo.jpg" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-nsrit-blue mb-4">Leadership</h2>
          <p className="text-gray-600">Visionaries guiding NSRIT towards excellence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <Card key={i} className="border-none shadow-xl overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-nsrit-blue to-nsrit-red" />
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-6 overflow-hidden border-4 border-white shadow-lg">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold text-2xl">
                    {leader.name.charAt(0)}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <Badge variant="outline" className="mb-6">{leader.role}</Badge>
                
                <div className="relative p-6 bg-gray-50 rounded-xl">
                  <Quote className="absolute top-4 left-4 w-6 h-6 text-nsrit-blue/20" />
                  <p className="text-gray-600 text-sm italic leading-relaxed pt-2 line-clamp-6 hover:line-clamp-none transition-all duration-300 cursor-pointer">
                    &quot;{leader.message}&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
