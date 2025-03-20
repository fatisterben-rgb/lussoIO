import Image2 from "../../images/Group.png";

const Hero = () => {
  return (
    <>
      <div className="relative w-full min-h-screen bg-[url('../../images/Bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="container w-full h-auto mx-auto px-4 md:px-6">
          <div className="relative w-full flex flex-col md:flex-row items-center justify-between min-h-screen">
            {/* Left side - AI Girl */}
            <div className="relative w-full md:w-1/2 h-auto">
              {/* Glow effects */}
              <div className="absolute -left-20 top-0 w-full h-full bg-purple-500/20 blur-[100px] -z-10" />
              <div className="absolute -bottom-20 -left-20 w-full h-full bg-cyan-500/20 blur-[100px] -z-10" />
            </div>

            {/* Right side - Content */}
            <div
              className="relative w-full md:w-1/2 z-20 px-6 md:px-8 lg:px-12 
                          mt-[50vh] md:mt-0 
                          bg-gradient-to-t from-black/90 via-black/50 to-transparent md:bg-none
                          pb-8 md:pb-0"
            >
              {/* Logo */}
              <div className="mb-6">
                <img
                  src={Image2}
                  alt="Lusso.io"
                  className="h-8 md:h-10 w-auto"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <h1 className="font-outfit">
                  <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                    The Marketplace
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white/90 font-light">
                    of the Future
                  </span>
                </h1>

                <p className="text-base lg:text-xl text-white/70 font-outfit max-w-xl">
                  A One-Stop Hub for AI, Consulting,
                  <br className="hidden sm:block" />
                  Development and Entertainment
                </p>

                {/* Button */}
                <button
                  className="w-full md:w-auto mt-6 lg:mt-8 
                    px-8 sm:px-10 
                    py-3 sm:py-4 
                    bg-gradient-to-r from-purple-600 to-purple-800 
                    hover:from-purple-700 hover:to-purple-900 
                    text-white font-outfit font-semibold 
                    text-sm sm:text-base
                    rounded-full transition-all duration-300 
                    transform hover:scale-105
                    shadow-lg shadow-purple-500/25"
                >
                  INVEST NOW
                </button>
              </div>
            </div>

            {/* Background light streaks */}
            <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
              <div className="absolute inset-0 bg-[url('/light-streaks.png')] bg-cover bg-center opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
