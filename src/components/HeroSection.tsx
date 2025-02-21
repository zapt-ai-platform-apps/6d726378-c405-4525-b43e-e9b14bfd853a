import React from 'react';

interface HeroSectionProps {}

export function HeroSection(props: HeroSectionProps): JSX.Element {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-4">Audio & Video hacks</h1>
        <p className="text-xl mb-8 text-center">
          Experience an interactive, plug-and-play testing environment for your audio and video equipment. Use AI assistance to design optimal connection sequences and configurations in real-time.
        </p>
      </div>
    </section>
  );
}