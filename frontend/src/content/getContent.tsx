// frontend/components/GetContent.tsx
import React, { useState } from 'react';
import Button from '@/components/Button';
import { ContentService } from '../services/ApiService';
import ContentDisplay from './components/ContentDisplay';

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
        <Button onClick={getContent} text="Get Content" />
      </div>
      <ContentDisplay content={content} loading={loading} />
    </>
  );
}

export default GetContent;
