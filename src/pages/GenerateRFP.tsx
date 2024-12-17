import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { proposalTypes } from '../lib/constants/proposalTypes';
import { useProposalGeneration } from '../lib/llm/hooks/useProposalGeneration';
import ProposalTypeSelector from '../components/rfp/ProposalTypeSelector';
import ClientObjectives from '../components/rfp/ClientObjectives';
import MetricsSection from '../components/rfp/MetricsSection';
import ROIPreview from '../components/rfp/ROIPreview';
import ProposalPreview from '../components/rfp/ProposalPreview';

const GenerateRFP = () => {
  const [selectedType, setSelectedType] = useState(proposalTypes[0]);
  const [metrics, setMetrics] = useState(selectedType.defaultMetrics);
  const [proposal, setProposal] = useState(null);
  const { generateProposal, loading } = useProposalGeneration();

  const handleTypeSelect = (type: typeof proposalTypes[0]) => {
    setSelectedType(type);
    setMetrics(type.defaultMetrics);
  };

  const handleGenerateProposal = async () => {
    try {
      const generatedProposal = await generateProposal(selectedType.title, metrics);
      setProposal(generatedProposal);
    } catch (error) {
      console.error('Failed to generate proposal:', error);
    }
  };

  if (proposal) {
    return <ProposalPreview proposal={proposal} onBack={() => setProposal(null)} />;
  }

  return (
    <div className="min-h-screen pt-28 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">Create Your Healthcare RFP</h1>
          <p className="text-gray-600">
            Generate professional healthcare proposals with our AI-powered platform
          </p>
        </div>

        <ProposalTypeSelector
          selectedType={selectedType}
          onTypeSelect={handleTypeSelect}
        />

        <ClientObjectives objectives={selectedType.objectives} />
        
        <MetricsSection
          metrics={metrics}
          onMetricsChange={setMetrics}
        />

        <ROIPreview hoursSaved={metrics.hoursSaved} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <button
            onClick={handleGenerateProposal}
            disabled={loading}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium text-lg hover:shadow-lg transition-all disabled:opacity-50"
          >
            {loading ? 'Generating Proposal...' : 'Generate Custom Proposal'}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GenerateRFP;