export default function BrandDashboard() {
  return (
    <div className="w-full aspect-video bg-white p-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Brand Dashboard</h3>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
            Active Campaign
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-3 rounded-lg border bg-purple-50">
          <div className="text-sm text-gray-500">Creators</div>
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-green-600">+2 this month</div>
        </div>
        <div className="p-3 rounded-lg border bg-purple-50">
          <div className="text-sm text-gray-500">Campaigns</div>
          <div className="text-2xl font-bold">4</div>
          <div className="text-xs text-green-600">+1 this month</div>
        </div>
        <div className="p-3 rounded-lg border bg-purple-50">
          <div className="text-sm text-gray-500">Total Reach</div>
          <div className="text-2xl font-bold">2.4M</div>
          <div className="text-xs text-green-600">+18% this month</div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3">Campaign Performance</h4>
        <div className="h-40 w-full bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="w-full px-4">
            <div className="flex justify-between mb-2">
              <div className="text-xs text-gray-500">Summer Launch</div>
              <div className="text-xs font-medium">89%</div>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full mb-4">
              <div className="h-2 bg-purple-600 rounded-full" style={{ width: "89%" }}></div>
            </div>

            <div className="flex justify-between mb-2">
              <div className="text-xs text-gray-500">Holiday Special</div>
              <div className="text-xs font-medium">76%</div>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full mb-4">
              <div className="h-2 bg-purple-600 rounded-full" style={{ width: "76%" }}></div>
            </div>

            <div className="flex justify-between mb-2">
              <div className="text-xs text-gray-500">Product Launch</div>
              <div className="text-xs font-medium">92%</div>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full mb-4">
              <div className="h-2 bg-purple-600 rounded-full" style={{ width: "92%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-3">Top Performing Creators</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded-lg border">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
              <div>
                <div className="text-sm font-medium">Creator Name</div>
                <div className="text-xs text-gray-500">1.2M followers</div>
              </div>
            </div>
            <div className="text-sm font-medium text-purple-600">3.2x ROI</div>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg border">
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
    </div>
  )
}

