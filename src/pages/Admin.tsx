import { useState } from 'react';
import Dashboard from '../components/admin/Dashboard';
import Articles from '../components/admin/Articles';
import Categories from '../components/admin/Categories';
import AccessRequests from '../components/admin/AccessRequests';
import Users from '../components/admin/Users';
import Settings from '../components/admin/Settings';
import Modal from '../components/admin/Modal';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  
  // Mock data for articles
  const articles = [
    {
      id: 1,
      title: "Global Climate Summit Reaches Historic Agreement",
      author: "Sarah Mitchell",
      category: "Environment",
      status: "published",
      date: "2025-09-25",
      views: 1234,
      comments: 45
    },
    {
      id: 2,
      title: "Technology Breakthrough in Quantum Computing",
      author: "Dr. James Chen",
      category: "Technology",
      status: "draft",
      date: "2025-09-24",
      views: 0,
      comments: 0
    },
    {
      id: 3,
      title: "Economic Markets Show Strong Recovery",
      author: "Michael Rodriguez",
      category: "Business",
      status: "published",
      date: "2025-09-23",
      views: 856,
      comments: 23
    }
  ];

  // Mock data for categories
  const categories = [
    { id: 1, name: "Politics", articleCount: 25, color: "#3B82F6" },
    { id: 2, name: "Business", articleCount: 18, color: "#10B981" },
    { id: 3, name: "Technology", articleCount: 32, color: "#8B5CF6" },
    { id: 4, name: "Environment", articleCount: 15, color: "#059669" },
    { id: 5, name: "Health", articleCount: 12, color: "#DC2626" },
    { id: 6, name: "Sports", articleCount: 28, color: "#EA580C" },
    { id: 7, name: "Culture", articleCount: 20, color: "#7C3AED" },
    { id: 8, name: "Science", articleCount: 16, color: "#0891B2" }
  ];

  // Mock data for access elevation requests
  const accessRequests = [
    {
      id: 1,
      userName: "John Smith",
      email: "john.smith@email.com",
      requestedRole: "Writer",
      currentRole: "Reader",
      reason: "I have 5 years of experience in journalism and would like to contribute articles about technology and business.",
      submittedDate: "2025-09-26",
      status: "pending",
      portfolio: "https://johnsmith-portfolio.com"
    },
    {
      id: 2,
      userName: "Maria Garcia",
      email: "maria.garcia@email.com",
      requestedRole: "Editor",
      currentRole: "Writer",
      reason: "I've been writing for Veritas Daily for 2 years and would like to help with editing and content management.",
      submittedDate: "2025-09-24",
      status: "approved",
      portfolio: ""
    },
    {
      id: 3,
      userName: "David Johnson",
      email: "david.j@email.com",
      requestedRole: "Writer",
      currentRole: "Reader",
      reason: "Sports journalist with 8 years experience covering NBA and NFL. Looking to contribute sports content.",
      submittedDate: "2025-09-22",
      status: "rejected",
      portfolio: "https://sportsjournalist-david.com"
    }
  ];

  const stats = {
    totalArticles: 156,
    publishedArticles: 134,
    draftArticles: 18,
    scheduledArticles: 4,
    totalViews: 1250000,
    totalUsers: 12500,
    pendingRequests: 5,
    activeWriters: 15
  };

  const getStatusBadge = (status: string) => {
    const statusStyles: { [key: string]: string } = {
      published: 'bg-green-100 text-green-800',
      draft: 'bg-yellow-100 text-yellow-800',
      scheduled: 'bg-blue-100 text-blue-800',
      pending: 'bg-orange-100 text-orange-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    
    return statusStyles[status] || 'bg-gray-100 text-gray-800';
  };

  const openModal = (type: string) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
  };

  const sidebarItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'articles', name: 'Articles', icon: '📝' },
    { id: 'categories', name: 'Categories', icon: '🏷️' },
    { id: 'access-requests', name: 'Access Requests', icon: '🔑' },
    { id: 'users', name: 'Users', icon: '👥' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="font-serif text-2xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-sm text-gray-600 mt-1">Veritas Daily</p>
        </div>
        
        <nav className="mt-6">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                activeSection === item.id ? 'bg-gray-100 border-r-2 border-black' : ''
              }`}
            >
              <span className="text-lg mr-3">{item.icon}</span>
              <span className={`font-medium ${
                activeSection === item.id ? 'text-black' : 'text-gray-700'
              }`}>
                {item.name}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Dashboard Section */}
        {activeSection === 'dashboard' && (
          <Dashboard 
            stats={stats} 
            articles={articles} 
            getStatusBadge={getStatusBadge} 
          />
        )}

        {/* Articles Section */}
        {activeSection === 'articles' && (
          <Articles 
            articles={articles} 
            categories={categories} 
            getStatusBadge={getStatusBadge} 
            openModal={openModal} 
          />
        )}

        {/* Categories Section */}
        {activeSection === 'categories' && (
          <Categories 
            categories={categories} 
            openModal={openModal} 
          />
        )}

        {/* Access Requests Section */}
        {activeSection === 'access-requests' && (
          <AccessRequests 
            accessRequests={accessRequests} 
            getStatusBadge={getStatusBadge} 
            openModal={openModal} 
          />
        )}

        {/* Users Section */}
        {activeSection === 'users' && (
          <Users />
        )}

        {/* Settings Section */}
        {activeSection === 'settings' && (
          <Settings />
        )}
      </main>

      {/* Modal */}
      <Modal 
        isOpen={showModal} 
        onClose={closeModal}
        title={
          modalType === 'create-article' ? 'Create New Article' :
          modalType === 'create-category' ? 'Create New Category' :
          modalType === 'view-request' ? 'Access Request Details' :
          'Modal'
        }
      >
        {/* Modal Content */}
        {modalType === 'create-article' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter article title..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black">
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                rows={6}
                placeholder="Write your article content..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div className="flex space-x-3 pt-4">
              <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Save as Draft
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Publish
              </button>
            </div>
          </div>
        )}

        {modalType === 'create-category' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
              <input
                type="text"
                placeholder="Enter category name..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
              <input
                type="color"
                defaultValue="#3B82F6"
                className="w-full h-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                rows={3}
                placeholder="Category description..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>
            <div className="flex space-x-3 pt-4">
              <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Create Category
              </button>
            </div>
          </div>
        )}

        {modalType === 'view-request' && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Request Information</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Name:</span>
                  <span className="ml-2 font-medium">John Smith</span>
                </div>
                <div>
                  <span className="text-gray-600">Email:</span>
                  <span className="ml-2 font-medium">john.smith@email.com</span>
                </div>
                <div>
                  <span className="text-gray-600">Current Role:</span>
                  <span className="ml-2 font-medium">Reader</span>
                </div>
                <div>
                  <span className="text-gray-600">Requested Role:</span>
                  <span className="ml-2 font-medium">Writer</span>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                I have 5 years of experience in journalism and would like to contribute articles about technology and business.
              </p>
            </div>
            <div className="flex space-x-3 pt-4">
              <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                Close
              </button>
              <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
                Reject
              </button>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                Approve
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Admin;