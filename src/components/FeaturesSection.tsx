import { Brain, Bolt, Terminal, Check, Sparkles, Clock, Target, Palette } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Research",
      description: "Let our AI handle the heavy lifting while you focus on creativity.",
    },
    {
      icon: <Bolt className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Transform your ideas into polished scripts in minutes, not hours.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Smart Suggestions",
      description: "Get intelligent recommendations that match your writing style.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Always On Point",
      description: "Create content that resonates with your audience every time.",
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            Unleash Your Creative Potential
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create content that captivates your audience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};