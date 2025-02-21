import React, { useState } from 'react';
import { runSimulation } from '../models/simulation';
import { createDevice } from '../models/device';
import * as Sentry from '@sentry/browser';
import DeviceInputForm from './DeviceInputForm';
import DeviceInventoryList from './DeviceInventoryList';
import { Device } from '../models/device';

export function SimulationDemo(): JSX.Element {
  const [devices, setDevices] = useState<Device[]>([]);
  const [newDevice, setNewDevice] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');

  const handleAddDevice = (): void => {
    try {
      const device = createDevice(newDevice);
      setDevices([...devices, device]);
      setNewDevice('');
    } catch (error) {
      Sentry.captureException(error);
      console.error('Invalid device:', error);
    }
  };

  const handleSimulation = async (): Promise<void> => {
    if (isLoading || devices.length === 0) return;
    setIsLoading(true);
    setResult('');
    try {
      console.log('Starting simulation with devices:', devices.map(d => d.name));
      const simulationResult = await runSimulation(devices);
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
    <div className="flex flex-col items-center space-y-4 h-full">
      <DeviceInputForm
        newDevice={newDevice}
        onNewDeviceChange={setNewDevice}
        handleAddDevice={handleAddDevice}
      />
      {devices.length > 0 && <DeviceInventoryList devices={devices} />}
      <button
        onClick={handleSimulation}
        disabled={isLoading || devices.length === 0}
        className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
      >
        {isLoading ? 'Simulating...' : 'Run Simulation'}
      </button>
      {result && (
        <div className="text-green-600 font-medium mt-4 text-center">
          {result}
        </div>
      )}
    </div>
  );
}