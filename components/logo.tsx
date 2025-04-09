import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "white"
}

export default function Logo({ className = "", size = "md", variant = "default" }: LogoProps) {
  const sizes = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 48, height: 48 },
  }

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative overflow-hidden">
        <Image
          src="/images/crowncast-logo.png"
          alt="Crowncast Logo"
          width={sizes[size].width}
          height={sizes[size].height}
          className="object-contain"
        />
      </div>
      <span
        className={`font-bold ${size === "lg" ? "text-2xl" : size === "md" ? "text-xl" : "text-base"} ${variant === "white" ? "text-white" : "text-black"}`}
      >
        Crowncast
      </span>
    </Link>
  )
}

