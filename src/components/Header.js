import React, { useState } from 'react';
import { Button } from './ui/Button';
import { FileText, User, Settings, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">Job Hoppr</span>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
                  Templates
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
                  Examples
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
                  Tips
                </Button>
              </li>
            </ul>
          </nav>
          
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Button variant="ghost" className="w-full text-left text-gray-600 hover:text-gray-800">
                  Templates
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full text-left text-gray-600 hover:text-gray-800">
                  Examples
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full text-left text-gray-600 hover:text-gray-800">
                  Tips
                </Button>
              </li>
              <li>
                <Button variant="outline" className="w-full text-left">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full text-left">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
