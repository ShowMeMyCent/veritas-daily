interface AccessRequestsProps {
  accessRequests: Array<{
    id: number;
    userName: string;
    email: string;
    requestedRole: string;
    currentRole: string;
    reason: string;
    submittedDate: string;
    status: string;
    portfolio: string;
  }>;
  getStatusBadge: (status: string) => string;
  openModal: (type: string) => void;
}

const AccessRequests: React.FC<AccessRequestsProps> = ({ accessRequests, getStatusBadge, openModal }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-2xl font-bold text-gray-900">Access Elevation Requests</h2>
        <div className="text-sm text-gray-500">
          {accessRequests.filter(r => r.status === 'pending').length} pending requests
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {accessRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{request.userName}</div>
                      <div className="text-sm text-gray-500">{request.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{request.currentRole}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{request.requestedRole}</td>
                  <td className="px-6 py-4">
                    <span className={`text-sm px-2 py-1 rounded-full ${getStatusBadge(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(request.submittedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => openModal('view-request')}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        View
                      </button>
                      {request.status === 'pending' && (
                        <>
                          <button className="text-green-600 hover:text-green-800 text-sm">Approve</button>
                          <button className="text-red-600 hover:text-red-800 text-sm">Reject</button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccessRequests;
