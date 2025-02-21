import { HeroSection } from '../../components/HeroSection';
import { FeatureSection } from '../../components/FeatureSection';
import { SimulationDemo } from '../../components/SimulationDemo';
import { ZaptBadge } from '../../components/ZaptBadge';

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <main className="flex-grow">
        <FeatureSection 
          title="Virtual Simulations"
          description="Experiment with various audio and video configurations interactively. Add your available devices and let our AI-powered simulation guide you to the optimal plug-and-play setup."
        >
          <SimulationDemo />
        </FeatureSection>
        <FeatureSection 
          title="Automated Testing"
          description="Run simulations automatically to identify the optimal configurations based on pre-defined criteria. Enjoy a streamlined testing experience with AI-powered automation."
        />
        <FeatureSection 
          title="Real-Time Feedback"
          description="Receive instant feedback as you adjust your settings. Our AI analyzes your configurations in real-time and suggests improvements."
        />
        <FeatureSection 
          title="Interactive Tutorials"
          description="Follow guided, interactive tutorials tailored to your needs. Learn step-by-step how to set up and optimize your audio and video equipment."
        />
        <FeatureSection 
          title="Performance Analysis"
          description="Analyze the performance of various setups with detailed metrics. Understand signal paths, latency, and overall quality to make informed decisions."
        />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Audio & Video hacks. All rights reserved.</p>
      </footer>
      <ZaptBadge />
    </div>
  );
}