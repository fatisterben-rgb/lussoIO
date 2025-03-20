import { FaCrown } from "react-icons/fa6";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoMdMegaphone } from "react-icons/io";
import { FaChartLine } from "react-icons/fa";
// import Ellips from "../../images/Ellipse.png";
const Revenue = () => {
  return (
    <div className="bg-[#000] text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <p className="bg-gradient-to-r from-[#57D8FF] via-[#5773FF] to-[#D747FF] inline-block bg-clip-text text-transparent text-xl font-bold">
          Revenue Streams
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          More Than Just a <span className="text-white">Marketplace</span> –
          <span className="font-thin">
            A Scalable <br /> Business Model
          </span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Highlighted Box */}
        <div className="bg-[#351658] text-center flex justify-center allign-items-center text-white font-semibold py-4 px-6 text-center rounded-lg">
          How Lusso IO Generates Revenue
        </div>

        {/* Revenue Boxes */}
        <div className="bg-[#17123A] p-6 rounded-lg flex items-center gap-4">
          <MdOutlineWorkspacePremium className="text-blue-400 text-2xl" />
          <div>
            <h3 className="font-semibold text-lg">Upsell SaaS Solutions</h3>
            <p className="text-gray-400 text-sm">
              Lusso AI repackaged as premium business tools
            </p>
          </div>
        </div>

        <div className="bg-[#17123A] p-6 rounded-lg flex items-center gap-4">
          <FaCrown className="text-yellow-400 text-2xl" />
          <div>
            <h3 className="font-semibold text-lg">
              Premium Vendor Subscriptions
            </h3>
            <p className="text-gray-400 text-sm">
              Tiered membership plans for elite service providers
            </p>
          </div>
        </div>

        <div className="bg-[#17123A] p-6 rounded-lg flex items-center gap-4">
          <RiMoneyDollarBoxFill className="text-purple-400 text-2xl" />
          <div>
            <h3 className="font-semibold text-lg">Transaction Fees</h3>
            <p className="text-gray-400 text-sm">
              Commission-based earnings from completed service transactions
            </p>
          </div>
        </div>

        <div className="bg-[#17123A] p-6 rounded-lg flex items-center gap-4">
          <IoMdMegaphone className="text-pink-400 text-2xl" />
          <div>
            <h3 className="font-semibold text-lg">
              Advertising & Sponsored Listings
            </h3>
            <p className="text-gray-400 text-sm">
              Featured placements for top-rated service providers
            </p>
          </div>
        </div>

        <div className="bg-[#17123A] p-6 rounded-lg flex items-center gap-4">
          <FaChartLine className="text-green-400 text-2xl" />
          <div>
            <h3 className="font-semibold text-lg">
              Enterprise Solutions & White-Label Licensing
            </h3>
            <p className="text-gray-400 text-sm">
              Businesses can license Lusso IO technology for their own platforms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
