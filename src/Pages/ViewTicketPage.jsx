import { useEffect, useState } from "react";
import { ArrowLeft, Ticket, ChevronUp } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const ViewTicketPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { from = "Amroli Char...", to = "Pandit Shya...", adults = 1, children = 0, expiryTime: passedExpiryTime } = location.state || {};

  const totalPassengers = adults + children;

  const [expiryTime] = useState(() => passedExpiryTime || Date.now() + 7200000);

  useEffect(() => {
    if (!passedExpiryTime) {
      navigate('.', { replace: true, state: { ...location.state, expiryTime } });
    }
  }, [passedExpiryTime, expiryTime, navigate, location.state]);

  const calculateTimeLeft = () => Math.max(0, Math.floor((expiryTime - Date.now()) / 1000));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [expiryTime]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return {
      hours: h.toString().padStart(2, "0"),
      minutes: m.toString().padStart(2, "0"),
      seconds: s.toString().padStart(2, "0")
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);
  
  const currentDate = new Date().toLocaleString('en-GB', { 
    day: '2-digit', month: 'short', year: 'numeric', 
    hour: '2-digit', minute: '2-digit', hour12: true 
  });

  return (
    <div className="max-w-md mx-auto min-h-screen font-sans flex flex-col bg-[#f2f4f7]">
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-4 bg-white/50">
        <ArrowLeft className="w-6 h-6 text-gray-700 cursor-pointer" onClick={() => navigate(-1)} />
        <div className="flex items-center gap-2 bg-[#eaf4fe] px-3 py-1.5 rounded-full">
          <Ticket className="w-4 h-4 text-[#00baf2]" />
          <span className="font-bold text-gray-900 text-sm">{totalPassengers} QR Ticket</span>
        </div>
        <span className="text-[#00baf2] font-medium text-sm cursor-pointer">Help</span>
      </div>

      <div className="flex-1 px-4 pt-6 pb-24 flex flex-col items-center">
        {/* Route Details */}
        <div className="flex items-center gap-3 text-xl font-bold text-gray-800 mb-6 w-full justify-center">
          <span className="truncate max-w-[40%]">{from}</span>
          <span className="text-gray-400 font-normal">→</span>
          <span className="truncate max-w-[40%]">{to}</span>
        </div>

        <div className="text-sm font-medium text-gray-800 mb-4">Scan this QR at Entry &amp; Exit Points</div>

        {/* QR Code Placeholder */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8 w-full max-w-[280px] aspect-square flex justify-center items-center">
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=SitilinkTicketMockData" 
            alt="QR Code" 
            className="w-full h-full object-contain mix-blend-multiply" 
          />
        </div>

        <div className="text-sm text-gray-800 mb-4">Your ticket is valid for</div>

        {/* Countdown Box */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex flex-col items-center">
            <span className="text-[40px] font-bold text-gray-900 leading-none">{hours}</span>
            <span className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest font-medium">HOURS</span>
          </div>
          <span className="text-4xl font-bold text-gray-400 -mt-6">:</span>
          <div className="flex flex-col items-center">
            <span className="text-[40px] font-bold text-gray-900 leading-none">{minutes}</span>
            <span className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest font-medium">MINUTES</span>
          </div>
          <span className="text-4xl font-bold text-gray-400 -mt-6">:</span>
          <div className="flex flex-col items-center">
            <span className="text-[40px] font-bold text-gray-900 leading-none">{seconds}</span>
            <span className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest font-medium">SECONDS</span>
          </div>
        </div>

        {/* Ticket Details Box */}
        <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900">Ticket Details</h3>
            <ChevronUp className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Issued On</span>
              <span className="font-medium text-gray-800 text-sm">{currentDate}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Order ID</span>
              <span className="font-medium text-gray-800 text-sm">26937121847</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Order Item ID</span>
              <span className="font-medium text-gray-800 text-sm">27896971839</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTicketPage;
