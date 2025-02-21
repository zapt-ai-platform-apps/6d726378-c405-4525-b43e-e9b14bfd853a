import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';

export default function RealTimeFeedback(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleGetFeedback = async (): Promise<void> => {
    if (isProcessing) return;
    setIsProcessing(true);
    try {
      console.log('Processing real-time feedback for input:', inputValue);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFeedback(`Feedback: Your current configuration parameter is "${inputValue}", which looks optimal.`);
      console.log('Real-time feedback computed.');
    } catch (error) {
      Sentry.captureException(error);
      console.error('Error processing real-time feedback:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 h-full">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type configuration parameter"
        className="box-border border border-gray-300 rounded py-2 px-3"
      />
      <button
        onClick={handleGetFeedback}
        disabled={isProcessing || inputValue.trim() === ''}
        className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
      >
        {isProcessing ? 'Processing...' : 'Get Feedback'}
      </button>
      {feedback && (
        <div className="text-green-600 font-medium mt-4 text-center">
          {feedback}
        </div>
      )}
    </div>
  );
}