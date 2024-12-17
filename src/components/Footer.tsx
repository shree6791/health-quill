import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram, ArrowRight, Brain } from 'lucide-react';
import ZoomScheduler from './ZoomScheduler';

const Footer = () => {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-gray-900">
      {/* Neural network background */}
      <div className="absolute inset-0 neural-network opacity-10" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/70 to-gray-900/90" />

      <div className="relative container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 py-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                HealthQuill
              </span>
            </Link>
            <p className="text-gray-400">
              Revolutionizing healthcare RFP generation with AI-powered intelligence
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 shadow-soft flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 shadow-soft flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 shadow-soft flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 shadow-soft flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Platform</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/features" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/success-stories" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                  Resource Hub
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                  Get in Touch
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:support@healthquill.com" 
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                  support@healthquill.com
                </a>
              </li>
              <li>
                <button 
                  onClick={() => setIsSchedulerOpen(true)}
                  className="text-primary-400 hover:text-primary-300 transition-colors flex items-center font-medium"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Schedule Demo
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="relative py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 HealthQuill. All rights reserved.
            </div>

            <div className="flex space-x-4 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy</Link>
              <span className="text-gray-700">|</span>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>

      <ZoomScheduler 
        isOpen={isSchedulerOpen}
        onClose={() => setIsSchedulerOpen(false)}
      />
    </footer>
  );
};

export default Footer;