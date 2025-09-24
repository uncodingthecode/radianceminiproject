import React, { useRef } from 'react';
import { Upload, Camera } from 'lucide-react';

interface UploadZoneProps {
  onFileUpload: (file: File) => void;
  dragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
}

export const UploadZone: React.FC<UploadZoneProps> = ({
  onFileUpload,
  dragOver,
  onDragOver,
  onDragLeave,
  onDrop
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`relative border-2 border-dashed rounded-3xl p-12 mb-8 transition-all duration-300 ${
        dragOver 
          ? 'border-pink-400 bg-pink-50 scale-105' 
          : 'border-pink-200 bg-white/50 hover:bg-pink-50/50'
      }`}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
          <Upload className="w-8 h-8 text-white" />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Drop your photo here or click to browse
          </h3>
          <p className="text-gray-500">
            Supports JPG, PNG, and HEIC files up to 10MB
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Upload className="w-4 h-4" />
            Choose File
          </button>
          
          <button
            onClick={() => cameraInputRef.current?.click()}
            className="flex items-center gap-2 bg-white hover:bg-pink-50 text-pink-500 border-2 border-pink-200 hover:border-pink-300 px-6 py-3 rounded-2xl font-medium transition-all duration-200"
          >
            <Camera className="w-4 h-4" />
            Take Photo
          </button>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => e.target.files?.[0] && onFileUpload(e.target.files[0])}
        className="hidden"
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="user"
        onChange={(e) => e.target.files?.[0] && onFileUpload(e.target.files[0])}
        className="hidden"
      />
    </div>
  );
};