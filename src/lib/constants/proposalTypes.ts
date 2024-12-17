import { Settings, Shield, Users, Network } from 'lucide-react';

export const proposalTypes = [
  {
    id: 'operational',
    title: 'Operational Efficiency',
    icon: Settings,
    objectives: [
      'Streamline staff workflows',
      'Optimize resource utilization',
      'Reduce operational costs'
    ],
    defaultMetrics: {
      patientVolume: 4200,
      itTickets: 245,
      complianceAudits: 8,
      hoursSaved: 120
    }
  },
  {
    id: 'compliance',
    title: 'Regulatory Compliance',
    icon: Shield,
    objectives: [
      'Ensure HIPAA compliance',
      'Improve audit readiness',
      'Automate CMS reporting'
    ],
    defaultMetrics: {
      patientVolume: 3800,
      itTickets: 180,
      complianceAudits: 12,
      hoursSaved: 90
    }
  },
  {
    id: 'patient',
    title: 'Patient Experience',
    icon: Users,
    objectives: [
      'Reduce patient wait times',
      'Improve appointment scheduling',
      'Optimize discharge processes'
    ],
    defaultMetrics: {
      patientVolume: 5200,
      itTickets: 210,
      complianceAudits: 6,
      hoursSaved: 150
    }
  },
  {
    id: 'infrastructure',
    title: 'IT Infrastructure',
    icon: Network,
    objectives: [
      'Reduce IT incidents',
      'Modernize legacy systems',
      'Enhance EHR performance'
    ],
    defaultMetrics: {
      patientVolume: 4500,
      itTickets: 320,
      complianceAudits: 4,
      hoursSaved: 180
    }
  }
];