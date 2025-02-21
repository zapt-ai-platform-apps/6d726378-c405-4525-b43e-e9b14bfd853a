import React from 'react';

interface DeviceInputFormProps {
  newDevice: string;
  onNewDeviceChange: (value: string) => void;
  handleAddDevice: () => void;
}

export default function DeviceInputForm({
  newDevice,
  onNewDeviceChange,
  handleAddDevice
}: DeviceInputFormProps): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={newDevice}
        onChange={(e) => onNewDeviceChange(e.target.value)}
        placeholder="Enter device name (e.g., HDMI Cable)"
        className="box-border border border-gray-300 rounded py-2 px-3 mb-2"
      />
      <button
        onClick={handleAddDevice}
        className="cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
      >
        Add Device
      </button>
    </div>
  );
}