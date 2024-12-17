import { ProposalResponse, ProposalMetrics } from '../../types/proposal';

export const parseProposalContent = (
  content: string, 
  metrics: ProposalMetrics
): ProposalResponse => {
  try {
    console.log('Parsing content:', content);
    
    // Split content into sections
    const sections = content.split('#').reduce((acc: any, section) => {
      if (!section.trim()) return acc;
      
      const lines = section.trim().split('\n');
      const titleLine = lines[0].toLowerCase();
      const content = lines.slice(1).join('\n').trim();
      
      // Match sections based on keywords rather than exact matches
      if (titleLine.includes('executive') || titleLine.includes('summary')) {
        acc.executiveSummary = content;
      } else if (titleLine.includes('problem')) {
        acc.problemStatement = content;
      } else if (titleLine.includes('proposed') || titleLine.includes('solution')) {
        acc.proposedSolution = content;
      } else if (titleLine.includes('implementation')) {
        acc.implementationPlan = content;
      } else if (titleLine.includes('expected') || titleLine.includes('outcomes')) {
        acc.expectedOutcomes = content;
      } else if (titleLine.includes('timeline')) {
        acc.timeline = content;
      } else if (titleLine.includes('pricing')) {
        acc.pricing = content;
      }
      
      return acc;
    }, {
      executiveSummary: '',
      problemStatement: '',
      proposedSolution: '',
      implementationPlan: '',
      expectedOutcomes: '',
      timeline: '',
      pricing: '',
      metrics,
      generatedDate: new Date().toLocaleDateString()
    });

    console.log('Parsed sections:', sections);
    return sections;
  } catch (error) {
    console.error('Error parsing proposal content:', error);
    throw new Error('Failed to parse proposal content');
  }
};