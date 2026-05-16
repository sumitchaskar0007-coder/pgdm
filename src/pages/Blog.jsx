import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogAPI } from '../api';
import toast from 'react-hot-toast';
import { FiShare2, FiBookmark, FiHeart, FiClock, FiUser, FiCalendar } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Blog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const element = contentRef.current;
        const totalHeight = element.clientHeight;
        const windowScroll = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const scrollPercent = (windowScroll / (totalHeight - windowHeight)) * 100;
        setProgress(Math.min(100, Math.max(0, scrollPercent)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [blog]);

  const fetchBlog = async () => {
    try {
      const response = await blogAPI.getBySlug(slug);
      setBlog(response.data);
    } catch (error) {
      toast.error('Failed to load blog');
    } finally {
      setLoading(false);
    }
  };

  const shareOnWhatsApp = () => {
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(blog.title + '\n\n' + url)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Article Not Found</h2>
          <p className="text-gray-600 mb-4">The article you're looking for doesn't exist.</p>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">← Back to Home</Link>
        </div>
      </div>
    );
  }

  // Parse content with formatting
  const renderContent = (content) => {
    // Split content into sections
    const sections = content.split(/(?=<h2>|<\/h2>|<blockquote>|<\/blockquote>)/);
    
    return sections.map((section, index) => {
      // Handle H2 headings
      if (section.startsWith('<h2>')) {
        const headingText = section.replace('<h2>', '').replace('</h2>', '');
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-gray-800">
            {headingText}
          </h2>
        );
      }
      
      // Handle blockquotes
      if (section.startsWith('<blockquote>')) {
        const quoteText = section.replace('<blockquote>', '').replace('</blockquote>', '');
        return (
          <blockquote key={index} className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 text-lg">
            {quoteText}
          </blockquote>
        );
      }
      
      // Handle regular paragraphs
      if (section.trim()) {
        // Check if it's the first paragraph for drop cap
        const isFirstParagraph = index === 0;
        return (
          <p key={index} className={`text-gray-700 leading-relaxed mb-6 text-base md:text-lg ${isFirstParagraph ? 'first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-blue-600' : ''}`}>
            {section}
          </p>
        );
      }
      
      return null;
    });
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Blog Content */}
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Article Header */}
          <article ref={contentRef}>
            <div className="mb-8">
              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              {/* Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.title}
              </h1>
              
              {/* Author Info */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <FiUser className="w-4 h-4" />
                  <span className="font-medium">{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="w-4 h-4" />
                  <span>{blog.readingTime} min read</span>
                </div>
              </div>
              
              {/* Featured Image */}
              <div className="relative mb-8">
                <img 
                  src={blog.featuredImage} 
                  alt={blog.title}
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg prose-blue max-w-none">
              {/* Drop cap and content */}
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
            
            {/* Divider */}
            <div className="my-12 border-t border-gray-200" />
            
            {/* Share Section */}
            <div className="my-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Share this article</h3>
              <div className="flex gap-3">
                <button 
                  onClick={shareOnWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
                >
                  <FaWhatsapp size={20} />
                </button>
                <button 
                  onClick={shareOnLinkedIn}
                  className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full transition-colors"
                >
                  <FaLinkedin size={20} />
                </button>
                <button 
                  onClick={shareOnTwitter}
                  className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors"
                >
                  <FaTwitter size={20} />
                </button>
                <button 
                  onClick={shareOnFacebook}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                >
                  <FaFacebook size={20} />
                </button>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="my-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Ready to Take the Next Step?</h3>
              <p className="text-gray-600 mb-6">Schedule a campus visit or speak with our admissions team today.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Book a School Visit
                </Link>
                <Link 
                  to="/admission" 
                  className="bg-white hover:bg-gray-50 text-blue-600 px-6 py-3 rounded-lg font-semibold border border-blue-600 transition-colors"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Blog;