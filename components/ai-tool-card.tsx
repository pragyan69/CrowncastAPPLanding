import type { ReactNode } from "react"
import { Crown } from "lucide-react"

interface AIToolCardProps {
  icon: ReactNode
  title: string
  description: string
  isPremium: boolean
}

export default function AIToolCard({ icon, title, description, isPremium }: AIToolCardProps) {
  return (
    <div className="relative flex flex-col p-6 space-y-4 rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
      {isPremium && (
        <div className="absolute top-3 right-3">
          <Crown className="h-5 w-5 text-red-600" />
        </div>
      )}
      <div className="p-3 rounded-full bg-gray-100 w-fit">{icon}</div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold">{title}</h3>
          {isPremium && <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-800">Premium</span>}
        </div>
        <p className="text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  )
}

