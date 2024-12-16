import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Users, AlertCircle } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Terms of Use',
      content: 'By accessing and using HealthQuill, you agree to comply with and be bound by these terms and conditions.',
    },
    {
      icon: Shield,
      title: 'User Obligations',
      content: 'Users are responsible for maintaining the confidentiality of their account credentials and complying with all applicable laws.',
    },
    {
      icon: Users,
      title: 'Account Usage',
      content: 'Each account is for a single entity. Sharing account credentials is prohibited and may result in account termination.',
    },
    {
      icon: AlertCircle,
      title: 'Compliance',
      content: 'Users must comply with all healthcare regulations and maintain appropriate licenses and certifications.',
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
            Terms of Service
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Please read these terms carefully before using HealthQuill
          </motion.p>
        </div>

        {/* Key Terms Sections */}
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

        {/* Detailed Terms */}
        <div className="prose max-w-none mb-20">
          <h2 className="text-3xl font-bold mb-6">Detailed Terms of Service</h2>
          
          <h3 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h3>
          <p className="text-gray-600 mb-6">
            By accessing or using HealthQuill, you agree to be bound by these Terms of Service
            and all applicable laws and regulations. If you do not agree with any of these terms,
            you are prohibited from using or accessing this platform.
          </p>

          <h3 className="text-2xl font-bold mb-4">2. Use License</h3>
          <p className="text-gray-600 mb-6">
            Permission is granted to temporarily access HealthQuill for personal or business use,
            subject to these Terms of Service. This license may be terminated if you violate any
            of these restrictions.
          </p>

          <h3 className="text-2xl font-bold mb-4">3. Service Modifications</h3>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify, suspend, or discontinue any part of our service
            at any time. We will provide notice of significant changes when possible.
          </p>

          <h3 className="text-2xl font-bold mb-4">4. Account Termination</h3>
          <p className="text-gray-600 mb-6">
            We reserve the right to terminate accounts that violate these terms or engage in
            fraudulent or abusive behavior. Users will be notified of account termination.
          </p>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-20">
          <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our terms of service, please contact our legal team.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all"
          >
            Contact Legal Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Terms;