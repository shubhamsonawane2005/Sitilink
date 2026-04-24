import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, BadgeCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const TicketSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { from = "Gondal Ch...", to = "West Zon...", adults = 1, children = 0, price = 8 } = location.state || {};

  // 1 hour countdown (3600 seconds)
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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

  const passengerText = [];
  if (adults > 0) passengerText.push(`${adults} Adult`);
  if (children > 0) passengerText.push(`${children} Child`);
  const ticketInfo = passengerText.join(", ") + " Ticket";

  return (
    <div className="max-w-md mx-auto min-h-screen font-sans flex flex-col relative bg-[#f1f5fb]">
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-4">
        <ArrowLeft className="w-6 h-6 text-gray-700 cursor-pointer" onClick={() => navigate(-1)} />
        <div className="text-2xl font-extrabold text-[#002e6e] tracking-tight">pay<span style={{ color: "#00baf2" }}>tm</span></div>
        <span className="text-[#00baf2] font-medium text-sm cursor-pointer">Help</span>
      </div>

      <div className="flex-1 px-6 pt-8 pb-24 flex flex-col items-center">
        {/* City Bus Logo Placeholder */}
        <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mb-8 shadow-sm border border-white">
          <span className="text-gray-400 text-xs font-semibold">BUS LOGO</span>
        </div>

        {/* Route Details */}
        <div className="flex items-center gap-3 text-xl font-bold text-[#002e6e] mb-2">
          <span>{from.substring(0, 10)}{from.length > 10 ? '...' : ''}</span>
          <span className="text-gray-400 font-normal">→</span>
          <span>{to.substring(0, 10)}{to.length > 10 ? '...' : ''}</span>
        </div>

        {/* Ticket Type */}
        <div className="text-sm text-gray-500 mb-1">{ticketInfo}</div>
        <div className="text-sm text-gray-500 mb-8">Local • AC</div>

        {/* Price & Success */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-5xl font-bold text-[#002e6e]">₹{price}</span>
          <BadgeCheck className="w-10 h-10 text-[#00d2b4] fill-[#00d2b4] text-white" />
        </div>

        <div className="text-[13px] font-semibold tracking-wide text-[#002e6e] mb-8">TICKET BOOKED SUCCESSFULLY</div>

        <div className="text-xs text-gray-500 mb-12">{currentDate}</div>

        {/* Countdown Box */}
        <div className="w-full bg-white rounded-3xl p-6 flex flex-col items-center shadow-sm">
          <div className="text-[15px] text-[#002e6e] mb-6">Your ticket is valid for</div>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex flex-col items-center">
              <span className="text-[40px] font-bold text-[#001b40] leading-none">{hours}</span>
              <span className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-medium">Hours</span>
            </div>
            <span className="text-4xl font-bold text-gray-400 -mt-6">:</span>
            <div className="flex flex-col items-center">
              <span className="text-[40px] font-bold text-[#001b40] leading-none">{minutes}</span>
              <span className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-medium">Minutes</span>
            </div>
            <span className="text-4xl font-bold text-gray-400 -mt-6">:</span>
            <div className="flex flex-col items-center">
              <span className="text-[40px] font-bold text-[#001b40] leading-none">{seconds}</span>
              <span className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest font-medium">Seconds</span>
            </div>
          </div>

          <button className="w-full bg-[#00baf2] text-white py-3.5 rounded-xl font-medium mt-6 hover:bg-[#00a3d4] transition-colors">
            View your Tickets
          </button>
        </div>
      </div>

      {/* Bottom blue bar */}
      <div className="h-1.5 w-full bg-[#002e6e] absolute bottom-0 left-0 rounded-t-sm"></div>
    </div>
  );
};

export default TicketSuccessPage;
