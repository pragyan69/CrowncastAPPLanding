import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  highlighted?: boolean
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col p-6 space-y-6 rounded-lg border ${
        highlighted ? "border-purple-600 shadow-lg" : "border-gray-200 shadow-sm"
      }`}
    >
      {highlighted && (
        <div className="px-3 py-1 text-xs font-medium text-white bg-purple-600 rounded-full w-fit mx-auto">
          Most Popular
        </div>
      )}
      <div className="space-y-2 text-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex justify-center items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "$0" && <span className="ml-1 text-gray-500">/month</span>}
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`mt-auto ${
          buttonVariant === "default"
            ? "bg-purple-600 hover:bg-purple-700 text-white"
            : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
        }`}
      >
        {buttonText}
      </Button>
    </div>
  )
}

