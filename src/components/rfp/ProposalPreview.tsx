import React from 'react';
import { FileText, Clock, Target, Zap, Calendar, DollarSign, Award } from 'lucide-react';
import { ProposalResponse } from '../../lib/types/proposal';
import ProposalHeader from './ProposalHeader';
import ProposalSection from './ProposalSection';
import ProposalFooter from './ProposalFooter';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

interface ProposalPreviewProps {
  proposal: ProposalResponse;
  onBack: () => void;
}

const ProposalPreview: React.FC<ProposalPreviewProps> = ({ proposal, onBack }) => {
  const sections = [
    {
      title: 'Executive Summary',
      content: proposal.executiveSummary,
      icon: FileText,
      color: 'text-blue-500'
    },
    {
      title: 'Problem Statement',
      content: proposal.problemStatement,
      icon: Target,
      color: 'text-red-500'
    },
    {
      title: 'Proposed Solution',
      content: proposal.proposedSolution,
      icon: Zap,
      color: 'text-yellow-500'
    },
    {
      title: 'Implementation Plan',
      content: proposal.implementationPlan,
      icon: Calendar,
      color: 'text-green-500'
    },
    {
      title: 'Expected Outcomes',
      content: proposal.expectedOutcomes,
      icon: Award,
      color: 'text-purple-500'
    },
    {
      title: 'Timeline',
      content: proposal.timeline,
      icon: Clock,
      color: 'text-indigo-500'
    },
    {
      title: 'Pricing',
      content: proposal.pricing,
      icon: DollarSign,
      color: 'text-emerald-500'
    }
  ];

  const handleDownload = () => {
    const doc = new jsPDF();
    let yOffset = 20;

    // Add title
    doc.setFontSize(20);
    doc.text('Healthcare Proposal', 20, yOffset);
    yOffset += 10;

    // Add date
    doc.setFontSize(12);
    doc.text(`Generated on ${proposal.generatedDate}`, 20, yOffset);
    yOffset += 20;

    // Add sections
    sections.forEach(section => {
      // Section title
      doc.setFontSize(16);
      doc.text(section.title, 20, yOffset);
      yOffset += 10;

      // Section content
      doc.setFontSize(12);
      const splitContent = doc.splitTextToSize(section.content, 170);
      
      if (yOffset + splitContent.length * 7 > 280) {
        doc.addPage();
        yOffset = 20;
      }
      
      doc.text(splitContent, 20, yOffset);
      yOffset += splitContent.length * 7 + 10;
    });

    doc.save('healthcare-proposal.pdf');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <ProposalHeader
        onBack={onBack}
        onDownload={handleDownload}
        generatedDate={proposal.generatedDate}
      />
      
      <div className="bg-white rounded-b-xl p-8 space-y-8">
        {sections.map((section, index) => (
          <ProposalSection
            key={section.title}
            title={section.title}
            content={section.content}
            icon={section.icon}
            color={section.color}
            index={index}
          />
        ))}
        
        <ProposalFooter />
      </div>
    </div>
  );
};

export default ProposalPreview;