import React from 'react';
import { Camera, Heart, Sparkles } from 'lucide-react';
import { StepIndicator } from './StepIndicator';
import { TipCard } from './TipCard';
import { UploadZone } from './UploadZone';

interface UploadSectionProps {
  onFileUpload: (file: File) => void;
  dragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
}

export const UploadSection: React.FC<UploadSectionProps> = ({
  onFileUpload,
  dragOver,
  onDragOver,
  onDragLeave,
  onDrop
}) => {
  const tips = [
    { icon: Camera, title: "Good Lighting", desc: "Use natural light for best results" },
    { icon: Heart, title: "Clean Face", desc: "Remove makeup for accurate analysis" },
    { icon: Sparkles, title: "Face Forward", desc: "Look directly at the camera" }
  ];

  return (
    <div className="text-center mb-12">
      <StepIndicator icon={Heart} step="Step 1: Upload Your Photo" />
      
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Let's Analyze Your Beautiful Skin
      </h2>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
        Upload a clear photo of your face and our AI will analyze your skin condition 
        to recommend the perfect skincare routine just for you.
      </p>

      <UploadZone
        onFileUpload={onFileUpload}
        dragOver={dragOver}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {tips.map((tip, index) => (
          <TipCard
            key={index}
            icon={tip.icon}
            title={tip.title}
            description={tip.desc}
          />
        ))}
      </div>
    </div>
  );
};