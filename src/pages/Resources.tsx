import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Download } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      category: 'Guides & Tutorials',
      icon: BookOpen,
      items: [
        {
          title: 'Getting Started with HealthQuill',
          description: 'A comprehensive guide for new users',
          type: 'Guide',
        },
        {
          title: 'Best Practices for Healthcare Proposals',
          description: 'Expert tips for creating winning proposals',
          type: 'Guide',
        },
      ],
    },
    {
      category: 'Templates',
      icon: FileText,
      items: [
        {
          title: 'Medical Practice Proposal Template',
          description: 'Customizable template for medical practices',
          type: 'Template',
        },
        {
          title: 'Healthcare Service Expansion Template',
          description: 'Template for service expansion proposals',
          type: 'Template',
        },
      ],
    },
    {
      category: 'Video Tutorials',
      icon: Video,
      items: [
        {
          title: 'Platform Overview',
          description: 'Quick tour of HealthQuill features',
          type: 'Video',
        },
        {
          title: 'Advanced Features Tutorial',
          description: 'Deep dive into advanced capabilities',
          type: 'Video',
        },
      ],
    },
    {
      category: 'Downloads',
      icon: Download,
      items: [
        {
          title: 'Compliance Checklist',
          description: 'Essential compliance requirements',
          type: 'PDF',
        },
        {
          title: 'ROI Calculator',
          description: 'Calculate your potential savings',
          type: 'Excel',
        },
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
            Resources
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Everything you need to succeed with HealthQuill
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {resources.map((category, index) => (
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
                  <category.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold ml-4">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <span className="inline-block mt-2 text-sm text-teal-600">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;