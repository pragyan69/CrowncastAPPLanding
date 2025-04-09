"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Gift,
  Sparkles,
  BarChart3,
  Users,
  Instagram,
  Youtube,
  Award,
  Zap,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Smartphone,
  Monitor,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import FeatureCard from "@/components/feature-card"
import AIToolCard from "@/components/ai-tool-card"
import StatsCard from "@/components/stats-card"
import HeroAnimation from "@/components/hero-animation"
import CreatorDashboard from "@/components/creator-dashboard"
import GiveawayShowcase from "@/components/giveaway-showcase"
import Logo from "@/components/logo"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center justify-between w-full">
            <Logo size="md" />

            {/* Desktop Navigation - Only visible on large screens */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="#how-it-works"
                className="text-sm font-medium hover:text-red-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                How It Works
              </Link>
              <Link
                href="#creators"
                className="text-sm font-medium hover:text-red-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("creators")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                For Creators
              </Link>
              <Link
                href="#ai-tools"
                className="text-sm font-medium hover:text-red-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("ai-tools")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                AI Tools
              </Link>
              <Link
                href="#app"
                className="text-sm font-medium hover:text-red-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("app")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                App Screens
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              {/* Mobile & Medium Screen Navigation */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="border-black hover:bg-gray-100">
                    Menu
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link
                      href="#how-it-works"
                      className="w-full cursor-pointer"
                      onClick={(e) => {
                        document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      How It Works
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="#creators"
                      className="w-full cursor-pointer"
                      onClick={(e) => {
                        document.getElementById("creators")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      For Creators
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="#ai-tools"
                      className="w-full cursor-pointer"
                      onClick={(e) => {
                        document.getElementById("ai-tools")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      AI Tools
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="#app"
                      className="w-full cursor-pointer"
                      onClick={(e) => {
                        document.getElementById("app")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      App Screens
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

             
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gray-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute top-40 -left-40 w-80 h-80 bg-gray-200 rounded-full opacity-50 blur-3xl"></div>
          </div>
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-block px-3 py-1 text-sm bg-red-100 text-red-800 rounded-full mb-2 w-fit">
                  Influencer Marketing, Gamified
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                  Gamify Your <span className="text-red-600">Content Growth</span>
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-xl">
                  Run gamified campaigns, grow your audience, and track real-time results with AI-powered analytics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                    Create Your First Campaign
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-black hover:bg-gray-100">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                      >
                        <img
                          src={`/placeholder.svg?height=32&width=32&text=${i}`}
                          alt="User"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Join our growing community of creators</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-200 rounded-full opacity-30 blur-2xl"></div>
                <div className="relative z-10 bg-white rounded-2xl shadow-xl border overflow-hidden">
                  <HeroAnimation />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Potential Outcomes Section */}
        <section className="py-12 border-y bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">What You Can Achieve in 4 Weeks</h2>
              <p className="text-gray-600 mt-2">Results you can expect when using Crowncast</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatsCard
                icon={<Users className="h-6 w-6 text-red-600" />}
                value="Grow Audience"
                label="Expand your reach"
              />
              <StatsCard
                icon={<Gift className="h-6 w-6 text-red-600" />}
                value="Run Campaigns"
                label="Engage your followers"
              />
              <StatsCard
                icon={<Award className="h-6 w-6 text-red-600" />}
                value="Award Prizes"
                label="Incentivize participation"
              />
              <StatsCard
                icon={<Zap className="h-6 w-6 text-red-600" />}
                value="Boost Engagement"
                label="Increase interaction rates"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple Ecosystem for Maximum Impact
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Crowncast connects creators and audiences in a gamified ecosystem that drives engagement and results.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="relative overflow-hidden border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100 rounded-bl-full"></div>
                <div className="absolute top-4 right-4">
                  <Youtube className="h-6 w-6 text-red-600" />
                </div>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">For Creators</h3>
                  <p className="text-gray-600 mb-4">
                    Run engaging giveaways, grow your audience, and monetize your content with brand partnerships.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">Create gamified giveaways</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">Use AI tools to create content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">Track analytics and growth</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full group border-black hover:bg-gray-100">
                    For Creators
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100 rounded-bl-full"></div>
                <div className="absolute top-4 right-4">
                  <Gift className="h-6 w-6 text-red-600" />
                </div>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">For Participants</h3>
                  <p className="text-gray-600 mb-4">
                    Discover giveaways from your favorite creators, complete fun tasks, and win exciting prizes.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">Join gamified giveaways</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">Complete tasks to earn points</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">Win prizes from your favorite creators</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full group border-black hover:bg-gray-100">
                    For Participants
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Giveaway Showcase */}
        <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-40 -right-40 w-80 h-80 bg-gray-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-200 rounded-full opacity-30 blur-3xl"></div>
          </div>
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">
                  Campaign-Based Giveaways
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Gamified Campaigns That Drive Engagement
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Create interactive giveaways that reward participants for completing tasks and engaging with your
                  content.
                </p>
              </div>
            </div>

            <GiveawayShowcase />

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Gift className="h-10 w-10 text-red-600" />}
                title="Task-Based Entries"
                description="Reward participants for completing tasks like watching videos, sharing content, or following accounts."
              />
              <FeatureCard
                icon={<Award className="h-10 w-10 text-red-600" />}
                title="Points & Leaderboards"
                description="Gamify participation with points and leaderboards to drive competition and engagement."
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10 text-red-600" />}
                title="Real-Time Analytics"
                description="Track participation, engagement, and conversion metrics in real-time."
              />
            </div>
          </div>
        </section>

        {/* Creator Dashboard */}
        <section id="creators" className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">For Creators</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Powerful Tools for Content Creators
                  </h2>
                  <p className="text-gray-500 md:text-lg max-w-lg">
                    Everything you need to run successful campaigns, grow your audience, and monetize your content.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                      <Gift className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Giveaway Creator</h3>
                      <p className="text-gray-600">
                        Build custom giveaways with multiple entry methods, points systems, and automated winner
                        selection.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">AI Content Tools</h3>
                      <p className="text-gray-600">
                        Generate captions, titles, descriptions, and scripts with our AI-powered content tools.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Analytics Dashboard</h3>
                      <p className="text-gray-600">
                        Track campaign performance, audience growth, and engagement metrics in real-time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Join as a Creator
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-200 rounded-full opacity-30 blur-2xl"></div>
                  <div className="relative z-10 rounded-xl border shadow-xl overflow-hidden">
                    <CreatorDashboard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Tools */}
        <section id="ai-tools" className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">AI Tool Suite</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Create Content Faster with AI
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Our AI-powered tools help creators save time and boost creativity.
                </p>
              </div>
            </div>

            <Tabs defaultValue="free" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="free">Free Tools</TabsTrigger>
                  <TabsTrigger value="premium">Premium Tools</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="free" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  <AIToolCard
                    icon={<MessageSquare className="h-6 w-6 text-red-600" />}
                    title="Caption Generator"
                    description="Create engaging captions for your social media posts in seconds."
                    isPremium={false}
                  />
                  <AIToolCard
                    icon={<Sparkles className="h-6 w-6 text-red-600" />}
                    title="Tag Master"
                    description="Generate relevant hashtags to maximize your content's reach."
                    isPremium={false}
                  />
                  <AIToolCard
                    icon={<BarChart3 className="h-6 w-6 text-red-600" />}
                    title="Keyword Explorer"
                    description="Find trending keywords to optimize your content for search."
                    isPremium={false}
                  />
                  <AIToolCard
                    icon={
                      <Image
                        src="/images/crowncast-logo.png"
                        width={24}
                        height={24}
                        alt="Crowncast Logo"
                        className="h-6 w-6"
                      />
                    }
                    title="Headline Hero"
                    description="Craft attention-grabbing headlines and titles for your content."
                    isPremium={false}
                  />
                  <AIToolCard
                    icon={<Youtube className="h-6 w-6 text-red-600" />}
                    title="Description Designer"
                    description="Generate SEO-optimized descriptions for your videos and posts."
                    isPremium={false}
                  />
                  <AIToolCard
                    icon={<Zap className="h-6 w-6 text-red-600" />}
                    title="Script Crafter"
                    description="Create video scripts with perfect pacing and engagement hooks."
                    isPremium={false}
                  />
                </div>
              </TabsContent>
              <TabsContent value="premium" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  <AIToolCard
                    icon={<Sparkles className="h-6 w-6 text-red-600" />}
                    title="Thumbnail Generator"
                    description="Create eye-catching thumbnails that drive higher click-through rates."
                    isPremium={true}
                  />
                  <AIToolCard
                    icon={<Instagram className="h-6 w-6 text-red-600" />}
                    title="Reelsmith"
                    description="Convert long-form videos into engaging short-form content automatically."
                    isPremium={true}
                  />
                  <AIToolCard
                    icon={<Users className="h-6 w-6 text-red-600" />}
                    title="Audience Analyzer"
                    description="Get AI-powered insights about your audience demographics and preferences."
                    isPremium={true}
                  />
                  <AIToolCard
                    icon={<BarChart3 className="h-6 w-6 text-red-600" />}
                    title="Content Calendar"
                    description="AI-generated content calendar based on your audience engagement patterns."
                    isPremium={true}
                  />
                  <AIToolCard
                    icon={<Gift className="h-6 w-6 text-red-600" />}
                    title="Prize Optimizer"
                    description="AI recommendations for prizes that will drive maximum engagement."
                    isPremium={true}
                  />
                  <AIToolCard
                    icon={
                      <Image
                        src="/images/crowncast-logo.png"
                        width={24}
                        height={24}
                        alt="Crowncast Logo"
                        className="h-6 w-6"
                      />
                    }
                    title="Growth Predictor"
                    description="AI-powered growth predictions based on your content strategy."
                    isPremium={true}
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Explore All AI Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* App Screens Showcase */}
        <section id="app" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-40 -right-40 w-80 h-80 bg-gray-200 rounded-full opacity-30 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-200 rounded-full opacity-30 blur-3xl" />
          </div>
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">App Experience</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Seamless Experience Across Devices
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Explore our intuitive app interface designed for creators and participants.
                </p>
              </div>
            </div>

            <div className="space-y-16">
              {/* Onboarding Flow */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Creator Onboarding Flow</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                    <div className="p-4 bg-gray-50 border-b">
                      <h4 className="font-medium text-center">Step 1: Basic Information</h4>
                    </div>
                    <img
                      src="/images/onboarding-basic-info.png"
                      alt="Onboarding - Basic Info"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                    <div className="p-4 bg-gray-50 border-b">
                      <h4 className="font-medium text-center">Step 2: Social Links</h4>
                    </div>
                    <img
                      src="/images/onboarding-social-links.png"
                      alt="Onboarding - Social Links"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                    <div className="p-4 bg-gray-50 border-b">
                      <h4 className="font-medium text-center">Step 3: Creator Portfolio</h4>
                    </div>
                    <img src="/images/creator-portfolio.png" alt="Creator Portfolio" className="w-full h-auto" />
                  </div>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                    <div className="p-4 bg-gray-50 border-b">
                      <h4 className="font-medium text-center">Step 4: Creator Goals</h4>
                    </div>
                    <img src="/images/onboarding-goal.png" alt="Creator Goals" className="w-full h-auto" />
                  </div>
                </div>
              </div>

              {/* App Dashboard Screens */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">App Dashboard Screens</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                    <CreatorDashboard />
                  </div>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                    <div className="p-4 bg-gray-50 border-b">
                      <h4 className="font-medium text-center">AI Content Generator</h4>
                    </div>
                    <img src="/images/ai-content-generator.png" alt="AI Content Generator" className="w-full h-auto" />
                  </div>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
                    <div className="p-4 bg-gray-50 border-b">
                      <h4 className="font-medium text-center">Create Giveaway</h4>
                    </div>
                    <img src="/images/create-giveaway.png" alt="Create Giveaway" className="w-full h-auto" />
                  </div>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Smartphone className="h-10 w-10 text-red-600" />}
                  title="Mobile-First Design"
                  description="Manage campaigns, track performance, and engage with your audience on the go."
                />
                <FeatureCard
                  icon={<Monitor className="h-10 w-10 text-red-600" />}
                  title="Desktop Dashboard"
                  description="Powerful analytics and campaign management tools for professional creators."
                />
                <FeatureCard
                  icon={<Clock className="h-10 w-10 text-red-600" />}
                  title="Real-Time Updates"
                  description="Get instant notifications and live updates on your campaign performance."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Choose the plan that works best for your needs.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Creator Free Plan */}
              <div className="relative rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-500 mb-1">For Creators</div>
                  <h3 className="text-2xl font-bold">Free</h3>
                  <div className="mt-2 text-4xl font-bold">$0</div>
                  <p className="mt-1 text-sm text-gray-500">Forever free</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span>10 giveaway per month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span>Basic AI tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span>Limited analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span>Community access</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button variant="outline" className="w-full border-black hover:bg-gray-100">
                    Get Started
                  </Button>
                </div>
              </div>

              {/* Creator Pro Plan */}
              <div className="relative rounded-2xl border-2 border-red-600 bg-white p-6 shadow-md">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-500 mb-1">For Creators</div>
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <div className="mt-2 text-4xl font-bold">$29</div>
                  <p className="mt-1 text-sm text-gray-500">per month</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span>Unlimited giveaways</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span>All AI tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                    <span>Custom branding</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Get Started</Button>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl max-w-4xl mx-auto border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
                  <p className="text-gray-600">
                    Contact our team for custom pricing and solutions for larger creators.
                  </p>
                </div>
                <Button className="bg-red-600 hover:bg-red-700 text-white whitespace-nowrap">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Crown Your Content?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed opacity-90">
                  Join our waitlist to be among the first to experience Crowncast when we launch.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-black hover:bg-gray-900">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Logo size="md" />
              <p className="text-sm text-gray-500">Connecting creators and audiences through gamified campaigns.</p>
              <div className="flex space-x-4">
                
                <Link href="https://www.instagram.com/crowncast2024/" className="text-gray-500 hover:text-red-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">© 2025 Crowncast. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-xs text-gray-500">Made with ❤️ for creators</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

