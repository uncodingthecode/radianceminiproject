import React from 'react';
import { Sparkles, Heart, RotateCcw } from 'lucide-react';

interface ActionButtonsProps {
  isAnalyzing: boolean;
  analysisComplete: boolean;
  onStartAnalysis: () => void;
  onViewResults: () => void;
  onReset: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  isAnalyzing,
  analysisComplete,
  onStartAnalysis,
  onViewResults,
  onReset
}) => {
  return (
    <div className="flex gap-4 justify-center">
      {!isAnalyzing && !analysisComplete && (
        <button
          onClick={onStartAnalysis}
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Sparkles className="w-5 h-5" />
          Analyze My Skin
        </button>
      )}

      {analysisComplete && (
        <button
          onClick={onViewResults}
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Heart className="w-5 h-5" />
          View My Routine
        </button>
      )}

      <button
        onClick={onReset}
        className="flex items-center gap-2 bg-white hover:bg-pink-50 text-pink-500 border-2 border-pink-200 hover:border-pink-300 px-6 py-4 rounded-2xl font-medium transition-all duration-200"
      >
        <RotateCcw className="w-5 h-5" />
        Try Again
      </button>
    </div>
  );
};