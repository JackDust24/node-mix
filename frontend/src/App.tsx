import React, { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.NODE_MIX_API_URL || 'http://localhost:8080';

function App() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<string | null>(null);

  const getContent = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/streams/get-content`);
      setContent(response.data.data);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome</h1>
      <div className="space-y-4">
        <button
          onClick={getContent}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Get Content
        </button>
      </div>
      {loading && <div className="mt-6 text-lg">Loading...</div>}
      {content && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Content:</h2>
          <pre className="whitespace-pre-wrap">{content}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
