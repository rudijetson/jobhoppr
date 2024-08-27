import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Job Hoppr. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="/privacy" className="text-sm text-blue-600 hover:text-blue-800">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-blue-600 hover:text-blue-800">
              Terms of Service
            </a>
            <a href="/contact" className="text-sm text-blue-600 hover:text-blue-800">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
