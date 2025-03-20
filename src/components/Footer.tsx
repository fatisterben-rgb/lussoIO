import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../../images/Group.png";

const Footer = () => {
  return (
    <footer className="bg-[#0b0421] text-white py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center max-w-5xl px-4 gap-6 sm:gap-12">
        {/* Logo Section */}
        <div className="w-32 flex justify-center sm:justify-start">
          <img src={logo} alt="Lusso Logo" className="w-full h-auto" />
        </div>

        {/* Contact Info Section */}
        <div className="space-y-3 text-sm text-center sm:text-left max-w-md">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <MapPin size={18} className="text-purple-400" />
            <p>
              1203 S White Chapel Blvd #100, <br /> Southlake, TX 76092, United
              States
            </p>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Phone size={18} className="text-purple-400" />
            <p>+1 914-501-7487</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Mail size={18} className="text-purple-400" />
            <p>admin@lusso.io</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
