import React, { useState, ChangeEvent } from 'react';
import { FileUploadService } from '../services/ApiService';
import FileUploadDisplay from './components/FileUploadDisplay';
import Button from '@/components/Button';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileUpload = async () => {
    if (!file) return;

    if (file.type !== 'application/pdf') {
      console.error('Invalid file type. Please upload a PDF.');
      alert('Only PDF files are allowed.');
      return;
    }

    setLoading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const fetchedMessage = await FileUploadService.postFile(formData);
      setMessage(fetchedMessage);
    } catch (error) {
      setMessage('Error uploading file');
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">PDF Upload</h1>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300 rounded"
        accept="application/pdf"
      />
      <Button onClick={handleFileUpload} text="Upload PDF" />

      <FileUploadDisplay message={message} loading={loading} />
    </div>
  );
}
