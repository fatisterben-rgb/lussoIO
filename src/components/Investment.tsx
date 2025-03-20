import React from "react";

const Investment: React.FC = () => {
  const growthPoints: string[] = [
    "Expand marketplace offerings in key verticals (AI, tech, media, business consulting)",
    "Expand marketplace offerings in key verticals (AI, tech, media, business consulting)",
    "Expand marketplace offerings in key verticals (AI, tech, media, business consulting)",
    "Expand marketplace offerings in key verticals (AI, tech, media, business consulting)",
  ];

  return (
    <div
      className="relative bg-cover bg-center min-h-[400px] px-8 py-12 md:px-16 flex items-center text-white"
      style={{ backgroundImage: "url('../../images/Investment.png')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A021F] via-[#120A38]/80 to-[#1B0F50]/90"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center w-full">
        {/* Left Section: Growth Strategy */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="bg-gradient-to-r from-[#57D8FF] via-[#5773FF] to-[#D747FF] inline-block bg-clip-text text-transparent text-sm uppercase font-medium">
            Investment & Growth Potential
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Lusso IO is Expanding
          </h1>
          <p className="font-Outfit md:text-4xl text-gray-300">
            Be Part of the Future
          </p>

          <div className="space-y-3">
            {growthPoints.map((point, index) => (
              <p key={index} className="flex items-start text-gray-300">
                <span className="font-bold  text-blue-400 mr-2">•</span>
                <span>
                  <span className="text-white font-semibold">
                    Expand marketplace
                  </span>{" "}
                  {point}
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* Right Section: Financial Growth */}
        <div className="md:w-1/2 text-center md:text-right mt-50 md:mt-55">
          {/* Title Positioned Above the Numerical Values */}
          <h3 className="bg-gradient-to-r from-[#57D8FF] via-[#5773FF] to-[#D747FF] inline-block bg-clip-text text-transparent text-2xl font-medium mb-4">
            Projected Financial Growth
          </h3>

          {/* Grid for Numerical Values */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-lg mt-4">
            <div>
              <h4 className="text-4xl text-[#00F2E8]">100k</h4>
              <p className="text-gray-400 font-bold text-2xl">Active Users</p>
            </div>
            <div>
              <h4 className="text-4xl  text-[#00F2E8]">$5M</h4>
              <p className="text-gray-400 font-bold text-2xl">Capital Raised</p>
            </div>
            <div>
              <h4 className="text-4xl text-[#00F2E8]">$1M+</h4>
              <p className="text-gray-400 font-bold text-2xl">Global Revenue</p>
            </div>
            <div>
              <h4 className="text-4xl  text-[#00F2E8]">10%</h4>
              <p className="text-gray-400 font-bold text-2xl">
                Available Equity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
