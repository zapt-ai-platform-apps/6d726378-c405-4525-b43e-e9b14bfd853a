import React, { useState } from 'react';
import { runAutomatedTests } from '../models/test';
import * as Sentry from '@sentry/browser';

export default function AutomatedTests(): JSX.Element {
  const [testParam, setTestParam] = useState<string>('');
  const [testParams, setTestParams] = useState<string[]>([]);
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAddTestParam = (): void => {
    if (testParam.trim() === '') return;
    setTestParams([...testParams, testParam]);
    setTestParam('');
  };

  const handleRunTests = async (): Promise<void> => {
    if (isLoading || testParams.length === 0) return;
    setIsLoading(true);
    setResult('');
    try {
      console.log('Starting automated tests with parameters:', testParams);
      const testResult = await runAutomatedTests(testParams);
      setResult(testResult);
      console.log('Automated tests completed:', testResult);
    } catch (error) {
      Sentry.captureException(error);
      console.error('Error during automated tests:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 h-full">
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={testParam}
          onChange={(e) => setTestParam(e.target.value)}
          placeholder="Enter test parameter"
          className="box-border border border-gray-300 rounded py-2 px-3 mb-2"
        />
        <button
          onClick={handleAddTestParam}
          className="cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Add Test Parameter
        </button>
      </div>
      {testParams.length > 0 && (
        <div className="w-full text-center">
          <p>Current Test Parameters: {testParams.join(', ')}</p>
        </div>
      )}
      <button
        onClick={handleRunTests}
        disabled={isLoading || testParams.length === 0}
        className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
      >
        {isLoading ? 'Running Tests...' : 'Run Automated Tests'}
      </button>
      {result && (
        <div className="text-green-600 font-medium mt-4 text-center">
          {result}
        </div>
      )}
    </div>
  );
}