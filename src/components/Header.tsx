import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut, Brain } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent backdrop-blur-sm" />
      <nav className="relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-primary-500" />
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  HealthQuill
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                Home
              </Link>
              <Link to="/features" className="text-gray-600 hover:text-primary-600 transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-primary-600 transition-colors">
                Pricing
              </Link>
              <Link to="/faq" className="text-gray-600 hover:text-primary-600 transition-colors">
                FAQ
              </Link>
              
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                >
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white/80 backdrop-blur-sm rounded-xl shadow-soft py-2">
                    <Link to="/about" className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600">
                      About Us
                    </Link>
                    <Link to="/resources" className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600">
                      Resources
                    </Link>
                    <Link to="/success-stories" className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600">
                      Success Stories
                    </Link>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4">
                {user ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">{user.email}</span>
                    <button
                      onClick={handleLogout}
                      className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <LogOut className="h-5 w-5 mr-1" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <Link 
                      to="/try-now" 
                      className="neural-button"
                    >
                      <span className="relative z-10 text-white">Try Now for Free</span>
                    </Link>
                    <Link 
                      to="/auth" 
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-600 hover:text-primary-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ease-in-out',
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/" className="block text-gray-600 hover:text-primary-600">
              Home
            </Link>
            <Link to="/features" className="block text-gray-600 hover:text-primary-600">
              Features
            </Link>
            <Link to="/pricing" className="block text-gray-600 hover:text-primary-600">
              Pricing
            </Link>
            <Link to="/faq" className="block text-gray-600 hover:text-primary-600">
              FAQ
            </Link>
            <Link to="/about" className="block text-gray-600 hover:text-primary-600">
              About Us
            </Link>
            <Link to="/resources" className="block text-gray-600 hover:text-primary-600">
              Resources
            </Link>
            <Link to="/success-stories" className="block text-gray-600 hover:text-primary-600">
              Success Stories
            </Link>
            
            {user ? (
              <>
                <div className="text-gray-600">{user.email}</div>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-600 hover:text-primary-600 w-full"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/try-now" 
                  className="neural-button w-full flex justify-center"
                >
                  <span className="relative z-10 text-white">Try Now for Free</span>
                </Link>
                <Link 
                  to="/auth"
                  className="block w-full text-center text-gray-600 hover:text-primary-600"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;