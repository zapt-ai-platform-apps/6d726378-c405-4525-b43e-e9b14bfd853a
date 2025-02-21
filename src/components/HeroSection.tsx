import React from 'react';

interface HeroSectionProps {}

export function HeroSection(props: HeroSectionProps): JSX.Element {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-4">Virtual Audio-Video Simulation Lab</h1>
        <p className="text-xl mb-8 text-center">
          Experience AI-driven simulations to optimize your audio and video setups without the need for physical hardware.
        </p>
      </div>
    </section>
  );
}