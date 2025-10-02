import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const location = useLocation();

  const getSelectedCategory = (pathname: string) => {
    if (pathname === '/') return 'All';
    return pathname.substring(1).charAt(0).toUpperCase() + pathname.slice(2);
  }; const categories = [
    { name: 'All', path: '/' },
    { name: 'Politics', path: '/politics' },
    { name: 'Technology', path: '/technology' },
    { name: 'Business', path: '/business' },
    { name: 'Science', path: '/science' },
    { name: 'Sports', path: '/sports' },
    { name: 'Culture', path: '/culture' },
    { name: 'Health', path: '/health' },
    { name: 'Environment', path: '/environment' }
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <header className="border-b-4 border-black">
      {/* Top bar with date and weather */}
      <div className="border-b border-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs">
          <div className="text-gray-600">
            {currentDate} • New York, NY • 72°F
          </div>
          <div className="flex space-x-2 text-gray-600 text-center">
            <a href="/login">
              <button className="hover:text-black flex items-center space-x-2">
                <FontAwesomeIcon icon={['fas', 'arrow-right-to-bracket']} size='lg' />
                <span>Sign In</span></button></a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="py-6">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-6">
            <a href="/">
              <h1 className="font-serif text-6xl font-black tracking-tight text-black mb-2">
                Veritas Daily
              </h1>
            </a>
          </div>

          {/* Navigation */}
          <nav className="border-t border-b border-gray-500 py-2">
            <div className="flex justify-center space-x-8 text-sm border border-gray-500 p-2 font-medium">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className={`hover:text-black transition-colors tracking-wider ${getSelectedCategory(location.pathname) === category.name
                      ? 'text-black border-b-2 border-black pb-1'
                      : 'text-gray-600'
                    }`}
                >
                  {category.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
