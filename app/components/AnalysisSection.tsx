import React from 'react';
import { Sparkles } from 'lucide-react';
import { StepIndicator } from './StepIndicator';
import { ImagePreview } from './ImagePreview';
import { ActionButtons } from './ActionButtons';

interface AnalysisSectionProps {
  uploadedImage: string;
  isAnalyzing: boolean;
  analysisComplete: boolean;
  onStartAnalysis: () => void;
  onViewResults: () => void;
  onReset: () => void;
}

export const AnalysisSection: React.FC<AnalysisSectionProps> = ({
  uploadedImage,
  isAnalyzing,
  analysisComplete,
  onStartAnalysis,
  onViewResults,
  onReset
}) => {
  const getStepText = () => {
    if (analysisComplete) return 'Analysis Complete!';
    if (isAnalyzing) return 'Analyzing...';
    return 'Ready to Analyze';
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <StepIndicator icon={Sparkles} step={getStepText()} />
      </div>

      <ImagePreview
        imageSrc={uploadedImage}
        isAnalyzing={isAnalyzing}
        analysisComplete={analysisComplete}
        onReset={onReset}
      />

      <ActionButtons
        isAnalyzing={isAnalyzing}
        analysisComplete={analysisComplete}
        onStartAnalysis={onStartAnalysis}
        onViewResults={onViewResults}
        onReset={onReset}
      />
    </div>
  );
};
