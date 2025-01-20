// frontend/components/GetContent.tsx
import React, { useState } from 'react';
import GetContentButton from './components/ComponentButton';
import { ContentService } from '../services/ContentService';
import ContentDisplay from './components/Content';

function GetContent() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<string | null>(null);

  const getContent = async () => {
    setLoading(true);
    try {
      const fetchedContent = await ContentService.getContent();
      setContent(fetchedContent);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="space-y-4">
        <GetContentButton onClick={getContent} />
      </div>
      <ContentDisplay content={content} loading={loading} />
    </>
  );
}

export default GetContent;
