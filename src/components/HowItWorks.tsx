import { Button } from "@/components/ui/button";

export const HowItWorks = () => {
  return (
    <div className="py-20 bg-secondary">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Choose Your Topic",
              description: "Select your content type and topic, or start from scratch.",
            },
            {
              step: "2",
              title: "Let AI Assist You",
              description: "Get real-time suggestions and research as you write.",
            },
            {
              step: "3",
              title: "Perfect Your Script",
              description: "Polish your content with AI-powered editing tools.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};