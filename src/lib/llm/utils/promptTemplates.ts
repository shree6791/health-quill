import { ProposalMetrics } from '../../types/proposal';

const formatCurrency = (amount: number) => amount.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

const calculateROI = (metrics: ProposalMetrics) => {
  const annualSavings = metrics.hoursSaved * 50 * 12;
  const totalInvestment = 148000;
  const additionalSavings = 50000 + 30000; // From IT tickets and compliance
  return ((annualSavings + additionalSavings - totalInvestment) / totalInvestment * 100).toFixed(1);
};

export const generateProposalPrompt = (proposalType: string, metrics: ProposalMetrics) => {
  const objectives = getObjectivesForType(proposalType);
  
  return `
# Executive Summary 📝

${proposalType} proposal focused on optimizing healthcare operations and improving efficiency.
Current challenges include managing ${metrics.itTickets} monthly IT tickets and ${metrics.complianceAudits} yearly compliance audits.
Our solution will save ${metrics.hoursSaved} hours monthly and reduce operational costs significantly.

${objectives.map(obj => `- ${obj}`).join('\n')}

# Problem Statement 🚩

The organization currently faces several operational challenges:
- Managing ${metrics.itTickets} IT tickets monthly, leading to significant overhead
- Conducting ${metrics.complianceAudits} yearly compliance audits manually
- Processing ${metrics.patientVolume} patients monthly with suboptimal efficiency
- Current processes result in unnecessary manual work and potential compliance risks

# Proposed Solution 💡

Our comprehensive solution addresses these challenges through:

### Workflow Automation
- Automated compliance reporting and audit trails
- Streamlined IT ticket management and resolution
- Intelligent resource allocation and scheduling

### Real-Time Monitoring
- Live dashboards for operational metrics
- Automated alerts and notifications
- Performance tracking and analytics

### Staff Optimization
- Reduced manual interventions
- Enhanced collaboration tools
- Automated task prioritization

# Implementation Plan 📅

Our implementation approach follows a structured 10-week timeline divided into four key phases:

### Phase 1: Initial Assessment (2 weeks)
- Week 1: Comprehensive workflow analysis and documentation
- Week 2: Requirements gathering and planning
- Deliverables: Detailed assessment report and implementation roadmap

### Phase 2: System Configuration (4 weeks)
- Week 3-4: Core system setup and integration development
- Week 5-6: Custom workflow implementation and testing
- Deliverables: Configured system with automated workflows

### Phase 3: Staff Training (2 weeks)
- Week 7: Training program development and documentation
- Week 8: Hands-on training sessions and certification
- Deliverables: Training materials and certified staff

### Phase 4: Go-Live (2 weeks)
- Week 9: Pilot launch with selected departments
- Week 10: Full deployment and optimization
- Deliverables: Fully operational system with support documentation

# Timeline ⏱️

### Month 1
- Weeks 1-2: Initial Assessment
  * Process analysis and documentation
  * Requirements gathering
  * Success metrics definition

### Month 2
- Weeks 3-6: System Configuration
  * Core system implementation
  * Integration development
  * Testing and validation

### Month 3
- Weeks 7-8: Staff Training
  * Training program execution
  * User certification
- Weeks 9-10: Go-Live
  * Phased deployment
  * Performance monitoring
  * Optimization and support

# Expected Outcomes 📊

### Operational Efficiency
- ${metrics.hoursSaved} hours saved monthly (${formatCurrency(metrics.hoursSaved * 50 * 12)} annual savings)
- ${Math.round(metrics.itTickets * 0.6)} fewer monthly IT tickets
- Streamlined workflows and automated processes

### Compliance & Quality
- 100% automated compliance audits
- Real-time monitoring and reporting
- Improved data accuracy and accessibility

### Staff Satisfaction
- Reduced manual workload
- Enhanced productivity tools
- Better work-life balance

# Pricing 💰

### Investment Breakdown

| Component | Cost |
|-----------|------|
| Implementation & Setup | ${formatCurrency(75000)} |
| Annual Licensing | ${formatCurrency(48000)} |
| Training & Support | ${formatCurrency(25000)} |

**Total First Year Investment: ${formatCurrency(148000)}**
**Projected First Year ROI: ${calculateROI(metrics)}%**

### Payment Terms
- 40% upon project initiation
- 30% at system configuration completion
- 30% at go-live`;
};

const getObjectivesForType = (proposalType: string) => {
  switch (proposalType) {
    case 'Operational Efficiency':
      return [
        'Streamline staff workflows',
        'Optimize resource utilization',
        'Reduce operational costs'
      ];
    case 'Regulatory Compliance':
      return [
        'Ensure HIPAA compliance',
        'Improve audit readiness',
        'Automate CMS reporting'
      ];
    case 'Patient Experience':
      return [
        'Reduce patient wait times',
        'Improve appointment scheduling',
        'Optimize discharge processes'
      ];
    case 'IT Infrastructure':
      return [
        'Reduce IT incidents',
        'Modernize legacy systems',
        'Enhance EHR performance'
      ];
    default:
      return [];
  }
};