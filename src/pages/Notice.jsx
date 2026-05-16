import React from 'react';
import { useState, useEffect } from 'react';
import { noticeAPI } from '../api';
import toast from 'react-hot-toast';

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await noticeAPI.getAll();
      setNotices(response.data);
    } catch (error) {
      toast.error('Failed to load notices');
    } finally {
      setLoading(false);
    }
  };

  const filteredNotices = filter === 'important' 
    ? notices.filter(notice => notice.isImportant)
    : notices;

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Notices & Announcements</h1>
        
        <div className="mb-6 flex justify-center gap-4">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>All Notices</button>
          <button onClick={() => setFilter('important')} className={`px-4 py-2 rounded ${filter === 'important' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}>Important</button>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredNotices.map((notice) => (
            <div key={notice._id} className={`bg-white rounded-lg shadow-md p-6 ${notice.isImportant ? 'border-l-4 border-red-500' : ''}`}>
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-semibold">{notice.title}</h2>
                {notice.isImportant && <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Important</span>}
              </div>
              <p className="text-gray-700 mb-4">{notice.content}</p>
              <div className="text-sm text-gray-500">
                Posted on: {new Date(notice.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notice;