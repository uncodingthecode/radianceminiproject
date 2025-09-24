import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const TipCard: React.FC<TipCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-pink-100">
      <Icon className="w-8 h-8 text-pink-400 mb-3 mx-auto" />
      <h4 className="font-semibold text-gray-700 mb-2">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};