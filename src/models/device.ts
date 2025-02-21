export interface Device {
  id: string;
  name: string;
}

function generateUniqueId(): string {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

/**
 * Creates a new device object after validating and normalizing the device name.
 *
 * @param {string} name - The name of the device.
 * @returns {Device} - The created device object.
 * @throws Will throw an error if the name is empty after trimming.
 */
export function createDevice(name: string): Device {
  const trimmedName = name.trim();
  if (trimmedName === '') {
    throw new Error('Device name cannot be empty');
  }
  return {
    id: generateUniqueId(),
    name: trimmedName,
  };
}