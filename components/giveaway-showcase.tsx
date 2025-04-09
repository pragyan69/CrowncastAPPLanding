"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Youtube, Instagram, Gift, Award, Users, CheckCircle2, ArrowRight } from "lucide-react"

export default function GiveawayShowcase() {
  const [activeTab, setActiveTab] = useState("creator")

  return (
    <div className="bg-white rounded-xl border shadow-lg overflow-hidden">
      <Tabs defaultValue="creator" className="w-full" onValueChange={setActiveTab}>
        <div className="bg-purple-50 p-4 border-b">
          <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto">
            <TabsTrigger value="creator">Creator View</TabsTrigger>
            <TabsTrigger value="participant">Participant View</TabsTrigger>
            <TabsTrigger value="brand">Brand View</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="creator" className="m-0">
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Create Engaging Giveaways</h3>
                <p className="text-gray-600 mb-6">
                  Design custom giveaways with multiple entry methods, points systems, and automated winner selection.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Multiple Entry Methods</h4>
                      <p className="text-sm text-gray-500">
                        Allow participants to earn points by watching videos, sharing content, following accounts, and
                        more.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Points & Leaderboards</h4>
                      <p className="text-sm text-gray-500">
                        Assign point values to different tasks and create competitive leaderboards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Automated Winner Selection</h4>
                      <p className="text-sm text-gray-500">
                        Let our system randomly select winners based on entries or choose from the top point earners.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                  Create Your First Giveaway
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">iPhone 15 Pro Giveaway</h4>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</div>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-medium mb-2">Entry Methods</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg border bg-white">
                      <div className="flex items-center gap-2">
                        <Youtube className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Watch YouTube Video</span>
                      </div>
                      <div className="text-xs font-medium">+50 points</div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg border bg-white">
                      <div className="flex items-center gap-2">
                        <Instagram className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Follow on Instagram</span>
                      </div>
                      <div className="text-xs font-medium">+25 points</div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg border bg-white">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Share with Friends</span>
                      </div>
                      <div className="text-xs font-medium">+10 points per share</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="text-sm font-medium">Participants</h5>
                    <span className="text-xs text-gray-500">1,245 total</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div className="h-2 bg-purple-600 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">Prize</h5>
                  <div className="p-3 rounded-lg border bg-white flex items-center gap-3">
                    <Award className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="text-sm font-medium">iPhone 15 Pro</div>
                      <div className="text-xs text-gray-500">Drawing in 3 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="participant" className="m-0">
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Join Exciting Giveaways</h3>
                <p className="text-gray-600 mb-6">
                  Discover giveaways from your favorite creators, complete fun tasks, and win amazing prizes.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Easy Task Completion</h4>
                      <p className="text-sm text-gray-500">
                        Complete simple tasks like watching videos, following accounts, or sharing content to earn
                        points.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Track Your Progress</h4>
                      <p className="text-sm text-gray-500">
                        See your position on the leaderboard and track your chances of winning in real-time.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Win Amazing Prizes</h4>
                      <p className="text-sm text-gray-500">
                        From tech gadgets to exclusive merchandise, win prizes from your favorite brands and creators.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                  Browse Giveaways
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">iPhone 15 Pro Giveaway</h4>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Ends in 3 days
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-medium mb-2">Your Progress</h5>
                  <div className="p-3 rounded-lg border bg-white mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Your Points</span>
                      <span className="text-sm font-medium text-purple-600">175 / 250</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border bg-white mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Leaderboard Position</span>
                      <span className="text-sm font-medium text-purple-600">#24 of 1,245</span>
                    </div>
                    <div className="text-xs text-gray-500">Top 100 qualify for bonus entries!</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-medium mb-2">Tasks to Complete</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg border bg-white">
                      <div className="flex items-center gap-2">
                        <Youtube className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Watch YouTube Video</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-xs font-medium text-green-500">Completed</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg border bg-white">
                      <div className="flex items-center gap-2">
                        <Instagram className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Follow on Instagram</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-xs font-medium text-green-500">Completed</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg border bg-white">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Share with Friends (5/10)</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-7 text-xs">
                        Share Now
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">Prize</h5>
                  <div className="p-3 rounded-lg border bg-white flex items-center gap-3">
                    <Award className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="text-sm font-medium">iPhone 15 Pro</div>
                      <div className="text-xs text-gray-500">Winner announced in 4 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="brand" className="m-0">
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Create Brand Campaigns</h3>
                <p className="text-gray-600 mb-6">
                  Launch influencer campaigns, track performance, and generate measurable ROI with our comprehensive
                  brand tools.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Custom Campaign Creation</h4>
                      <p className="text-sm text-gray-500">
                        Design campaigns with specific goals, tasks, and prize structures tailored to your brand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Creator Marketplace</h4>
                      <p className="text-sm text-gray-500">
                        Browse and connect with creators that match your brand's audience and values.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Real-Time Analytics</h4>
                      <p className="text-sm text-gray-500">
                        Track campaign performance, engagement metrics, and ROI in real-time.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                  Start a Brand Campaign
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium">Summer Product Launch</h4>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</div>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-medium mb-2">Campaign Overview</h5>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg border bg-white">
                      <div className="text-xs text-gray-500">Creators</div>
                      <div className="text-lg font-bold">12</div>
                    </div>
                    <div className="p-3 rounded-lg border bg-white">
                      <div className="text-xs text-gray-500">Participants</div>
                      <div className="text-lg font-bold">8,745</div>
                    </div>
                    <div className="p-3 rounded-lg border bg-white">
                      <div className="text-xs text-gray-500">Engagement</div>
                      <div className="text-lg font-bold">24.5%</div>
                    </div>
                    <div className="p-3 rounded-lg border bg-white">
                      <div className="text-xs text-gray-500">Conversion</div>
                      <div className="text-lg font-bold">3.8%</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-medium mb-2">Top Performing Creators</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg border bg-white">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                        <div>
                          <div className="text-sm font-medium">Creator Name</div>
                          <div className="text-xs text-gray-500">1.2M followers</div>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-purple-600">3.2x ROI</div>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg border bg-white">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                        <div>
                          <div className="text-sm font-medium">Creator Name</div>
                          <div className="text-xs text-gray-500">850K followers</div>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-purple-600">2.8x ROI</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">Campaign Tasks</h5>
                  <div className="space-y-2">
                    <div className="p-2 rounded-lg border bg-white">
                      <div className="flex justify-between items-center">
                        <div className="text-sm">Watch Product Demo</div>
                        <div className="text-xs font-medium">7,456 completions</div>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg border bg-white">
                      <div className="flex justify-between items-center">
                        <div className="text-sm">Visit Website</div>
                        <div className="text-xs font-medium">5,234 completions</div>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg border bg-white">
                      <div className="flex justify-between items-center">
                        <div className="text-sm">Share Product</div>
                        <div className="text-xs font-medium">3,892 completions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

