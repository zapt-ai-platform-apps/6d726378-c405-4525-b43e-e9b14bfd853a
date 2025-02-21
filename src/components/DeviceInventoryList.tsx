import React from 'react';
import { Device } from '../models/device';

interface DeviceInventoryListProps {
  devices: Device[];
}

export default function DeviceInventoryList({
  devices
}: DeviceInventoryListProps): JSX.Element {
  return (
    <div className="w-full max-w-md">
      <h3 className="text-lg font-bold mb-2">Devices Inventory:</h3>
      <ul className="list-disc list-inside">
        {devices.map((device) => (
          <li key={device.id}>{device.name}</li>
        ))}
      </ul>
    </div>
  );
}