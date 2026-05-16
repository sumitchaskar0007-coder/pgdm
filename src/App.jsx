import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import ProtectedRoute from './components/ProtectedRoute';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import BlogAdmin from './pages/admin/BlogAdmin';
// Public Pages
import Gallery from './pages/Gallery';
import Notice from './pages/Notice';
import Career from './pages/Career';
// import Blog from './pages/Blog'; // Add this

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import GalleryAdmin from './pages/admin/GalleryAdmin';
import NoticeAdmin from './pages/admin/NoticeAdmin';
import CareerAdmin from './pages/admin/CareerAdmin';
// import BlogAdmin from './pages/admin/BlogAdmin'; // Add this

// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingEnquiryButton from './components/FloatingEnquiryButton.jsx';
import EnquiryModal from './components/EnquiryModal.jsx';

// Public pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Admission from './pages/Admission.jsx';
import Campus from './pages/Campus.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import UdanBook from "./pages/UdanBook";
import Desk from './pages/Desk.jsx';
import Founder from './pages/Founder.jsx';
import Program from './pages/Program.jsx';
import PuneSection from './pages/PuneSection.jsx';
import Placements from './pages/Placements.jsx';

// Scroll to Top Component
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

// Back to Top Button Component
function BackToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-50 group"
          aria-label="Back to top"
        >
          <svg 
            className="w-5 h-5 group-hover:-translate-y-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
}

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = React.useState(false);

  return (
    <HelmetProvider>
      <Toaster position="top-right" />
      
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        
        {/* Header */}
        <Header onEnquiryClick={() => setEnquiryOpen(true)} />

        {/* Main Routes */}
        <main className="flex-1">
          <Routes>

            {/* ---------------- PUBLIC ROUTES ---------------- */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/desk" element={<Desk />} /> */}
            <Route path="/founder" element={<Founder />} />
            <Route path="/program" element={<Program />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/why-pune" element={<PuneSection />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/campus" element={<Campus />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/udan/:id" element={<UdanBook />} />

            {/* Extra Public Pages */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/career" element={<Career />} />
            {/* <Route path="/blog/:slug" element={<Blog />} /> */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<Blog />} />

            {/* ---------------- ADMIN ROUTES ---------------- */}
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/gallery"
              element={
                <ProtectedRoute>
                  <GalleryAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/notices"
              element={
                <ProtectedRoute>
                  <NoticeAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/careers"
              element={
                <ProtectedRoute>
                  <CareerAdmin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/blogs"
              element={
                <ProtectedRoute>
                  <BlogAdmin />
                </ProtectedRoute>
              }
            />

            {/* <Route path="/admin/blogs" element={<ProtectedRoute><BlogAdmin /></ProtectedRoute>} /> */}

            {/* 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Enquiry Button */}
        <FloatingEnquiryButton onClick={() => setEnquiryOpen(true)} />

        {/* Enquiry Modal */}
        <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />

        {/* Back to Top Button */}
        <BackToTopButton />
      </div>
    </HelmetProvider>
  );
}
