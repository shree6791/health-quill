import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

interface ClientObjectivesProps {
  objectives: string[];
}

const ClientObjectives: React.FC<ClientObjectivesProps> = ({ objectives }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 bg-white rounded-xl p-6 shadow-sm"
    >
      <div className="flex items-center mb-4">
        <FileText className="h-5 w-5 text-primary-500 mr-2" />
        <h3 className="text-lg font-semibold">Client Objectives</h3>
      </div>
      <ul className="space-y-2">
        {objectives.map((objective, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2" />
            {objective}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ClientObjectives;