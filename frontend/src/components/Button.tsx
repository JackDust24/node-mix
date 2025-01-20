import React from 'react';
import { Button } from '@/components/ui/button';

type MainButtonProps = {
  onClick: () => void;
  text: string;
};

export default function MainButton({ onClick, text }: MainButtonProps) {
  return (
    <Button
      variant="default"
      className="w-full py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
