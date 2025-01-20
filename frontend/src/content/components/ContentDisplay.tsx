import React from 'react';

type ContentDisplayProps = {
  content: string | null;
  loading: boolean;
};

export default function ContentDisplay({
  content,
  loading,
}: ContentDisplayProps) {
  return (
    <div className="mt-6">
      {loading && <div className="text-lg">Loading...</div>}
      {content && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Content:</h2>
          <pre className="whitespace-pre-wrap">{content}</pre>
        </div>
      )}
    </div>
  );
}
