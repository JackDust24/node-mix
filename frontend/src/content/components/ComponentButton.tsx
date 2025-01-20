import React from 'react';
import { Button } from '@/components/ui/button';

type GetContentButtonProps = {
  onClick: () => void;
};

export default function GetContentButton({ onClick }: GetContentButtonProps) {
  return (
    <Button
      variant="default"
      className="w-full py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      onClick={onClick}
    >
      Get Content
    </Button>
  );
}
