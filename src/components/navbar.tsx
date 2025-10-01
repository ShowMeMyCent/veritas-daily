import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
      const [selectedCategory, setSelectedCategory] = useState('All');
    
      const categories = ['All', 'Politics', 'Technology', 'Business', 'Science', 'Sports', 'Culture', 'Health', 'Environment'];

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
            <div className="flex space-x-4 text-gray-600 text-center">
              <a href="/admin" className="hover:text-black text-xs">
                Admin
              </a>
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
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`hover:text-black transition-colors tracking-wider ${
                      selectedCategory === category 
                        ? 'text-black border-b-2 border-black pb-1' 
                        : 'text-gray-600'
                    }`}
                  >
                    {category.toUpperCase()}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
