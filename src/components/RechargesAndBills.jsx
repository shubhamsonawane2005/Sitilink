import { Smartphone, Tv, Zap, CreditCard, Droplet, Wifi } from "lucide-react";

const RechargesAndBills = () => {
  return (
    <div className="bg-white mx-3 mt-4 rounded-3xl shadow-sm border border-gray-100 p-4">
      <h2 className="text-[16px] font-bold text-gray-800 mb-4 flex items-center justify-between">
        Recharges & Bill Payments
        <span className="text-[#00baf2] text-xs font-bold cursor-pointer">View All</span>
      </h2>

      <div className="grid grid-cols-4 gap-y-6 gap-x-2 text-center">
        <ActionIcon icon={<Smartphone className="text-[#00baf2] w-6 h-6" />} label="Mobile Recharge" />
        <ActionIcon icon={<Tv className="text-[#00baf2] w-6 h-6" />} label="DTH Recharge" />
        <ActionIcon icon={<Zap className="text-[#00baf2] w-6 h-6" />} label="Electricity" />
        <ActionIcon icon={<CreditCard className="text-[#00baf2] w-6 h-6" />} label="Credit Card" />
        
        <ActionIcon icon={<Droplet className="text-[#00baf2] w-6 h-6" />} label="Water" />
        <ActionIcon icon={<Wifi className="text-[#00baf2] w-6 h-6" />} label="Broadband" />
        <div className="flex flex-col items-center justify-center col-span-2 bg-[#f0f6ff] rounded-xl p-2 border border-blue-50 cursor-pointer">
           <span className="text-xs font-bold text-[#002e6e]">My Bills & Recharges ›</span>
        </div>
      </div>
    </div>
  );
};

const ActionIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 cursor-pointer group">
    <div className="w-12 h-12 rounded-full bg-[#f0f6ff] flex items-center justify-center transition-transform group-hover:scale-105">
      {icon}
    </div>
    <span className="text-[11px] font-medium text-gray-700 leading-tight w-16">
      {label}
    </span>
  </div>
);

export default RechargesAndBills;
