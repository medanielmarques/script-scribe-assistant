import { Button } from "@/components/ui/button";

export const HowItWorks = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-secondary">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Create Epic Content in 3 Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey from idea to amazing content has never been easier
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              step: "1",
              title: "Share Your Vision",
              description: "Tell EpicScript what you want to create, or start from scratch.",
            },
            {
              step: "2",
              title: "Let AI Guide You",
              description: "Get real-time suggestions and research as you write.",
            },
            {
              step: "3",
              title: "Polish to Perfection",
              description: "Fine-tune your content with AI-powered editing tools.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:rotate-6 transition-transform">
                {item.step}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};