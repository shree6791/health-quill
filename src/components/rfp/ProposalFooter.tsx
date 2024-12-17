import React from 'react';
import { Calendar, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const ProposalFooter = () => {
  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/healthquill/demo', '_blank');
  };

  const handleContactEmail = () => {
    window.location.href = 'mailto:sales@healthquill.com';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-8 border border-gray-100 mt-8"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
      <p className="text-gray-600 mb-6">
        Schedule a meeting with our healthcare solutions experts to discuss your implementation timeline
        and customize the solution for your specific needs.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleScheduleMeeting}
          className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:shadow-lg transition-all"
        >
          <Calendar className="h-5 w-5 mr-2" />
          Schedule a Meeting
        </button>
        
        <button
          onClick={handleContactEmail}
          className="flex items-center justify-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all"
        >
          <Mail className="h-5 w-5 mr-2" />
          Contact Sales Team
        </button>
      </div>
    </motion.div>
  );
};

export default ProposalFooter;