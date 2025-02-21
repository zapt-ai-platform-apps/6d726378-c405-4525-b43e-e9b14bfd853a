import React, { useState } from 'react';
import { runSimulation } from '../models/simulation';
import * as Sentry from '@sentry/browser';

export function SimulationDemo(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');

  const handleSimulation = async (): Promise<void> => {
    if (isLoading) return;
    setIsLoading(true);
    setResult('');
    try {
      console.log('Starting simulation...');
      const simulationResult = await runSimulation();
      setResult(simulationResult);
      console.log('Simulation completed:', simulationResult);
    } catch (error) {
      Sentry.captureException(error);
      console.error('Error during simulation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleSimulation}
        disabled={isLoading}
        className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-4 disabled:opacity-50"
      >
        {isLoading ? 'Simulating...' : 'Start Simulation'}
      </button>
      {result && <div className="text-green-600 font-medium">{result}</div>}
    </div>
  );
}