import { Button } from "@/components/ui/button";
import { Brain, Rocket, BookOpen, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-secondary via-secondary/50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center animate-fade-up space-y-8">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Brain className="h-8 w-8" />
            <span className="text-xl font-semibold">EpicScript</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Transform Your Ideas Into{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Epic Content
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your AI-powered writing companion that turns creative sparks into polished scripts, 
            <span className="font-semibold text-primary"> without the endless research rabbit holes</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
              Start Creating
              <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Brain className="h-5 w-5 text-primary" />
              <span>AI-Powered Magic</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Rocket className="h-5 w-5 text-primary" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>Research-Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};