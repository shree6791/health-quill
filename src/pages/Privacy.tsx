import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Data Protection',
      content: 'We implement industry-standard security measures to protect your personal and business information. All data is encrypted both in transit and at rest.',
    },
    {
      icon: Lock,
      title: 'Information Security',
      content: 'Access to your information is strictly controlled and monitored. We regularly audit our systems and practices to ensure maximum security.',
    },
    {
      icon: Eye,
      title: 'Data Usage',
      content: "We only collect and use information that is necessary to provide and improve our services. Your data is never sold to third parties.",
    },
    {
      icon: Server,
      title: 'Data Storage',
      content: 'All data is stored in secure, HIPAA-compliant facilities with redundant backups and disaster recovery protocols.',
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Your privacy is our top priority. Learn how we protect and manage your data.
          </motion.p>
        </div>

        {/* Key Privacy Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <section.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h2 className="text-xl font-bold ml-4">{section.title}</h2>
              </div>
              <p className="text-gray-600">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Rest of the Privacy component remains unchanged */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Privacy;