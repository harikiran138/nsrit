"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { Badge } from "@/components/ui/Badge"
import content from "@/data/website_content.json"

export function Courses() {
  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-nsrit-blue mb-4">Academic Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive undergraduate and postgraduate programs designed for the future.
          </p>
        </div>

        <Tabs defaultValue="ug" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1 bg-white border rounded-xl">
            <TabsTrigger value="ug" className="py-3 text-base">Undergraduate (B.Tech)</TabsTrigger>
            <TabsTrigger value="pg" className="py-3 text-base">Postgraduate (M.Tech/MBA)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ug" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border animate-fade-in-up">
            <div className="space-y-4">
              {content.academics.ugPrograms.map((program, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors border-b last:border-0 border-gray-100 pb-4 last:pb-0">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{program.branch}</h3>
                    <p className="text-sm text-gray-500">Duration: 4 Years</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center gap-3">
                    <span className="text-sm text-gray-500 font-medium">Intake:</span>
                    <Badge variant="secondary" className="text-base px-3 py-1 bg-blue-50 text-nsrit-blue border-blue-100">
                      {program.intake}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="pg" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border animate-fade-in-up">
            <div className="space-y-4">
              {content.academics.pgPrograms.map((program, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors border-b last:border-0 border-gray-100 pb-4 last:pb-0">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{program.branch}</h3>
                    <p className="text-sm text-gray-500">Duration: 2 Years</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center gap-3">
                    <span className="text-sm text-gray-500 font-medium">Intake:</span>
                    <Badge variant="secondary" className="text-base px-3 py-1 bg-red-50 text-nsrit-red border-red-100">
                      {program.intake}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
