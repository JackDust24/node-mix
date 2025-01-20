import React from 'react';
import GetContent from './content/getContent';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome</h1>
      <GetContent />
    </div>
  );
}

export default App;
