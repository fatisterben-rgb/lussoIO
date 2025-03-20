import React from "react";
import Capa1 from "../../images/Capa_1.png";
import Capa2 from "../../images/Capa_2.png";
import Capa3 from "../../images/Capa_3.png";
import Capa4 from "../../images/Capa_4.png";
import Ellips from "../../images/Ellipse.png";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative border border-[#5773FF] p-6 w-50 h-55 rounded-tl-[10px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[10px]">
      <div className="w-12 h-12">{icon}</div>
      <div className="space-y-2">
        <h3 className="text-white text-base font-medium leading-tight">
          {title}
        </h3>
        <p className="text-[#8B8B8B] text-sm leading-tight">{description}</p>
      </div>
    </div>
  );
};

const MarketplaceSection = () => {
  const features = [
    {
      icon: <AIIcon />,
      title: "AI-powered service",
      description: "recommendations for users",
    },
    {
      icon: <SaaSIcon />,
      title: "Integrated SaaS solutions",
      description: "for automated transactions",
    },
    {
      icon: <UIUXIcon />,
      title: "Seamless UI/UX",
      description: "for optimized marketplace engagement",
    },
    {
      icon: <ToolsIcon />,
      title: "Premium tools",
      description: "for businesses, developers, and content creators",
    },
  ];

  return (
    <div className="relative w-full h-auto min-h-screen bg-[#000] overflow-hidden">
      {/* Overlay Image */}
      <div className="absolute inset-0">
        <img
          src={Ellips}
          alt="Overlay Effect"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-8 mb-16">
            <p className="text-sm font-bold bg-gradient-to-r from-[#57D8FF] via-[#5773FF] to-[#D747FF] inline-block bg-clip-text text-transparent">
              What is Lusso.IO?
            </p>

            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                A Revolutionary Digital Marketplace
              </h1>
              <h2 className="text-xl md:text-2xl text-white/80">
                Beyond Traditional Platforms
              </h2>
            </div>

            <p className="text-[#8B8B8B] max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Lusso.IO is a next-generation digital marketplace designed to
              connect individuals, startups, and businesses with elite
              professionals, technical developers, AI consultants, UI/UX
              designers, game developers, and media creators. Think of Lusso.IO
              as more than an elevator—a more powerful, AI-enhanced marketplace
              that redefines how digital services are bought and sold.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  );
};

// Icon Components
const AIIcon = () => (
  <img src={Capa1} alt="AI Service" className="w-full h-full object-contain" />
);

const SaaSIcon = () => (
  <img
    src={Capa2}
    alt="SaaS Solutions"
    className="w-full h-full object-contain"
  />
);

const UIUXIcon = () => (
  <img
    src={Capa3}
    alt="UI/UX Design"
    className="w-full h-full object-contain"
  />
);

const ToolsIcon = () => (
  <img
    src={Capa4}
    alt="Premium Tools"
    className="w-full h-full object-contain"
  />
);

export default MarketplaceSection;
