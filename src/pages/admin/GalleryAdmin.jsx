import React, { useState, useEffect } from 'react';
import { galleryAPI } from '../../api';
import toast from 'react-hot-toast';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

const GalleryAdmin = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingImage, setEditingImage] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'other',
    image: null
  });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await galleryAPI.getAll();
      setImages(response.data);
    } catch (error) {
      toast.error('Failed to load images');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('category', formData.category);
    if (formData.image) data.append('image', formData.image);

    try {
      if (editingImage) {
        await galleryAPI.update(editingImage._id, data);
        toast.success('Image updated successfully');
      } else {
        await galleryAPI.create(data);
        toast.success('Image added successfully');
      }

      fetchImages();
      resetForm();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Operation failed');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this image?')) {
      try {
        await galleryAPI.delete(id);
        toast.success('Deleted successfully');
        fetchImages();
      } catch {
        toast.error('Delete failed');
      }
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', category: 'other', image: null });
    setEditingImage(null);
    setShowModal(false);
  };

  const editImage = (image) => {
    setEditingImage(image);
    setFormData({
      title: image.title,
      description: image.description,
      category: image.category,
      image: null
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
          <h1 className="text-3xl font-bold">Gallery Management</h1>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            <FiPlus /> Add Image
          </button>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={image.imageUrl} alt={image.title} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-gray-600 text-sm">{image.description}</p>

                <span className="inline-block px-2 py-1 bg-gray-200 rounded text-xs my-2">
                  {image.category}
                </span>

                <div className="flex justify-end gap-3">
                  <button onClick={() => editImage(image)} className="text-blue-600">
                    <FiEdit2 />
                  </button>

                  <button onClick={() => handleDelete(image._id)} className="text-red-600">
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
          <div className="bg-white w-full max-w-lg mx-4 rounded-xl shadow-xl p-6 animate-fadeIn">

            <h2 className="text-2xl font-bold mb-6 text-center">
              {editingImage ? 'Edit Image' : 'Add Image'}
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
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
                required
              />

              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              >
                <option value="events">Events</option>
                <option value="activities">Activities</option>
                <option value="campus">Campus</option>
                <option value="other">Other</option>
              </select>

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.files[0] })
                }
                className="w-full"
                required={!editingImage}
              />

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

export default GalleryAdmin;