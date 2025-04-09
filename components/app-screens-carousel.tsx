"use client"

import { useState, useEffect } from "react"

const appScreens = [
  "/images/app-dashboard.png",
  "/images/portfolio-creator.png",
  "/images/analytics-dashboard.png",
  "/images/giveaway-dashboard.png",
  "/images/monetization-tools.png",
]

export default function AppScreensCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % appScreens.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {appScreens.map((src, index) => (
          <img
            key={index}
            src={src || "/placeholder.svg"}
            alt={`App Screen ${index + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {appScreens.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${currentImageIndex === index ? "bg-red-600" : "bg-gray-300"}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

