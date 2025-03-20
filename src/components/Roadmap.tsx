import phase1 from "../../images/Rectangle1.png";
import phase2 from "../../images/Rectangle2.png";
import phase3 from "../../images/Rectangle3.png";
import listing from "../../images/listing.png";

const Roadmap = () => {
  return (
    <div className="relative min-h-screen bg-black text-white px-6 sm:px-12 py-1 sm:py-20 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mb-16">
        <p className="font-bold sm:text-lg bg-gradient-to-r from-[#57D8FF] via-[#5773FF] to-[#D747FF] inline-block bg-clip-text text-transparent">
          Expansion & Market Strategy
        </p>
        <h1 className="text-2xl sm:text-4xl font-bold">Lusso IO Roadmap</h1>
      </div>

      {/* Timeline Container */}
      <div className="relative flex flex-col justify-center items-center min-h-screen w-[55rem] p-5 sm:p-5 gap-4">
        {/* PHASE 1 */}
        <div className="flex justify-center w-70 bg-gradient-to-r from-[#100C28] to-[#1E1746]  px-4 py-2 rounded-full">
          <span className="font-bold text-xl bg-gradient-to-r from-[#57D8FF] via-[#5773FF] to-[#D747FF] inline-block bg-clip-text text-transparent ">
            PHASE1 - 0-6 months
          </span>
        </div>

        <div className=" grid-cols-1 sm:grid-cols-4 flex justify-center items-center gap-4 sm:gap-8">
          <div className="ml-5 w-36 sm:w-44 rounded-lg">
            <img
              src={phase1}
              alt="Phase 1"
              className="w-36 sm:w-44 rounded-lg"
            />
          </div>
          {/* Dates */}
          <div className="leading-10 font-bold text-center pr-0 mt-2 sm:pr-0">
            <p className="text-purple-400">August, 2024</p>
            <p className="text-purple-400">October, 2024</p>
            <p className="text-purple-400">February, 2025</p>
          </div>
          <div className="w-3 h-auto">
            <img src={listing} alt="" />
          </div>

          {/* Text & Image */}

          <div className="w-[22rem] leading-10 font-bold">
            <p>Early stage development</p>
            <p>Design and testing user experience</p>
            <p>Optimize platform for provider integration</p>
          </div>
        </div>

        {/* PHASE 2 */}
        <div className="flex justify-center w-70 bg-gradient-to-r from-[#100C28] to-[#1E1746]  px-4 py-2 rounded-full">
          <span className="font-bold text-xl bg-gradient-to-r from-[#57D8FF] via-[#5773FF] to-[#D747FF] inline-block bg-clip-text text-transparent ">
            PHASE2 - 6-12 months
          </span>
        </div>

        <div className="grid-cols-1 sm:grid-cols-4 flex justify-center items-center gap-4 sm:gap-8">
          <div className="ml-3 w-36 sm:w-44 rounded-lg">
            <img
              src={phase2}
              alt="Phase 1"
              className="w-36 sm:w-44 rounded-lg"
            />
          </div>
          {/* Dates */}
          <div className="leading-10 font-bold text-center pr-0 mt-2 sm:pr-0">
            <p className="text-purple-400">March, 2025</p>
            <p className="text-purple-400"> June, 2025</p>
            <p className="text-purple-400">September, 2025</p>
          </div>
          <div className="w-3 h-auto">
            <img src={listing} alt="" />
          </div>

          {/* Text & Image */}

          <div className="w-[22rem] leading-10 font-bold">
            <p>Secure Initial Provider Partnership</p>
            <p>Expand Testing Capacity to Meet Demand</p>
            <p>Optimize platform for provider integration</p>
          </div>
        </div>

        {/* PHASE 3 */}
        <div className="flex justify-center w-70 bg-gradient-to-r from-[#100C28] to-[#1E1746]  px-4 py-2 rounded-full">
          <span className="font-bold text-xl bg-gradient-to-r from-[#57D8FF] via-[#5773FF] to-[#D747FF] inline-block bg-clip-text text-transparent ">
            PHASE3 - 12-18 months
          </span>
        </div>

        <div className="grid-cols-1 sm:grid-cols-4 flex justify-center items-center gap-4 sm:gap-8">
          <div className="ml-5 w-36 sm:w-44 rounded-lg">
            <img
              src={phase3}
              alt="Phase 1"
              className="w-36 sm:w-44 rounded-lg"
            />
          </div>
          {/* Dates */}
          <div className="leading-10 font-bold text-center pr-0 mt-2 sm:pr-0">
            <p className="text-purple-400">December, 2025</p>
            <p className="text-purple-400">March, 2026</p>
            <p className="text-purple-400">August, 2026</p>
          </div>
          <div className="w-3 h-auto">
            <img src={listing} alt="" />
          </div>

          {/* Text & Image */}

          <div className="w-[22rem] leading-10 font-bold">
            <p>Secure Initial Provider Partnership</p>
            <p>Expand Testing Capacity to Meet Demand</p>
            <p>Optimize platform for provider integration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
