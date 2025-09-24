import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepIndicatorProps {
  icon: LucideIcon;
  step: string;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ icon: Icon, step }) => {
  return (
    <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
      <Icon className="w-4 h-4" />
      {step}
    </div>
  );
};