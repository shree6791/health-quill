import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, Video, FileText } from 'lucide-react';

const Help = () => {
  const helpSections = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      items: [
        'Platform Overview',
        'Creating Your First Proposal',
        'Account Setup Guide',
        'Basic Navigation',
      ],
    },
    {
      icon: MessageCircle,
      title: 'Common Questions',
      items: [
        'Managing Templates',
        'Collaboration Features',
        'Export Options',
        'Security Settings',
      ],
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      items: [
        'Quick Start Guide',
        'Advanced Features',
        'Team Management',
        'Compliance Tools',
      ],
    },
    {
      icon: FileText,
      title: 'Documentation',
      items: [
        'API Documentation',
        'Integration Guides',
        'Best Practices',
        'Release Notes',
      ],
    },
  ];

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Help Center
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Find answers, tutorials, and documentation to help you get the most out of HealthQuill
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full px-6 py-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-lg">
              Search
            </button>
          </div>
        </motion.div>

        {/* Help Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {helpSections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <section.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold ml-4">{section.title}</h2>
              </div>

              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is available to assist you with any questions or concerns.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;