import { useState } from 'react';
import { openAIClient } from '../client/openai';
import { ProposalResponse } from '../../types/proposal';

export const useProposalGeneration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateProposal = async (
    proposalType: string,
    metrics: {
      patientVolume: number;
      itTickets: number;
      complianceAudits: number;
      hoursSaved: number;
    }
  ): Promise<ProposalResponse> => {
    setLoading(true);
    setError(null);

    try {
      const proposal = await openAIClient.generateProposal(proposalType, metrics);
      return proposal;
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to generate proposal';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    generateProposal,
    loading,
    error
  };
};