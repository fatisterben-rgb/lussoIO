const DigitalCommerce = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white p-4 md:p-0"
      style={{ backgroundImage: "url('../../images/digital.jpg')" }}
    >
      <div className="text-center space-y-5 max-w-md md:max-w-full">
        <p className="font-bold text-lg bg-gradient-to-r from-[#57D8FF] via-[#5773FF] to-[#D747FF] inline-block bg-clip-text text-transparent">
          Experience Lusso IO
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Join the Future of <br />
          <span className="text-white">Digital Commerce</span>{" "}
          <span className="font-thin">with </span>{" "}
          <span className="text-white">Lusso IO</span>
        </h1>
        <div className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-center md:gap-16 md:mt-8">
          <button className="w-full md:w-auto bg-[#4D19AD] text-white py-3 px-18 rounded-full hover:bg-purple-600">
            Become a Vendor
          </button>
          <p className="text-sm text-gray-300 md:hidden">
            List your services on Lusso AI today
          </p>
          <button className="w-full md:w-auto bg-cyan-400 text-black py-3 px-8 rounded-full hover:bg-cyan-500">
            Invest in the Marketplace
          </button>
          <p className="text-sm text-gray-300 md:hidden">
            Explore Lusso IO's investment opportunities
          </p>
          <button className="w-full md:w-auto bg-[#1100A9] text-white py-3 px-8 rounded-full hover:bg-indigo-600">
            Request a White-Label Demo
          </button>
          <p className="text-sm text-gray-300 md:hidden">
            Build your own custom marketplace
          </p>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center md:gap-16 md:mt-4 text-sm text-gray-300">
          <p>List your services on Lusso AI today</p>
          <p>Explore Lusso IO's investment opportunities</p>
          <p>Build your own custom marketplace</p>
        </div>
      </div>
    </div>
  );
};

export default DigitalCommerce;
