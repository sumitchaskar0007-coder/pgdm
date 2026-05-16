import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogAPI } from '../../api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import toast from 'react-hot-toast';

const BlogForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    metaTitle: '',
    metaDescription: '',
    author: '',
    content: '',
    featuredImage: '',
    tags: '',
  });

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      // Fix: Use getById instead of getBySlug since we have an ID
      const response = await blogAPI.getById(id);
      // Fix: Access data correctly - response.data is the blog object
      const blog = response.data;
      setFormData({
        title: blog.title || '',
        metaTitle: blog.metaTitle || '',
        metaDescription: blog.metaDescription || '',
        author: blog.author || '',
        content: blog.content || '',
        featuredImage: blog.featuredImage || '',
        tags: blog.tags ? blog.tags.join(', ') : '',
      });
    } catch (error) {
      console.error('Error fetching blog:', error);
      toast.error('Failed to fetch blog');
      navigate('/admin/blog');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContentChange = (content) => {
    setFormData({
      ...formData,
      content,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Validate required fields
  if (!formData.title || !formData.title.trim()) {
    toast.error('Blog title is required');
    return;
  }

  if (!formData.content || !formData.content.trim()) {
    toast.error('Blog content is required');
    return;
  }

  if (!formData.featuredImage || !formData.featuredImage.trim()) {
    toast.error('Featured image URL is required');
    return;
  }

  const blogData = {
    title: formData.title.trim(),
    metaTitle: formData.metaTitle ? formData.metaTitle.trim() : formData.title.trim(),
    metaDescription: formData.metaDescription ? formData.metaDescription.trim() : formData.title.substring(0, 160),
    author: formData.author ? formData.author.trim() : 'Admin',
    content: formData.content,
    featuredImage: formData.featuredImage.trim(),
    tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [],
  };

  console.log('Submitting blog data:', blogData);

  try {
    setLoading(true);
    let response;
    if (id) {
      response = await blogAPI.update(id, blogData);
      console.log('Update response:', response);
      toast.success('Blog updated successfully');
    } else {
      response = await blogAPI.create(blogData);
      console.log('Create response:', response);
      toast.success('Blog created successfully');
    }
    navigate('/admin/blog');
  } catch (error) {
    console.error('Error saving blog:', error);
    console.error('Error response:', error.response);
    console.error('Error message:', error.message);
    
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const errorMessage = error.response.data?.message || error.response.data?.error || 'Failed to save blog';
      toast.error(errorMessage);
    } else if (error.request) {
      // The request was made but no response was received
      toast.error('No response from server. Please check if the server is running.');
    } else {
      // Something happened in setting up the request that triggered an Error
      toast.error('Error: ' + error.message);
    }
  } finally {
    setLoading(false);
  }
};
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      ['clean'],
    ],
  };

  if (loading && id) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {id ? 'Edit Blog' : 'Create New Blog'}
              </h1>
              <p className="text-gray-600 mt-1">
                {id ? 'Update your blog post' : 'Write a new blog post'}
              </p>
            </div>
            <button
              onClick={() => navigate('/admin/blog')}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Blogs
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blog Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter blog title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author Name
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter author name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">Default: Admin</p>
            </div>

            {/* Meta Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Title (for SEO)
              </label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleChange}
                placeholder="Enter meta title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">If empty, blog title will be used</p>
            </div>

            {/* Meta Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Description (for SEO)
              </label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                placeholder="Enter meta description"
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">If empty, first 160 characters of title will be used</p>
            </div>

            {/* Featured Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image URL *
              </label>
              <input
                type="url"
                name="featuredImage"
                value={formData.featuredImage}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {formData.featuredImage && (
                <div className="mt-2">
                  <img
                    src={formData.featuredImage}
                    alt="Preview"
                    className="h-32 w-auto object-cover rounded"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x200?text=Invalid+Image+URL';
                    }}
                  />
                </div>
              )}
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="education, school, admission"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">Example: management, education, placement</p>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blog Content *
              </label>
              <ReactQuill
                theme="snow"
                value={formData.content}
                onChange={handleContentChange}
                modules={modules}
                className="bg-white"
                style={{ height: '400px', marginBottom: '50px' }}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Saving...' : (id ? 'Update Blog' : 'Create Blog')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
