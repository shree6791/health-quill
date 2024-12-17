import React from 'react';
import { ArrowLeft, Download, FileText } from 'lucide-react';

interface ProposalHeaderProps {
  onBack: () => void;
  onDownload: () => void;
  generatedDate: string;
}

const ProposalHeader: React.FC<ProposalHeaderProps> = ({ 
  onBack, 
  onDownload, 
  generatedDate 
}) => {
  return (
    <>
      <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-md">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Form
        </button>
        <button
          onClick={onDownload}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:shadow-lg transition-all"
        >
          <Download className="h-5 w-5 mr-2" />
          Download PDF
        </button>
      </div>

      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 text-white rounded-t-xl">
        <div className="flex items-center mb-4">
          <FileText className="h-8 w-8 mr-3" />
          <h2 className="text-2xl font-bold">Healthcare Proposal</h2>
        </div>
        <p className="text-primary-50">
          Generated on {generatedDate}
        </p>
      </div>
    </>
  );
};

export default ProposalHeader;