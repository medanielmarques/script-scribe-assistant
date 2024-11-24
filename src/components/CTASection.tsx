import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <div className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] opacity-10 bg-cover bg-center" />
      <div className="container px-4 mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Create Something Epic?
        </h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Join thousands of content creators who are already crafting amazing content with EpicScript
        </p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 group"
        >
          Start Creating For Free
          <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
        </Button>
        <p className="mt-6 text-white/80 text-sm">No credit card required</p>
      </div>
    </div>
  );
};