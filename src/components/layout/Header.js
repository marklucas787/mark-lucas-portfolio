import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="/" className="flex items-center text-2xl font-bold text-blue-600">
              Mark Lucas
            </a>
          </div>
          
{/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => (
    <a
      key={item.name}
      href={item.path}
      className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
    >
      {item.name}
    </a>
  ))}
  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
    Get Started
  </button>
</nav>

{/* Mobile Navigation */}
{isMenuOpen && (
  <div className="md:hidden py-4">
    <div className="flex flex-col space-y-2">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.path}
          className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
        >
          {item.name}
        </a>
      ))}
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300 w-full">
        Get Started
      </button>
    </div>
  </div>
)}

</div>
</div>

  </header>
  );
}

export default Header;