"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles } from "lucide-react"

export default function AIFeatureShowcase() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState("")

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      const content = {
        caption:
          "Embracing the journey of creativity and connection. Every moment is an opportunity to inspire and be inspired. #CreatorLife #Authentic",
        title: "5 Ways to Boost Your Engagement Without Sacrificing Authenticity",
        description:
          "Discover proven strategies that help you connect with your audience on a deeper level while staying true to your unique voice and vision.",
        script:
          "Hey everyone! Today I want to talk about something that's been on my mind lately - how to stay authentic while growing your audience. It's easy to get caught up in the numbers game, but remember why you started creating in the first place...",
      }

      setGeneratedContent(content.caption)
      setIsGenerating(false)
    }, 1500)
  }

  return (
    <div className="rounded-xl border overflow-hidden bg-white">
      <div className="grid md:grid-cols-2">
        <div className="p-6 md:p-8 space-y-6">
          <h3 className="text-2xl font-bold">AI Content Generator</h3>
          <p className="text-gray-500">
            Save time and boost creativity with our AI-powered content tools. Generate captions, titles, descriptions,
            and scripts with just a few clicks.
          </p>

          <Tabs defaultValue="caption" className="w-full">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="caption">Caption</TabsTrigger>
              <TabsTrigger value="title">Title</TabsTrigger>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="script">Script</TabsTrigger>
            </TabsList>
            <div className="space-y-4">
              <div className="rounded-md border p-4 min-h-[100px] bg-gray-50">
                {generatedContent ? (
                  <p className="text-gray-700">{generatedContent}</p>
                ) : (
                  <p className="text-gray-400 italic">Your AI-generated content will appear here...</p>
                )}
              </div>
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                {isGenerating ? "Generating..." : "Generate Content"}
              </Button>
            </div>
          </Tabs>
        </div>
        <div className="bg-purple-100 p-6 md:p-8 flex items-center justify-center">
          <div className="relative max-w-full">
            <img
              src="/images/ai-caption-generator.png"
              alt="AI Content Generation Demo"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white p-3 rounded-lg shadow-lg">
              <Sparkles className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

