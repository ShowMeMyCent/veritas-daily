const Settings: React.FC = () => {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Admin Settings</h2>
      
      <div className="space-y-6">
        {/* Site Settings */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Site Configuration</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
              <input
                type="text"
                defaultValue="Veritas Daily"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
              <textarea
                rows={3}
                defaultValue="Your trusted source for daily news and insights"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
              <input
                type="email"
                defaultValue="contact@veritasdaily.com"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
          </div>
        </div>

        {/* Content Settings */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Management</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Auto-approve Writer Requests</label>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black">
                <option value="false">Manual Review</option>
                <option value="true">Auto Approve</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Default Article Status</label>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Comments Moderation</label>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black">
                <option value="auto">Auto Approve</option>
                <option value="manual">Manual Review</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Email notifications for new articles</label>
                <p className="text-xs text-gray-500">Get notified when writers publish new articles</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 border-gray-300 text-black focus:ring-black rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Email notifications for access requests</label>
                <p className="text-xs text-gray-500">Get notified when users request role elevation</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 border-gray-300 text-black focus:ring-black rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Daily digest reports</label>
                <p className="text-xs text-gray-500">Receive daily statistics and summaries</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 border-gray-300 text-black focus:ring-black rounded"
              />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
              <input
                type="number"
                defaultValue="30"
                min="5"
                max="240"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Two-Factor Authentication</label>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black">
                <option value="disabled">Disabled</option>
                <option value="optional">Optional</option>
                <option value="required">Required for Admins</option>
                <option value="all">Required for All Users</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-700">Password complexity requirements</label>
                <p className="text-xs text-gray-500">Enforce strong password policies</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 border-gray-300 text-black focus:ring-black rounded"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Save Settings
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
