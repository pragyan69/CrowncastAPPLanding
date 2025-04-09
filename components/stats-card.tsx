import type { ReactNode } from "react"

interface StatsCardProps {
  icon: ReactNode
  value: string
  label: string
}

export default function StatsCard({ icon, value, label }: StatsCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-2">{icon}</div>
      <div className="text-2xl md:text-3xl font-bold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  )
}

