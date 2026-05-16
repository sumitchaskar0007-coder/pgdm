import React, { useState, useEffect } from 'react';
import { blogAPI } from '../../api';
import toast from 'react-hot-toast';
import { FiEdit2, FiTrash2, FiPlus, FiX, FiUpload, FiTag, FiUser, FiFileText, FiGlobe, FiEye, FiEyeOff } from 'react-icons/fi';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [formData, setFormData] = useState({
    title: '',
    metaTitle: '',
    metaDescription: '',
    author: '',
    content: '',
    tags: '',
    isPublished: true,
    featuredImage: null
  });

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }],
      ['clean']
    ],
  };

  const quillFormats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent', 'blockquote', 'code-block',
    'link', 'image', 'color', 'background'
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await blogAPI.getAllAdmin();
      console.log('Fetched blogs:', response.data);
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Failed to load blogs: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.title.trim()) errors.title = 'Title is required';
    if (!formData.metaTitle.trim()) errors.metaTitle = 'Meta title is required';
    if (!formData.metaDescription.trim()) errors.metaDescription = 'Meta description is required';
    if (!formData.content.trim()) errors.content = 'Content is required';
    
    if (!editingBlog && !formData.featuredImage) {
      errors.featuredImage = 'Featured image is required';
    }
    
    if (formData.metaDescription.length > 160) {
      errors.metaDescription = 'Meta description should be less than 160 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Form submission started');
    console.log('Form data before validation:', formData);
    
    if (!validateForm()) {
      toast.error('Please fix the errors before submitting');
      return;
    }
    
    setIsSubmitting(true);
    
    const data = new FormData();
    data.append('title', formData.title.trim());
    data.append('metaTitle', formData.metaTitle.trim());
    data.append('metaDescription', formData.metaDescription.trim());
    data.append('author', formData.author.trim() || 'Admin');
    data.append('content', formData.content);
    
    // Convert tags from comma-separated string to array
    const tagsArray = formData.tags 
      ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      : [];
    data.append('tags', JSON.stringify(tagsArray));
    
    data.append('isPublished', formData.isPublished);
    
    if (formData.featuredImage) {
      data.append('featuredImage', formData.featuredImage);
    }

    // Log FormData contents for debugging
    console.log('Submitting FormData:');
    for (let pair of data.entries()) {
      console.log(pair[0], pair[1] instanceof File ? pair[1].name : pair[1]);
    }

    try {
      let response;
      if (editingBlog) {
        console.log('Updating blog:', editingBlog._id);
        response = await blogAPI.update(editingBlog._id, data);
        console.log('Update response:', response);
        toast.success('Blog updated successfully');
      } else {
        console.log('Creating new blog');
        response = await blogAPI.create(data);
        console.log('Create response:', response);
        toast.success('Blog created successfully');
      }
      
      await fetchBlogs();
      resetForm();
    } catch (error) {
      console.error('Error saving blog:', error);
      console.error('Error response:', error.response);
      console.error('Error message:', error.message);
      
      // Show detailed error message
      const errorMessage = error.response?.data?.message || error.message || 'Operation failed';
      toast.error(`Failed to ${editingBlog ? 'update' : 'create'} blog: ${errorMessage}`);
      
      // If it's a validation error, show specific fields
      if (error.response?.data?.errors) {
        const validationErrors = error.response.data.errors;
        Object.keys(validationErrors).forEach(field => {
          toast.error(`${field}: ${validationErrors[field]}`);
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog? This action cannot be undone.')) {
      try {
        await blogAPI.delete(id);
        toast.success('Blog deleted successfully');
        fetchBlogs();
      } catch (error) {
        console.error('Error deleting blog:', error);
        toast.error('Failed to delete blog: ' + (error.response?.data?.message || error.message));
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        toast.error('Please upload a valid image file');
        return;
      }
      setFormData({ ...formData, featuredImage: file });
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      metaTitle: '',
      metaDescription: '',
      author: '',
      content: '',
      tags: '',
      isPublished: true,
      featuredImage: null
    });
    setEditingBlog(null);
    setShowModal(false);
    setFormErrors({});
    setImagePreview(null);
  };

  const editBlog = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      metaTitle: blog.metaTitle,
      metaDescription: blog.metaDescription,
      author: blog.author,
      content: blog.content,
      tags: blog.tags ? blog.tags.join(', ') : '',
      isPublished: blog.isPublished,
      featuredImage: null
    });
    if (blog.featuredImage) {
      setImagePreview(blog.featuredImage);
    }
    setShowModal(true);
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          blog.author?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || 
                          (filterStatus === 'published' && blog.isPublished) ||
                          (filterStatus === 'draft' && !blog.isPublished);
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Blog Management
              </h1>
              <p className="text-gray-600 mt-2">Manage your blog posts, create new content, and track performance</p>
            </div>
            <button 
              onClick={() => setShowModal(true)} 
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FiPlus className="w-5 h-5" /> 
              <span>Write New Blog</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="sm:w-48">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Posts</option>
              <option value="published">Published</option>
              <option value="draft">Drafts</option>
            </select>
          </div>
        </div>

        {/* Blog List */}
        {filteredBlogs.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="text-gray-400 mb-4">
              <FiFileText className="w-20 h-20 mx-auto" />
            </div>
            <p className="text-gray-500 text-lg">No blogs found. Click "Write New Blog" to get started.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Author</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBlogs.map((blog) => (
                    <tr key={blog._id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {blog.featuredImage && (
                            <img src={blog.featuredImage} alt={blog.title} className="w-10 h-10 rounded-lg object-cover" />
                          )}
                          <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">{blog.author}</div>
                      </td>
                      <td className="px-6 py-4">
                        {blog.isPublished ? (
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            <FiEye className="w-3 h-3 mr-1" /> Published
                          </span>
                        ) : (
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            <FiEyeOff className="w-3 h-3 mr-1" /> Draft
                          </span>
                        )}
                       </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">
                          {new Date(blog.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                       </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-3">
                          <button 
                            onClick={() => editBlog(blog)} 
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                            title="Edit"
                          >
                            <FiEdit2 className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={() => handleDelete(blog._id)} 
                            className="text-red-600 hover:text-red-800 transition-colors duration-200"
                            title="Delete"
                          >
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                        </div>
                       </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999] overflow-y-auto" 
          onClick={resetForm}
        >
          <div 
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h2>
              <button onClick={resetForm} className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <FiX className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Title Section */}
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">
                  <FiFileText className="inline mr-2 w-4 h-4" />
                  Blog Title *
                </label>
                <input 
                  type="text" 
                  value={formData.title} 
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
                  className={`w-full px-4 py-3 border ${formErrors.title ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                  placeholder="Enter an engaging title..."
                />
                {formErrors.title && <p className="mt-1 text-sm text-red-600">{formErrors.title}</p>}
              </div>
              
              {/* Meta Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    <FiGlobe className="inline mr-2 w-4 h-4" />
                    Meta Title *
                  </label>
                  <input 
                    type="text" 
                    value={formData.metaTitle} 
                    onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })} 
                    className={`w-full px-4 py-3 border ${formErrors.metaTitle ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="SEO title (50-60 characters)"
                  />
                  {formErrors.metaTitle && <p className="mt-1 text-sm text-red-600">{formErrors.metaTitle}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    <FiUser className="inline mr-2 w-4 h-4" />
                    Author
                  </label>
                  <input 
                    type="text" 
                    value={formData.author} 
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Author name"
                  />
                </div>
              </div>
              
              {/* Meta Description */}
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">
                  Meta Description *
                </label>
                <textarea 
                  value={formData.metaDescription} 
                  onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })} 
                  className={`w-full px-4 py-3 border ${formErrors.metaDescription ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  rows="3"
                  placeholder="Brief description for search engines (max 160 characters)"
                />
                <div className="flex justify-between mt-1">
                  {formErrors.metaDescription && <p className="text-sm text-red-600">{formErrors.metaDescription}</p>}
                  <p className={`text-sm ${formData.metaDescription.length > 160 ? 'text-red-600' : 'text-gray-500'}`}>
                    {formData.metaDescription.length}/160 characters
                  </p>
                </div>
              </div>
              
              {/* Tags */}
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">
                  <FiTag className="inline mr-2 w-4 h-4" />
                  Tags
                </label>
                <input 
                  type="text" 
                  value={formData.tags} 
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })} 
                  placeholder="education, technology, programming (comma separated)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Separate tags with commas</p>
              </div>
              
              {/* Featured Image */}
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">
                  <FiUpload className="inline mr-2 w-4 h-4" />
                  Featured Image {!editingBlog && '*'}
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-blue-500 transition-colors duration-200">
                  <div className="space-y-1 text-center">
                    {(imagePreview || formData.featuredImage) && !editingBlog ? (
                      <div className="mb-4">
                        <img src={imagePreview} alt="Preview" className="max-h-48 mx-auto rounded-lg shadow-md" />
                      </div>
                    ) : editingBlog && imagePreview && (
                      <div className="mb-4">
                        <img src={imagePreview} alt="Current" className="max-h-48 mx-auto rounded-lg shadow-md" />
                      </div>
                    )}
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleImageChange} />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                    {formErrors.featuredImage && <p className="text-sm text-red-600">{formErrors.featuredImage}</p>}
                  </div>
                </div>
              </div>
              
              {/* Content Editor */}
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">
                  Content *
                </label>
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={(value) => setFormData({ ...formData, content: value })}
                  modules={quillModules}
                  formats={quillFormats}
                  className={`bg-white rounded-xl ${formErrors.content ? 'border-2 border-red-500' : ''}`}
                  style={{ height: '400px', marginBottom: '50px' }}
                />
                {formErrors.content && <p className="mt-1 text-sm text-red-600">{formErrors.content}</p>}
              </div>
              
              {/* Publish Status */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.isPublished} 
                    onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })} 
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">Publish immediately</span>
                </label>
                {!formData.isPublished && (
                  <span className="text-sm text-yellow-600">This post will be saved as a draft</span>
                )}
              </div>
              
              {/* Form Actions */}
              <div className="flex gap-4 pt-4 sticky bottom-0 bg-white pb-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Saving...' : (editingBlog ? 'Update Blog' : 'Create Blog')}
                </button>
                <button 
                  type="button" 
                  onClick={resetForm} 
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-300 transition-all duration-200 font-semibold"
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

export default BlogAdmin;