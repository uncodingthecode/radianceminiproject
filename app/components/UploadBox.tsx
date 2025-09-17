"use client";
import { useState } from "react";

export default function UploadBox() {
  const [image, setImage] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input type="file" accept="image/*" onChange={handleUpload} className="mb-4" />
      {image && (
        <div>
          <img src={image} alt="Uploaded preview" className="w-64 h-64 object-cover rounded shadow" />
          <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
            Analyze Image
          </button>
        </div>
      )}
    </div>
  );
}
