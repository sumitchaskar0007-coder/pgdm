import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);

  const navLink = "px-3 py-1.5 font-semibold text-white hover:bg-blue-800 transition rounded-md text-sm lg:text-base whitespace-nowrap";

  // Main menu items
  const menu = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About us" },
    { to: "/gallery", label: "Gallery" },
    { to: "/notice", label: "Notice" },
    // { to: "/desk", label: "Director's Desk" },
    { to: "/founder", label: "Founder's Message" },
    { to: "/program", label: "Program" },
    { to: "/why-pune", label: "Why Pune" },
    { to: "/placements", label: "Placement" },
    { to: "/admission", label: "Admission" },
    // { to: "/infrastructure", label: "Infrastructure" },
    // { to: "/student-life", label: "Student Life" },
    // { to: "/alumni", label: "Alumni" },
    // { to: "/research", label: "Research" },
    // { to: "/international", label: "International" },
  ];

  // More dropdown items
  const moreItems = [
    { to: "/campus", label: "Campus" },
    { to: "/career", label: "Career" },
    { to: "/blogs", label: "Blog" },
    // { to: "/events", label: "Events" },
    // { to: "/library", label: "Library" },
    // { to: "/sports", label: "Sports" },
    // { to: "/hostel", label: "Hostel" },
    // { to: "/transport", label: "Transport" },
    // { to: "/mandatory-disclosure", label: "Mandatory Disclosure" },
    // { to: "/anti-ragging", label: "Anti Ragging" },
    // { to: "/icc", label: "ICC" },
  ];

  // Separate contact item
  const contactItem = { to: "/contact", label: "Contact Us" };

  const toggleDropdown = (name) => {
    setDropdown(dropdown === name ? null : name);
  };

  // Handle scroll effect for header
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside dropdown
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close mobile menu on window resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      {/* TOP BAR WITH WELCOME MESSAGE AND PHONE */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Message Row */}
          <div className="py-2 sm:py-2.5 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-blue-700" />
                <p className="text-blue-900 font-medium text-xs sm:text-sm">
                  Jadhavar Group of Institutes, Pune
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 text-xs sm:text-sm">Admissions Open 2026-27</span>
                 
                </div>
                <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-blue-700" />
                  <span className="text-blue-900 font-semibold text-xs sm:text-sm">
                    +91 9356393629
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Logo and Institute Info Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:py-0 sm:h-24 lg:h-28 gap-3">
            {/* Logo Section - Left */}
            <Link to="/" className="flex items-center gap-3 sm:gap-4 flex-shrink-0 group">
              <img
                src="/assets/logo/pgdm.png"
                alt="AIM Logo"
                className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* College Name - Centered */}
            <div className="flex-1 text-center px-2">
              <h1 className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold text-blue-900 leading-tight">
                AIM | PGDM - Aditya Institute of Management
              </h1>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 hidden xs:block">
                "Education for Excellence, Innovation & Leadership"
              </p>
            </div>

            {/* Empty div for spacing on desktop */}
            <div className="hidden sm:block w-16 lg:w-20"></div>
          </div>
        </div>
      </div>

      {/* NAVBAR - Fully responsive with no overflow */}
      <div className={`bg-blue-950 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between min-h-12 sm:min-h-14">
            
            {/* Desktop Menu (lg and above - 1024px+) */}
            <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 flex-1 flex-wrap">
              {/* First 8 menu items for desktop */}
              {menu.slice(0, 8).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `${navLink} text-sm xl:text-base ${isActive ? "bg-blue-800" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              
              {/* More Dropdown with remaining menu items */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('more')}
                  className={`${navLink} inline-flex items-center gap-1 text-sm xl:text-base ${
                    dropdown === 'more' ? 'bg-blue-800' : ''
                  }`}
                >
                  More
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                    dropdown === 'more' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {dropdown === 'more' && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50 max-h-80 overflow-y-auto">
                    {/* Remaining menu items from index 8 */}
                    {menu.slice(8).map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setDropdown(null)}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition ${
                            isActive ? 'bg-blue-50 text-blue-900 font-semibold' : ''
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                    {/* Separator */}
                    <div className="border-t border-gray-200 my-1"></div>
                    {/* Additional moreItems (without Contact Us) */}
                    {moreItems.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setDropdown(null)}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition ${
                            isActive ? 'bg-blue-50 text-blue-900 font-semibold' : ''
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Separate Contact NavLink on Desktop */}
              <NavLink
                to={contactItem.to}
                className={({ isActive }) =>
                  `${navLink} text-sm xl:text-base ${isActive ? "bg-blue-800" : ""}`
                }
              >
                {contactItem.label}
              </NavLink>
            </nav>

            {/* Tablet Menu (md to lg - 768px to 1023px) */}
            <nav className="hidden md:flex lg:hidden items-center justify-center gap-0.5 flex-1 flex-wrap">
              {/* First 6 items for tablet */}
              {menu.slice(0, 6).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `${navLink} text-xs md:text-sm ${isActive ? "bg-blue-800" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              
              {/* More Dropdown for remaining menu items */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('moreTablet')}
                  className={`${navLink} inline-flex items-center gap-1 text-xs md:text-sm ${
                    dropdown === 'moreTablet' ? 'bg-blue-800' : ''
                  }`}
                >
                  More
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                    dropdown === 'moreTablet' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {dropdown === 'moreTablet' && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-md shadow-lg py-1 z-50 max-h-80 overflow-y-auto">
                    {/* Remaining menu items from index 6 */}
                    {menu.slice(6).map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setDropdown(null)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition"
                      >
                        {item.label}
                      </NavLink>
                    ))}
                    <div className="border-t border-gray-200 my-1"></div>
                    {/* Additional moreItems (without Contact Us) */}
                    {moreItems.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setDropdown(null)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition"
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact link visible on tablet */}
              <NavLink
                to={contactItem.to}
                className={({ isActive }) =>
                  `${navLink} text-xs md:text-sm ${isActive ? "bg-blue-800" : ""}`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 -mr-2 hover:bg-blue-800 rounded-lg transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU (below 768px) */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="bg-blue-950 border-t border-blue-900">
            <div className="max-h-[80vh] overflow-y-auto">
              {/* Main menu items */}
              <div className="px-4 py-2">
                {menu.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-white border-b border-blue-800 text-base hover:bg-blue-900/50 px-3 rounded-lg transition-colors ${
                        isActive ? 'text-yellow-400 font-semibold bg-blue-900/30' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                
                {/* Contact Us in mobile menu - Separate and prominent */}
                <NavLink
                  to={contactItem.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-white border-b border-blue-800 text-base hover:bg-blue-900/50 px-3 rounded-lg transition-colors ${
                      isActive ? 'text-yellow-400 font-semibold bg-blue-900/30' : ''
                    }`
                  }
                >
                  {contactItem.label}
                </NavLink>
              </div>
              
              {/* More section for additional links */}
              <div className="bg-blue-900/30 px-4 py-3">
                <div className="py-2 text-white font-semibold text-xs uppercase tracking-wider">
                  More Links
                </div>
                
                {/* Grid layout for more items on mobile */}
                <div className="grid grid-cols-2 gap-2 pb-4">
                  {moreItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block py-2 px-3 text-white bg-blue-800/50 rounded-lg text-sm hover:bg-blue-700 transition-colors ${
                          isActive ? 'bg-blue-700 text-yellow-400' : ''
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Quick Contact Section for Mobile */}
              <div className="bg-blue-900/50 px-4 py-3 border-t border-blue-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-yellow-400" />
                    <span className="text-white text-sm">Emergency Contact:</span>
                  </div>
                  <a href="tel:+919356393629" className="text-yellow-400 font-semibold text-sm">
                    +91 9356393629
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}