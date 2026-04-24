import { Home, ScanLine, Wallet, History } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        <NavItem icon={<Home className="w-6 h-6" />} label="Home" active />
        
        {/* Floating Scan Button */}
        <div className="relative -top-5 flex flex-col items-center cursor-pointer group">
          <div className="bg-[#00baf2] p-4 rounded-full shadow-lg shadow-[#00baf2]/40 text-white group-hover:scale-105 transition-transform">
            <ScanLine className="w-7 h-7" />
          </div>
          <span className="text-[10px] font-bold text-gray-700 mt-1">Scan Any QR</span>
        </div>

        <NavItem icon={<Wallet className="w-6 h-6" />} label="Wealth" />
        <NavItem icon={<History className="w-6 h-6" />} label="History" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active }) => (
  <div className={`flex flex-col items-center justify-center w-16 cursor-pointer ${active ? 'text-[#002e6e]' : 'text-gray-400 hover:text-gray-600'}`}>
    {icon}
    <span className={`text-[10px] mt-1 ${active ? 'font-bold' : 'font-medium'}`}>{label}</span>
  </div>
);

export default BottomNav;
