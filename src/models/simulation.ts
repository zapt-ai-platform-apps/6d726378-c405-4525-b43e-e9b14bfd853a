import * as Sentry from '@sentry/browser';
import { Device } from './device';

/**
 * Runs the simulation based on the provided devices inventory.
 *
 * @param devices - Array of device objects.
 * @returns The result of the simulation.
 */
export async function runSimulation(devices: Device[]): Promise<string> {
  try {
    console.log('Running simulation in model with devices:', devices.map(d => d.name));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const deviceList = devices.map(device => device.name).join(', ');
    const simulationResult = `Optimal configuration achieved for devices: ${deviceList}. Result: HD Quality with Low Latency.`;
    console.log('Simulation result from model:', simulationResult);
    return simulationResult;
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error in simulation model:', error);
    throw error;
  }
}