import React from 'react';

export function ZaptBadge(): JSX.Element {
  return (
    <div className="fixed bottom-2 left-2 z-50">
      <a
        href="https://www.zapt.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-sm text-gray-600 underline"
      >
        Made on ZAPT
      </a>
    </div>
  );
}