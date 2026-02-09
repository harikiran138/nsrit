"use client"

import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import content from "@/data/website_content.json"

export function NewsEvents() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-nsrit-blue mb-12 text-center">Latest News & Events</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.news.map((item, i) => (
            <Link key={i} href={item.url} target="_blank" className="block group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-nsrit-red border-t-0 border-r-0 border-b-0 bg-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 text-nsrit-red" />
                    <span>Recent Update</span>
                  </div>
                  <CardTitle className="text-lg leading-snug group-hover:text-nsrit-blue transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm font-medium text-nsrit-red mt-2 group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
