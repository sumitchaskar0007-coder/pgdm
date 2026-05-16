import React from 'react';
import { useState, useEffect } from 'react';
import { galleryAPI } from '../api';
import toast from 'react-hot-toast';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await galleryAPI.getAll();
      setImages(response.data);
    } catch (error) {
      toast.error('Failed to load gallery');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Gallery</h1>
        
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="max-w-4xl max-h-full">
              <img src={selectedImage.imageUrl} alt={selectedImage.title} className="max-w-full max-h-full object-contain" />
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image._id} className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105" onClick={() => setSelectedImage(image)}>
              <img src={image.imageUrl} alt={image.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;