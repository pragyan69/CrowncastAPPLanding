import Image from "next/image"

export default function CreatorDashboard() {
  return (
    <div className="w-full bg-white p-4">
      <div className="p-4 bg-gray-50 border-b mb-4">
        <div className="flex items-center justify-center gap-2">
          <Image src="/images/crowncast-logo.png" width={24} height={24} alt="Crowncast Logo" />
          <h3 className="text-xl font-bold text-center">Creator Dashboard</h3>
        </div>
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Creator Dashboard</h3>
          <div className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800 rounded-full">
            2 Active Giveaways
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-lg border bg-purple-50">
            <div className="text-sm text-gray-500">Followers</div>
            <div className="text-3xl font-bold">125K</div>
            <div className="text-sm text-green-600">+12% this month</div>
          </div>
          <div className="p-4 rounded-lg border bg-purple-50">
            <div className="text-sm text-gray-500">Engagement</div>
            <div className="text-3xl font-bold">8.2%</div>
            <div className="text-sm text-green-600">+1.5% this month</div>
          </div>
          <div className="p-4 rounded-lg border bg-purple-50">
            <div className="text-sm text-gray-500">Brand Deals</div>
            <div className="text-3xl font-bold">3</div>
            <div className="text-sm text-green-600">+1 this month</div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-bold mb-4">AI Content Tools</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border hover:border-purple-300 cursor-pointer transition-colors">
              <div className="text-base font-medium mb-1">Caption Generator</div>
              <div className="text-sm text-gray-500">Used 12 times</div>
            </div>
            <div className="p-4 rounded-lg border hover:border-purple-300 cursor-pointer transition-colors">
              <div className="text-base font-medium mb-1">Tag Master</div>
              <div className="text-sm text-gray-500">Used 8 times</div>
            </div>
            <div className="p-4 rounded-lg border hover:border-purple-300 cursor-pointer transition-colors">
              <div className="text-base font-medium mb-1">Script Crafter</div>
              <div className="text-sm text-gray-500">Used 5 times</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Active Giveaways</h4>
          <div className="space-y-3">
            <div className="p-3 rounded-lg border bg-purple-50">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-medium">Example Giveaway</div>
                <div className="px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">Active</div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <div>1,245 participants</div>
                <div>Ends in 3 days</div>
              </div>
              <div className="h-1.5 w-full bg-gray-200 rounded-full">
                <div className="h-1.5 bg-purple-600 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>

            <div className="p-3 rounded-lg border">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-medium">Gaming Headset Giveaway</div>
                <div className="px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">Active</div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <div>876 participants</div>
                <div>Ends in 7 days</div>
              </div>
              <div className="h-1.5 w-full bg-gray-200 rounded-full">
                <div className="h-1.5 bg-purple-600 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

