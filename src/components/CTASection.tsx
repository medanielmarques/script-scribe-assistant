import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export const CTASection = () => {
  return (
    <div className="py-20 bg-primary text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Writing?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of content creators who are already writing better, faster scripts.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
          Get Started Free
          <Rocket className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};