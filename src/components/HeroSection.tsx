import { Button } from "@/components/ui/button";
import { Brain, Rocket, BookOpen } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-secondary to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Write Better Scripts,{" "}
            <span className="text-primary">Faster</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your AI-powered writing assistant that helps you create engaging content without the endless research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Writing Now
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          <div className="flex justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span>Research-Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};