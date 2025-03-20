import React from "react";
import AIService from "../../images/1.png";
import Payments from "../../images/2.png";
import VendorTiers from "../../images/3.png";
import MultiCategory from "../../images/4.png";
import WhiteLabel from "../../images/5.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  isLarge?: boolean;
}

const FeatureCard: React.FC<FeatureProps> = ({
  title,
  description,
  image,
  isLarge = false,
}) => {
  return (
    <div
      className={`relative bg-[#1A103C] rounded-xl p-6 flex ${
        isLarge
          ? "flex-col justify-center items-center h-[360px] w-full md:w-[250px]"
          : "flex-row justify-center h-[170px] w-full md:w-[420px]"
      } hover:bg-[#231352] transition-all duration-300 shadow-lg`}
    >
      {/* Image */}
      <div
        className={`${
          isLarge ? "mb-6 w-24 h-24" : "mr-6 w-16 h-16"
        } flex-shrink-0`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Text */}
      <div
        className={`${isLarge ? "text-center" : "text-left flex-1"} space-y-2`}
      >
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-[#B3B3B3] text-sm leading-relaxed">{description}</p>
      </div>

      {/* Border */}
      <div className="absolute inset-0 border border-[#5773FF]/20 rounded-xl" />
    </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      title: "AI-Driven Service Matching",
      description:
        "Smart algorithms recommend the best providers for each user's needs",
      image: AIService,
    },
    {
      title: "Seamless Payments & Transactions",
      description: "Integrated billing and contract management",
      image: Payments,
      isLarge: true,
    },
    {
      title: "Premium Vendor Tiers",
      description: "Verified professionals for enterprise-grade services",
      image: VendorTiers,
    },
    {
      title: "Multi-Category Offerings",
      description:
        "From development and consulting to gaming and entertainment",
      image: MultiCategory,
    },
    {
      title: "White-Label Marketplace Solutions",
      description: "Businesses can create their own branded marketplace",
      image: WhiteLabel,
    },
  ];

  return (
    <div className="w-full bg-[#000] px-4 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Left column (2 small cards) */}
          <div className="flex flex-col gap-6">
            <FeatureCard {...features[0]} />
            <FeatureCard {...features[2]} />
          </div>

          {/* Center column (1 large card) */}
          <div className="flex justify-center">
            <FeatureCard {...features[1]} isLarge={true} />
          </div>

          {/* Right column (2 small cards) */}
          <div className="flex flex-col gap-6">
            <FeatureCard {...features[3]} />
            <FeatureCard {...features[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
