import React from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ImagePreviewProps {
  imageSrc: string;
  isAnalyzing: boolean;
  analysisComplete: boolean;
  onReset: () => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  imageSrc,
  isAnalyzing,
  analysisComplete,
  onReset
}) => {
  return (
    <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-pink-100 mb-8">
      <div className="relative rounded-2xl overflow-hidden bg-gray-100">
        <img
          src={imageSrc}
          alt="Uploaded skin photo"
          className="w-full h-80 object-cover"
        />
        
        {isAnalyzing && (
          <div className="absolute inset-0 bg-pink-500/20 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-pink-300 border-t-pink-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-pink-700 font-medium">Analyzing your skin...</p>
            </div>
          </div>
        )}

        {analysisComplete && (
          <div className="absolute top-4 right-4">
            <div className="bg-green-500 text-white rounded-full p-2">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>
        )}
      </div>
      
      <button
        onClick={onReset}
        className="absolute top-4 left-4 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 rounded-full p-2 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};