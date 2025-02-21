import React, { useState } from 'react';

const tutorialSteps: string[] = [
  "Step 1: Introduction to the tutorial. Learn how to integrate devices.",
  "Step 2: Understand the configuration options available.",
  "Step 3: Simulate a configuration scenario with real-time feedback.",
  "Step 4: Analyze the results and optimize your setup."
];

export default function InteractiveTutorial(): JSX.Element {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNext = (): void => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = (): void => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 h-full">
      <div className="w-full text-center p-4 border border-gray-300 rounded">
        <p className="font-medium">{tutorialSteps[currentStep]}</p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === tutorialSteps.length - 1}
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}