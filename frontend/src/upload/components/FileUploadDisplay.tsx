import React from 'react';

type FileUploadDisplayProps = {
  message: string | null;
  loading: boolean;
};

export default function FileUploadDisplay({
  message,
  loading,
}: FileUploadDisplayProps) {
  return (
    <div className="mt-6">
      {loading && <div className="text-lg">Loading...</div>}
      {message && (
        <div className="bg-white p-4 rounded shadow">
          <pre className="whitespace-pre-wrap">{message}</pre>
        </div>
      )}
    </div>
  );
}
