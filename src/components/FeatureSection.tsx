import React, { ReactNode } from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export function FeatureSection({ title, description, children }: FeatureSectionProps): JSX.Element {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{description}</p>
        {children}
      </div>
    </section>
  );
}