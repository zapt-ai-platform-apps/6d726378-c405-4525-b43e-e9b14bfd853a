import * as Sentry from '@sentry/browser';

/**
 * Runs the simulation based on the provided devices inventory.
 *
 * @param {string[]} devices - Array of device names.
 * @returns {Promise<string>} The result of the simulation.
 */
export async function runSimulation(devices: string[]): Promise<string> {
  try {
    console.log('Running simulation in model with devices:', devices);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const deviceList = devices.join(', ');
    const simulationResult = `Optimal configuration achieved for devices: ${deviceList}. Result: HD Quality with Low Latency.`;
    console.log('Simulation result from model:', simulationResult);
    return simulationResult;
  } catch (error) {
    Sentry.captureException(error);
    console.error('Error in simulation model:', error);
    throw error;
  }
}