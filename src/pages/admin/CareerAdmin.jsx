import React, { useState, useEffect } from 'react';
import { careerAPI } from '../../api';
import toast from 'react-hot-toast';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

const CareerAdmin = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCareer, setEditingCareer] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    description: '',
    requirements: '',
    salary: '',
    deadline: '',
    isActive: true
  });

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const response = await careerAPI.getAll();
      setCareers(response.data);
    } catch {
      toast.error('Failed to load careers');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCareer) {
        await careerAPI.update(editingCareer._id, formData);
        toast.success('Career updated successfully');
      } else {
        await careerAPI.create(formData);
        toast.success('Career added successfully');
      }
      fetchCareers();
      resetForm();
    } catch {
      toast.error('Operation failed');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this career posting?')) {
      try {
        await careerAPI.delete(id);
        toast.success('Deleted successfully');
        fetchCareers();
      } catch {
        toast.error('Delete failed');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      department: '',
      location: '',
      type: 'Full-time',
      description: '',
      requirements: '',
      salary: '',
      deadline: '',
      isActive: true
    });
    setEditingCareer(null);
    setShowModal(false);
  };

  const editCareer = (career) => {
    setEditingCareer(career);
    setFormData({
      title: career.title,
      department: career.department,
      location: career.location,
      type: career.type,
      description: career.description,
      requirements: career.requirements,
      salary: career.salary || '',
      deadline: career.deadline.split('T')[0],
      isActive: career.isActive
    });
    setShowModal(true);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Career Management</h1>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            <FiPlus /> Add Job Posting
          </button>
        </div>

        {/* LIST */}
        <div className="grid grid-cols-1 gap-4">
          {careers.map((career) => (
            <div key={career._id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{career.title}</h2>
                  <p className="text-gray-600">{career.department} • {career.location}</p>
                  <p className="text-gray-500">{career.type}</p>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => editCareer(career)} className="text-blue-600">
                    <FiEdit2 />
                  </button>

                  <button onClick={() => handleDelete(career._id)} className="text-red-600">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ FULL SCREEN FORM WITH TOP MARGIN */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto">

          {/* FORM CONTAINER */}
          <div className="min-h-screen flex justify-center">

            {/* ✅ ADD TOP MARGIN HERE */}
            <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-6 mt-16 mb-10">

              <h2 className="text-2xl font-bold mb-6 text-center">
                {editingCareer ? 'Edit Job Posting' : 'Add Job Posting'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  placeholder="Job Title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border px-3 py-2 rounded"
                  required
                />

                <input
                  type="text"
                  placeholder="Department"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full border px-3 py-2 rounded"
                  required
                />

                <input
                  type="text"
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full border px-3 py-2 rounded"
                  required
                />

                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full border px-3 py-2 rounded"
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>

                <textarea
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full border px-3 py-2 rounded"
                  required
                />

                <textarea
                  placeholder="Requirements"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full border px-3 py-2 rounded"
                  required
                />

                <input
                  type="text"
                  placeholder="Salary"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  className="w-full border px-3 py-2 rounded"
                />

                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="w-full border px-3 py-2 rounded"
                  required
                />

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) =>
                      setFormData({ ...formData, isActive: e.target.checked })
                    }
                  />
                  Active Job
                </label>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 rounded"
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
        </div>
      )}
    </div>
  );
};

export default CareerAdmin;