import axios from 'axios';

const API_URL = 'https://api.adityainstitutepgdm.com/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  // For FormData, let browser set Content-Type with boundary
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }
  
  console.log('API Request:', {
    url: config.url,
    method: config.method,
    headers: config.headers,
    data: config.data instanceof FormData ? 'FormData' : config.data
  });
  
  return config;
}, (error) => {
  console.error('API Request Error:', error);
  return Promise.reject(error);
});

// Add response interceptor for better error logging
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', {
      url: response.config.url,
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('API Error:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    return Promise.reject(error);
  }
);

// Gallery API
export const galleryAPI = {
  getAll: () => api.get('/gallery'),
  getById: (id) => api.get(`/gallery/${id}`),
  create: (formData) => api.post('/gallery', formData),
  update: (id, formData) => api.put(`/gallery/${id}`, formData),
  delete: (id) => api.delete(`/gallery/${id}`),
};

// Notice API
export const noticeAPI = {
  getAll: () => api.get('/notices'),
  getById: (id) => api.get(`/notices/${id}`),
  create: (data) => api.post('/notices', data),
  update: (id, data) => api.put(`/notices/${id}`, data),
  delete: (id) => api.delete(`/notices/${id}`),
};

// Career API
export const careerAPI = {
  getAll: () => api.get('/careers'),
  getActive: () => api.get('/careers/active'),
  getById: (id) => api.get(`/careers/${id}`),
  create: (data) => api.post('/careers', data),
  update: (id, data) => api.put(`/careers/${id}`, data),
  delete: (id) => api.delete(`/careers/${id}`),
};

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  verify: () => api.get('/auth/verify'),
};

// Blog API - Fixed
export const blogAPI = {
  getAll: () => api.get('/blogs'),
  getAllAdmin: () => api.get('/blogs/admin/all'),
  getBySlug: (slug) => api.get(`/blogs/${slug}`),
  getById: (id) => api.get(`/blogs/admin/${id}`),
  create: (formData) => {
    console.log('Creating blog with FormData:', Array.from(formData.entries()));
    return api.post('/blogs', formData);
  },
  update: (id, formData) => {
    console.log('Updating blog with FormData:', Array.from(formData.entries()));
    return api.put(`/blogs/${id}`, formData);
  },
  delete: (id) => api.delete(`/blogs/${id}`),
};

export default api;