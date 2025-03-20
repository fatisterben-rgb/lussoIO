import Dashboard1 from "../../images/screen1.png";
import Dashboard2 from "../../images/screen2.png";
import Dashboard3 from "../../images/screen3.png";

const MarketplaceSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#000] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-[40%] space-y-6">
            <span className="bg-gradient-to-r from-[#57D8FF] via-[#5773FF] to-[#D747FF] inline-block bg-clip-text text-transparent text-xl font-bold ">
              Key Features
            </span>

            <div className="space-y-4">
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                A Marketplace
                <br />
                Built for
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#57D8FF] to-[#D747FF]">
                  the Future of
                  <br />
                  Digital Business
                </span>
              </h1>
            </div>

            <p className="text-[#8B8B8B] text-lg leading-relaxed max-w-xl">
              Lusso.IO is not just a marketplace—it's a fully integrated digital
              commerce ecosystem that enables businesses and individuals to
              connect, collaborate, and transact with ease.
            </p>
          </div>

          {/* Right Dashboard Images */}
          <div className="relative w-full lg:w-[60%] h-[600px] md:h-[700px]">
            {/* Main/Top Dashboard */}
            <div
              className="absolute right-0 object-cover left-[15%]
                          transform hover:translate-y-[-5px] transition-transform duration-300"
            >
              <img
                src={Dashboard1}
                alt="Main Dashboard"
                className="w-full h-auto rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Middle Dashboard */}
            <div
              className="absolute top-[30%] left-0  w-[55%] z-20
                          transform hover:translate-y-[5px] transition-transform duration-300"
            >
              <img
                src={Dashboard2}
                alt="Features Dashboard"
                className="w-full h-auto rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Bottom Dashboard */}
            <div
              className="absolute top-[22%] left-[50%] w-[55%] object-cover
                          transform hover:translate-y-[-5px] transition-transform duration-300"
            >
              <img
                src={Dashboard3}
                alt="Calendar Dashboard"
                className="w-full h-auto rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Glow Effects */}
            <div
              className="absolute top-[20%] right-[20%] w-[300px] h-[300px] 
                          bg-purple-500/20 rounded-full blur-[100px] -z-10"
            />
            <div
              className="absolute left-[20%] w-[300px] h-[300px] 
                          bg-blue-500/20 rounded-full blur-[100px] -z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceSection;
