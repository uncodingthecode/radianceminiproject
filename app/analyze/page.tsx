'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { UploadSection } from '../components/UploadSection';
import { AnalysisSection } from '../components/AnalysisSection';
import Footer from '../components/Footer';

export default function AnalyzePage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFileUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setAnalysisComplete(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const handleViewResults = () => {
    // Navigate to results page
    console.log('Navigate to results');
  };

  const resetUpload = () => {
    setUploadedImage(null);
    setIsAnalyzing(false);
    setAnalysisComplete(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        {!uploadedImage ? (
          <UploadSection
            onFileUpload={handleFileUpload}
            dragOver={dragOver}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          />
        ) : (
          <AnalysisSection
            uploadedImage={uploadedImage}
            isAnalyzing={isAnalyzing}
            analysisComplete={analysisComplete}
            onStartAnalysis={startAnalysis}
            onViewResults={handleViewResults}
            onReset={resetUpload}
          />
        )}
      </div>
    </div>
  );
}