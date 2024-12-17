import React from 'react';
import { motion } from 'framer-motion';
import ProposalTypeCard from './ProposalTypeCard';
import { proposalTypes } from '../../lib/constants/proposalTypes';

interface ProposalTypeSelectorProps {
  selectedType: typeof proposalTypes[0];
  onTypeSelect: (type: typeof proposalTypes[0]) => void;
}

const ProposalTypeSelector: React.FC<ProposalTypeSelectorProps> = ({
  selectedType,
  onTypeSelect,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Select Proposal Type</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {proposalTypes.map((type) => (
          <ProposalTypeCard
            key={type.id}
            icon={type.icon}
            title={type.title}
            objectives={type.objectives}
            selected={selectedType.id === type.id}
            onClick={() => onTypeSelect(type)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProposalTypeSelector;