import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FiImage, FiBell, FiBriefcase, FiBookOpen, FiLogOut } from 'react-icons/fi';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const menuItems = [
    { 
      path: '/admin/gallery', 
      icon: FiImage, 
      title: 'Gallery Management', 
      description: 'Add, edit, or remove gallery images' 
    },
    { 
      path: '/admin/notices', 
      icon: FiBell, 
      title: 'Notice Management', 
      description: 'Manage notices and announcements' 
    },
    { 
      path: '/admin/careers', 
      icon: FiBriefcase, 
      title: 'Career Management', 
      description: 'Manage job postings and career opportunities' 
    },
    { 
      path: '/admin/blogs',  // Changed from '/admin/blog' to '/admin/blogs' to match the route
      icon: FiBookOpen, 
      title: 'Blog Management', 
      description: 'Create and manage blog posts' 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <button 
            onClick={handleLogout} 
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            <FiLogOut /> Logout
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <item.icon className="text-4xl text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;