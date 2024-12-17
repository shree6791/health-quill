import React from 'react';
import { motion } from 'framer-motion';
import MetricField from './MetricField';
import { ProposalMetrics } from '../../lib/types/proposal';

interface MetricsSectionProps {
  metrics: ProposalMetrics;
  onMetricsChange: (metrics: ProposalMetrics) => void;
}

const MetricsSection: React.FC<MetricsSectionProps> = ({
  metrics,
  onMetricsChange,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-md mb-8"
    >
      <h2 className="text-xl font-semibold mb-6">Enter Key Metrics</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <MetricField
          label="Monthly Patient Volume"
          value={metrics.patientVolume}
          onChange={(value) => onMetricsChange({ ...metrics, patientVolume: value })}
          industryAvg={5000}
        />
        <MetricField
          label="Monthly IT Tickets"
          value={metrics.itTickets}
          onChange={(value) => onMetricsChange({ ...metrics, itTickets: value })}
          industryAvg={250}
        />
        <MetricField
          label="Yearly Compliance Audits"
          value={metrics.complianceAudits}
          onChange={(value) => onMetricsChange({ ...metrics, complianceAudits: value })}
          industryAvg={4}
        />
        <MetricField
          label="Estimated Monthly Hours Saved"
          value={metrics.hoursSaved}
          onChange={(value) => onMetricsChange({ ...metrics, hoursSaved: value })}
          industryAvg={120}
        />
      </div>
    </motion.div>
  );
};

export default MetricsSection;