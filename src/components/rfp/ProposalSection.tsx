import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ProposalSectionProps {
  title: string;
  content: string;
  icon: LucideIcon;
  color: string;
  index: number;
}

const ProposalSection: React.FC<ProposalSectionProps> = ({
  title,
  content,
  icon: Icon,
  color,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-lg ${color} bg-opacity-10 mr-3`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <div className="prose prose-gray max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h3: ({ children }) => (
              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">{children}</h3>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 space-y-2 text-gray-600 my-4">{children}</ul>
            ),
            li: ({ children }) => (
              <li className="text-gray-600">{children}</li>
            ),
            p: ({ children }) => (
              <p className="text-gray-600 leading-relaxed mb-4">{children}</p>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto my-6">
                <table className="min-w-full divide-y divide-gray-200">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-gray-50">{children}</thead>
            ),
            th: ({ children }) => (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {children}
              </td>
            ),
            tr: ({ children }) => (
              <tr className="even:bg-gray-50">{children}</tr>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
};

export default ProposalSection;