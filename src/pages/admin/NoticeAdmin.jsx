import React, { useState, useEffect } from 'react';
import { noticeAPI } from '../../api';
import toast from 'react-hot-toast';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

const NoticeAdmin = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    isImportant: false
  });

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await noticeAPI.getAll();
      setNotices(response.data);
    } catch {
      toast.error('Failed to load notices');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingNotice) {
        await noticeAPI.update(editingNotice._id, formData);
        toast.success('Notice updated');
      } else {
        await noticeAPI.create(formData);
        toast.success('Notice added');
      }
      fetchNotices();
      resetForm();
    } catch {
      toast.error('Operation failed');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this notice?')) {
      try {
        await noticeAPI.delete(id);
        toast.success('Deleted successfully');
        fetchNotices();
      } catch {
        toast.error('Delete failed');
      }
    }
  };

  const resetForm = () => {
    setFormData({ title: '', content: '', isImportant: false });
    setEditingNotice(null);
    setShowModal(false);
  };

  const editNotice = (notice) => {
    setEditingNotice(notice);
    setFormData({
      title: notice.title,
      content: notice.content,
      isImportant: notice.isImportant
    });
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Notice Management</h1>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            <FiPlus /> Add Notice
          </button>
        </div>

        {/* NOTICE LIST */}
        <div className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice._id}
              className={`bg-white rounded-lg shadow-md p-6 ${
                notice.isImportant ? 'border-l-4 border-red-500' : ''
              }`}
            >
              <div className="flex justify-between">

                <div>
                  <h2 className="text-xl font-semibold">{notice.title}</h2>
                  <p className="text-gray-700">{notice.content}</p>

                  <div className="text-sm text-gray-500 mt-2">
                    {new Date(notice.date).toLocaleDateString()}
                    {notice.isImportant && (
                      <span className="ml-3 text-red-600 font-bold">
                        Important
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => editNotice(notice)} className="text-blue-600">
                    <FiEdit2 />
                  </button>

                  <button onClick={() => handleDelete(notice._id)} className="text-red-600">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ FULL SCREEN MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">

          {/* FORM BOX */}
          <div className="bg-white w-full max-w-xl mx-4 rounded-xl shadow-xl p-6">

            <h2 className="text-2xl font-bold mb-6 text-center">
              {editingNotice ? 'Edit Notice' : 'Add Notice'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
                required
              />

              <textarea
                placeholder="Content"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
                rows="5"
                required
              />

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.isImportant}
                  onChange={(e) =>
                    setFormData({ ...formData, isImportant: e.target.checked })
                  }
                />
                Mark as Important
              </label>

              {/* BUTTONS */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Save
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-gray-300 py-2 rounded"
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeAdmin;