import React from 'react';

export function ZaptBadge(): JSX.Element {
  return (
    <div className="fixed bottom-2 right-2">
      <a
        href="https://www.zapt.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-xs text-gray-500 underline select-none"
      >
        Made on ZAPT
      </a>
    </div>
  );
}

export default ZaptBadge;