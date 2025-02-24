import React from 'react';
import { Mail, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* About Section */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Mark Lucas</h3>
            <p className="text-gray-400 mb-4">
              Senior Microsoft Power Platform & SharePoint Developer with over 30 years of experience
              delivering innovative solutions for enterprise organizations.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/your-profile" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://your-website.com" className="text-gray-400 hover:text-white transition duration-300">
                <Globe className="w-6 h-6" />
              </a>
              <a href="mailto:contact@marklucas.com" className="text-gray-400 hover:text-white transition duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition duration-300">Home</a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">Services</a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-white transition duration-300">Portfolio</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services#power-apps" className="text-gray-400 hover:text-white transition duration-300">
                  Power Apps Development
                </a>
              </li>
              <li>
                <a href="/services#sharepoint" className="text-gray-400 hover:text-white transition duration-300">
                  SharePoint Solutions
                </a>
              </li>
              <li>
                <a href="/services#consulting" className="text-gray-400 hover:text-white transition duration-300">
                  Technical Consulting
                </a>
              </li>
              <li>
                <a href="/services#training" className="text-gray-400 hover:text-white transition duration-300">
                  Training & Mentoring
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mark Lucas. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition duration-300">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;