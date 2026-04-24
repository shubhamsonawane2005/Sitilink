import { 
  ArrowLeft, Search, TrainFront,
  FileText, MessageSquare, Info,
  Film, Coins, Train, CreditCard, TrendingUp, Gift, Users,
  Smartphone, Car, Lightbulb, Shield, SatelliteDish, Flame, Landmark, Receipt
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-sans">
      {/* Header / Search Bar */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-100">
        <ArrowLeft className="w-6 h-6 text-gray-700 cursor-pointer" onClick={() => navigate(-1)} />
        <div className="flex-1 bg-gray-50 rounded-full flex items-center px-4 py-2 border border-gray-200">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search Paytm"
            className="bg-transparent border-none outline-none w-full text-sm text-gray-700"
            autoFocus
          />
        </div>
      </div>

      {/* Recents */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-bold text-gray-800">Recents</h2>
          <span className="text-xs text-blue-500 font-medium cursor-pointer">Clear</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => navigate('/city-bus/cities')}
            className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-700 hover:bg-gray-100"
          >
            City Bus <span className="text-gray-400 text-[10px]">↗</span>
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 px-4 mb-6">
        <ActionButton icon={<FileText className="w-4 h-4 text-blue-500" />} label="My Orders" />
        <ActionButton icon={<MessageSquare className="w-4 h-4 text-blue-500" />} label="Help & Support" />
        <ActionButton icon={<Info className="w-4 h-4 text-blue-500" />} label="Paytm Guide" />
      </div>

      {/* Popular Services */}
      <div className="px-4">
        <h2 className="text-sm font-bold text-gray-800 mb-4">Popular Services</h2>
        <div className="grid grid-cols-4 gap-y-6 gap-x-2 text-center">
          <ServiceIcon icon={<TrainFront className="w-6 h-6 text-blue-500" />} label="Metro" />
          <ServiceIcon icon={<Film className="w-6 h-6 text-blue-500" />} label="Movie Tickets" />
          <ServiceIcon icon={<Coins className="w-6 h-6 text-blue-500" />} label="Save in Gold" />
          <ServiceIcon icon={<Train className="w-6 h-6 text-blue-500" />} label="Train Tickets" />
          <ServiceIcon icon={<CreditCard className="w-6 h-6 text-blue-500" />} label="Free Credit Score" />
          <ServiceIcon icon={<TrendingUp className="w-6 h-6 text-blue-500" />} label="Stocks" />
          <ServiceIcon icon={<Gift className="w-6 h-6 text-blue-500" />} label="Cashback & Offers" />
          <ServiceIcon icon={<Users className="w-6 h-6 text-blue-500" />} label="Refer & Win" />
        </div>
      </div>

      {/* Recharge & Bill Payments */}
      <div className="px-4 mt-8 bg-gray-50 pt-4 pb-8 rounded-t-3xl">
        <h2 className="text-sm font-bold text-gray-800 mb-4">Recharge & Bill Payments</h2>
        <div className="grid grid-cols-4 gap-y-6 gap-x-2 text-center">
          <ServiceIcon icon={<Smartphone className="w-6 h-6 text-blue-500" />} label="Mobile Recharge" />
          <ServiceIcon icon={<Car className="w-6 h-6 text-blue-500" />} label="FASTag Recharge" />
          <ServiceIcon icon={<Lightbulb className="w-6 h-6 text-blue-500" />} label="Electricity Bill" />
          <ServiceIcon icon={<Shield className="w-6 h-6 text-blue-500" />} label="Insurance / LIC" />
          <ServiceIcon icon={<SatelliteDish className="w-6 h-6 text-blue-500" />} label="DTH Recharge" />
          <ServiceIcon icon={<Flame className="w-6 h-6 text-blue-500" />} label="Book Gas Cylinder" />
          <ServiceIcon icon={<Landmark className="w-6 h-6 text-blue-500" />} label="Loan EMI Payment" />
          <ServiceIcon icon={<Receipt className="w-6 h-6 text-blue-500" />} label="All Bill Payments" />
        </div>
      </div>
    </div>
  );
};

const ActionButton = ({ icon, label }) => (
  <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 shadow-sm flex-1 justify-center whitespace-nowrap">
    <span>{icon}</span> {label}
  </button>
);

const ServiceIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 cursor-pointer group">
    <div className="w-10 h-10 flex items-center justify-center text-xl">
      {icon}
    </div>
    <span className="text-[10px] font-medium text-gray-600 leading-tight">
      {label}
    </span>
  </div>
);

export default SearchPage;
