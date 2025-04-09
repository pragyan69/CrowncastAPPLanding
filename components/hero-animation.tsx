"use client"

import { useState, useEffect } from "react"
import { Gift, Award, Users, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function HeroAnimation() {
  const [step, setStep] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev === 3 ? 1 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full aspect-video bg-white p-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-12 bg-black flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-white">
          <div className="relative w-5 h-5">
            <Image src="/images/crowncast-logo.png" alt="Crowncast Logo" fill className="object-contain" />
          </div>
          <span className="font-medium">Example Giveaway</span>
        </div>
        <div className="px-2 py-1 text-xs font-medium bg-red-600 rounded-full text-white">Active</div>
      </div>

      <div className="mt-16 p-4">
        {step === 1 && (
          <div className="animate-fadeIn">
            <h3 className="text-xl font-bold mb-4">Step 1: Create Campaign</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg border bg-gray-50 hover:shadow-sm transition-shadow">
                <div className="p-2 rounded-full bg-red-100">
                  <Gift className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium mb-1">Set Giveaway Details</div>
                  <div className="h-2 w-3/4 bg-red-200 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-red-600 rounded-full"></div>
                  </div>
                </div>
                <div className="p-1 rounded-full bg-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg border bg-gray-50 hover:shadow-sm transition-shadow">
                <div className="p-2 rounded-full bg-red-100">
                  <Users className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium mb-1">Define Entry Methods</div>
                  <div className="h-2 w-3/4 bg-red-200 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-red-600 rounded-full"></div>
                  </div>
                </div>
                <div className="p-1 rounded-full bg-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg border bg-gray-50 hover:shadow-sm transition-shadow">
                <div className="p-2 rounded-full bg-red-100">
                  <Award className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium mb-1">Set Prize & Duration</div>
                  <div className="h-2 w-3/4 bg-red-200 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-red-600 rounded-full"></div>
                  </div>
                </div>
                <div className="p-1 rounded-full bg-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fadeIn">
            <h3 className="text-xl font-bold mb-4">Step 2: Participants Complete Tasks</h3>
            <div className="space-y-4">
              <div className="p-3 rounded-lg border bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    <span className="font-medium">User1234</span>
                  </div>
                  <div className="px-2 py-1 bg-red-100 rounded-full text-xs font-medium text-red-800">250 points</div>
                </div>
                <div className="flex gap-2">
                  <div className="px-2 py-1 bg-green-100 rounded-full text-xs font-medium text-green-800 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Watched
                  </div>
                  <div className="px-2 py-1 bg-green-100 rounded-full text-xs font-medium text-green-800 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Shared
                  </div>
                  <div className="px-2 py-1 bg-green-100 rounded-full text-xs font-medium text-green-800 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Subscribed
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg border">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    <span className="font-medium">User5678</span>
                  </div>
                  <div className="px-2 py-1 bg-red-100 rounded-full text-xs font-medium text-red-800">150 points</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="px-2 py-1 bg-green-100 rounded-full text-xs font-medium text-green-800 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Watched
                  </div>
                  <div className="px-2 py-1 bg-green-100 rounded-full text-xs font-medium text-green-800 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Shared
                  </div>
                  <button className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium hover:bg-red-200 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fadeIn">
            <h3 className="text-xl font-bold mb-4">Step 3: Track Results</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg border bg-gray-50">
                  <div className="text-sm text-gray-500">Participants</div>
                  <div className="text-2xl font-bold">1,245</div>
                  <div className="text-xs text-green-600">+24% vs last</div>
                </div>
                <div className="p-3 rounded-lg border bg-gray-50">
                  <div className="text-sm text-gray-500">Engagement</div>
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-xs text-green-600">+12% vs last</div>
                </div>
                <div className="p-3 rounded-lg border bg-gray-50">
                  <div className="text-sm text-gray-500">Shares</div>
                  <div className="text-2xl font-bold">3,872</div>
                  <div className="text-xs text-green-600">+38% vs last</div>
                </div>
                <div className="p-3 rounded-lg border bg-gray-50">
                  <div className="text-sm text-gray-500">New Followers</div>
                  <div className="text-2xl font-bold">856</div>
                  <div className="text-xs text-green-600">+18% vs last</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        <button
          className={`h-2 w-8 rounded-full ${step === 1 ? "bg-red-600" : "bg-gray-200"}`}
          onClick={() => setStep(1)}
        />
        <button
          className={`h-2 w-8 rounded-full ${step === 2 ? "bg-red-600" : "bg-gray-200"}`}
          onClick={() => setStep(2)}
        />
        <button
          className={`h-2 w-8 rounded-full ${step === 3 ? "bg-red-600" : "bg-gray-200"}`}
          onClick={() => setStep(3)}
        />
      </div>
    </div>
  )
}

