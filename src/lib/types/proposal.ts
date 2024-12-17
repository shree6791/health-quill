export interface ProposalMetrics {
  patientVolume: number;
  itTickets: number;
  complianceAudits: number;
  hoursSaved: number;
}

export interface ProposalResponse {
  executiveSummary: string;
  problemStatement: string;
  proposedSolution: string;
  implementationPlan: string;
  expectedOutcomes: string;
  timeline: string;
  pricing: string;
  metrics: ProposalMetrics;
  generatedDate: string;
}