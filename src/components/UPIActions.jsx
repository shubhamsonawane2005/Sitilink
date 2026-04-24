import { Scan, Smartphone, ArrowRightLeft, Building2 } from "lucide-react";

const UPIActions = () => {
  return (
    <div className="bg-white mx-3 mt-4 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4">
        <h2 className="text-[16px] font-bold text-gray-800 mb-4 flex items-center">
          UPI Money Transfer
        </h2>

        <div className="grid grid-cols-4 gap-2 text-center">
          <IconButton icon={<Scan className="text-white w-7 h-7" />} label="Scan & Pay" primary />
          <IconButton icon={<Smartphone className="text-[#002e6e] w-7 h-7" />} label="To Mobile" />
          <IconButton icon={<ArrowRightLeft className="text-[#002e6e] w-7 h-7" />} label="To UPI ID" />
          <IconButton icon={<Building2 className="text-[#002e6e] w-7 h-7" />} label="To Bank A/c" />
        </div>
      </div>
      <div className="bg-blue-50/50 p-3 border-t border-gray-100 flex items-center justify-between cursor-pointer hover:bg-blue-50 transition-colors">
        <p className="text-sm font-semibold text-gray-700">UPI Lite: Secure & PIN-less <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-md ml-1">NEW</span></p>
        <span className="text-blue-500 font-bold">›</span>
      </div>
    </div>
  );
};

const IconButton = ({ icon, label, primary }) => (
  <div className="flex flex-col items-center gap-2 cursor-pointer group">
    <div className={`w-14 h-14 rounded-[20px] flex items-center justify-center transition-transform group-hover:scale-105 ${primary ? 'bg-[#002e6e] shadow-md shadow-blue-900/20' : 'bg-[#f0f6ff] border border-blue-50'}`}>
      {icon}
    </div>
    <span className="text-[11px] font-medium text-gray-700 leading-tight">
      {label}
    </span>
  </div>
);

export default UPIActions;
