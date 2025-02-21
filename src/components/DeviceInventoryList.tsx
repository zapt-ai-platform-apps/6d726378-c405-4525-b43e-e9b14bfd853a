import React from 'react';

interface DeviceInventoryListProps {
  devices: string[];
}

export default function DeviceInventoryList({
  devices
}: DeviceInventoryListProps): JSX.Element {
  return (
    <div className="w-full max-w-md">
      <h3 className="text-lg font-bold mb-2">Devices Inventory:</h3>
      <ul className="list-disc list-inside">
        {devices.map((device, index) => (
          <li key={index}>{device}</li>
        ))}
      </ul>
    </div>
  );
}