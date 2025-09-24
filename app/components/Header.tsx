import React from 'react';
import { Sparkles } from 'lucide-react';

export const Header = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
              AI Skin Analysis
            </h1>
            <p className="text-pink-400 text-sm">Get your personalized skincare routine</p>
          </div>
        </div>
      </div>
    </div>
  );
};