import { Check, Brain, Bolt, Terminal } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Research",
      description: "Get instant access to relevant information without leaving your editor.",
    },
    {
      icon: <Bolt className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Write scripts in half the time with smart suggestions and auto-completion.",
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Smart Templates",
      description: "Start with proven structures and customize them to your needs.",
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Always Learning",
      description: "Our AI adapts to your writing style and preferences over time.",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Everything You Need to Write Better Content
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};