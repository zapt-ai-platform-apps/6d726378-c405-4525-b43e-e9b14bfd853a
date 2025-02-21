import React, { useState } from 'react';
import { analyzePerformance } from '../models/performance';
import * as Sentry from '@sentry/browser';

export default function PerformanceAnalysis(): JSX.Element {
  const [parameter, setParameter] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  const handleAnalyze = async (): Promise<void> => {
    if (isAnalyzing || parameter.trim() === '') return;
    setIsAnalyzing(true);
    setAnalysisResult('');
    try {
      console.log('Starting performance analysis with parameter:', parameter);
      const result = await analyzePerformance(parameter);
      setAnalysisResult(result);
      console.log('Performance analysis completed:', result);
    } catch (error) {
      Sentry.captureException(error);
      console.error('Error during performance analysis:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 h-full">
      <input
        type="text"
        value={parameter}
        onChange={(e) => setParameter(e.target.value)}
        placeholder="Enter performance parameter"
        className="box-border border border-gray-300 rounded py-2 px-3"
      />
      <button
        onClick={handleAnalyze}
        disabled={isAnalyzing || parameter.trim() === ''}
        className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
      >
        {isAnalyzing ? 'Analyzing...' : 'Analyze Performance'}
      </button>
      {analysisResult && (
        <div className="text-green-600 font-medium mt-4 text-center">
          {analysisResult}
        </div>
      )}
    </div>
  );
}