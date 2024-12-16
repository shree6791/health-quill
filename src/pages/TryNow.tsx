import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const TryNow = () => {
  const { user } = useAuth();

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Welcome to Your Free Trial
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Start creating professional healthcare proposals today
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
            <p className="text-gray-600 mb-6">
              Welcome, {user?.email}! Your 14-day free trial has begun. Here's what you can do:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-teal-50 rounded-lg">
                <h3 className="font-semibold mb-2">1. Create Your First Proposal</h3>
                <p className="text-gray-600">
                  Use our templates to create your first healthcare proposal.
                </p>
              </div>

              <div className="p-4 bg-teal-50 rounded-lg">
                <h3 className="font-semibold mb-2">2. Explore Features</h3>
                <p className="text-gray-600">
                  Discover automation tools and compliance checks.
                </p>
              </div>

              <div className="p-4 bg-teal-50 rounded-lg">
                <h3 className="font-semibold mb-2">3. Customize Templates</h3>
                <p className="text-gray-600">
                  Adapt our templates to match your brand.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                Start Creating
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryNow;