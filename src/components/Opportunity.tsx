const InvestmentCard = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black">
      {/* Card Container */}
      <div className="my-20 relative w-300 h-150  bg-gradient-to-b from-[#0F0826] to-[#060114] p-8 rounded-2xl shadow-lg overflow-hidden border border-[#2A0E55]">
        {/* Background Grid */}
        <div className="absolute w-300 h-150 inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        {/* Content */}
        <div className="relative text-white text-center">
          <p className="text-2xl mb-4 font-bold bg-gradient-to-r from-[#57D8FF] via-[#5773FF] to-[#D747FF] inline-block bg-clip-text text-transparent">
            Investor Opportunity:
          </p>
          <h1 className="text-4xl font-light mt-2">
            Investment For{" "}
            <strong className="font-bold">The Digital Experience</strong>
          </h1>

          {/* Raising Amount */}
          <div className="absolute right-[65%] top-[370%] text-left z-50 sm:text-2xl">
            <p className="font-semibold">Raising</p>
            <p className="font-thin text-cyan-300">$1M</p>
            <p className="text-sm sm:text-xl opacity-80">on a $5M valuation</p>
          </div>

          {/* Offering Percentage */}
          <div className="absolute right-[55%] top-[255%] text-left z-50 sm:text-2xl">
            <p className="font-semibold">Offering</p>
            <p className="font-thin text-cyan-300">20%</p>
            <p className="text-sm sm:text-xl opacity-80">equity</p>
          </div>

          {/* Minimum Investment */}
          <div className="absolute right-[38%] top-[160%] text-left sm:text-2xl">
            <p className="font-semibold">Minimum</p>
            <p className="font-thin text-cyan-300">$250k</p>
            <p className="text-sm sm:text-xl opacity-80">Check size</p>
          </div>
        </div>

        {/* Background Arrows */}
        <div className="relative w-full h-full">
          {/* Big Purple Arrow */}
          <img
            src="../../images/Vector.png"
            alt="Big Purple Arrow"
            className="absolute left-[20%] top-[15%] w-[60%] h-auto object-contain opacity-[60%] z-10"
          />

          {/* Small Cyan Arrow - Below & Right of the Big Arrow */}
          <img
            src="../../images/Vector1.png"
            alt="Small Cyan Arrow Below"
            className="absolute right-[30%] top-[18%] w-[35%] h-auto object-contain opacity-[60%] z-20"
          />

          {/* New Small Cyan Arrow - Above & Left of the Big Arrow */}
          <img
            src="../../images/Vector2.png"
            alt="Small Cyan Arrow Above"
            className="absolute left-[45%] top-[48%] w-[25%] h-auto object-contain opacity-[60%] z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
