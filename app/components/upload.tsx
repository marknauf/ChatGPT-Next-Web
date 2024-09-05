import React, { useState } from 'react';
import { Upload, Icon } from 'lucide-react';
import { IconButton } from './button';
import { useNavigate } from "react-router-dom";
import ContinueIcon  from "../icons/return.svg";
import {
  Path,
} from "../constant";

export const UploadRFP = () => {
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
       <div className="h-8" />
       <div className="h-8" />
      <h1 className="text-2xl font-bold mb-4">Upload RFP PDF</h1>
      


      {!file ? (
        <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
            accept=".pdf"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              <span className="text-orange-500 font-semibold">Click to upload</span> or drag and drop RFP PDF
            </p>
          </label>
        </div>
      ) : (
        <div className="w-full bg-gray-100 rounded-lg p-4">
          <div className="flex items-center">
            {/* <Icon className="h-8 w-8 text-red-500 mr-2" /> */}
            <div className="flex-grow">
              <p className="text-sm font-semibold">{file.name}</p>
              <p className="text-xs text-gray-500">{Math.round(file.size / 1024)} KB</p>
            </div>
            {/* <Icon className="h-5 w-5 text-green-500" /> */}
          </div>
          <div className="mt-2 bg-orange-500 h-1 w-full rounded-full" />
        </div>
      )}

      <div className="h-8" />

<IconButton
          bordered={false} 
          style={{ marginLeft: 20 }}
          text={"Continue"}
          type="primary"
          onClick={() => navigate(Path.RFPOverview)}
        />
    </div>
  );
};

