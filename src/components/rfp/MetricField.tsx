import React from 'react';
import { Info } from 'lucide-react';

interface MetricFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  industryAvg: number;
}

const MetricField: React.FC<MetricFieldProps> = ({
  label,
  value,
  onChange,
  industryAvg,
}) => {
  const getComparisonIndicator = () => {
    if (!value) return null;
    const diff = ((value - industryAvg) / industryAvg) * 100;
    const color = diff >= 0 ? 'text-green-600' : 'text-red-600';
    const bgColor = diff >= 0 ? 'bg-green-50' : 'bg-red-50';
    return (
      <div className={`${bgColor} ${color} text-xs font-medium px-2 py-1 rounded-full inline-flex items-center`}>
        {diff > 0 ? '+' : ''}{diff.toFixed(1)}% vs Industry Avg
      </div>
    );
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="flex items-center text-xs text-gray-500">
          <Info className="h-3 w-3 mr-1" />
          Industry Avg: {industryAvg.toLocaleString()}
        </div>
      </div>
      <input
        type="number"
        value={value || ''}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 text-sm"
      />
      <div className="h-6 flex items-center">
        {getComparisonIndicator()}
      </div>
    </div>
  );
};

export default MetricField;