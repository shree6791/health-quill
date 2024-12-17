import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface ROIPreviewProps {
  hoursSaved: number;
  hourlyRate?: number;
}

const ROIPreview: React.FC<ROIPreviewProps> = ({ 
  hoursSaved, 
  hourlyRate = 50 
}) => {
  const annualSavings = hoursSaved * hourlyRate * 12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6"
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-white rounded-lg">
          <TrendingUp className="h-6 w-6 text-primary-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Estimated Annual ROI
          </h3>
          <div className="flex items-center mt-1">
            <DollarSign className="h-5 w-5 text-primary-500" />
            <span className="text-2xl font-bold text-primary-600">
              {annualSavings.toLocaleString()}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Based on {hoursSaved} hours saved monthly at ${hourlyRate}/hour
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ROIPreview;