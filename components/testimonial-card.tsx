interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
  type: "creator" | "brand"
}

export default function TestimonialCard({ quote, author, role, avatar, type }: TestimonialCardProps) {
  return (
    <div className="flex flex-col h-full p-6 space-y-4 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <svg
          className="absolute -top-6 -left-6 h-12 w-12 text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 flex-1">{quote}</p>
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img src={avatar || "/placeholder.svg"} alt={author} className="h-full w-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium">{author}</h4>
          <div className="flex items-center">
            <p className="text-sm text-gray-500">{role}</p>
            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-800">
              {type === "creator" ? "Creator" : "Brand"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

