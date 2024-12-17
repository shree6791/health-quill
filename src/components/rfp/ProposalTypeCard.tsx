import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ProposalTypeCardProps {
  icon: LucideIcon;
  title: string;
  objectives: string[];
  selected: boolean;
  onClick: () => void;
}

const ProposalTypeCard: React.FC<ProposalTypeCardProps> = ({
  icon: Icon,
  title,
  objectives,
  selected,
  onClick,
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "w-full text-left transition-all relative overflow-hidden",
        "rounded-lg border hover:shadow-md",
        selected 
          ? "border-primary-500 bg-primary-50/50" 
          : "border-gray-200 bg-white hover:border-primary-200"
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Main Card Content */}
      <div className="p-4 flex items-center space-x-3">
        <div className={cn(
          "p-2 rounded-lg flex-shrink-0",
          selected ? "bg-primary-500 text-white" : "bg-gray-100 text-gray-600"
        )}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className={cn(
            "font-semibold",
            selected ? "text-primary-900" : "text-gray-900"
          )}>
            {title}
          </h3>
        </div>
      </div>

      {/* Expandable Objectives */}
      <motion.div
        initial={false}
        animate={{ height: selected ? 'auto' : 0 }}
        className="overflow-hidden border-t border-gray-100"
      >
        <div className="p-4 bg-white/50">
          <p className="text-sm font-medium text-gray-700 mb-2">Key Objectives:</p>
          <ul className="space-y-1">
            {objectives.map((objective, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2" />
                {objective}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.button>
  );
};

export default ProposalTypeCard;