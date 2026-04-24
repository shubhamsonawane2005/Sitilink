import { Plane, Bus, TrainFront, Clapperboard } from "lucide-react";

const TicketBooking = () => {
  return (
    <div className="bg-white mx-3 mt-4 rounded-3xl shadow-sm border border-gray-100 p-4">
      <h2 className="text-[16px] font-bold text-gray-800 mb-4">
        Ticket Booking
      </h2>

      <div className="grid grid-cols-4 gap-2 text-center">
        <BookingIcon icon={<Plane className="text-[#002e6e] w-6 h-6" />} label="Flight Tickets" />
        <BookingIcon icon={<Bus className="text-[#002e6e] w-6 h-6" />} label="Bus Tickets" />
        <BookingIcon icon={<TrainFront className="text-[#002e6e] w-6 h-6" />} label="Train Tickets" />
        <BookingIcon icon={<Clapperboard className="text-[#002e6e] w-6 h-6" />} label="Movie Tickets" />
      </div>
      
      {/* Small Promo Banner */}
      <div className="mt-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-3 flex items-center justify-between cursor-pointer">
          <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-gray-800">Flat 15% Off on Flights ✈️</span>
              <span className="text-[10px] text-gray-600">Use Code: PAYTMFLY</span>
          </div>
          <span className="text-orange-600 font-bold text-sm">Book Now ›</span>
      </div>
    </div>
  );
};

const BookingIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 cursor-pointer group">
    <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center transition-transform group-hover:scale-105">
      {icon}
    </div>
    <span className="text-[11px] font-medium text-gray-700 leading-tight w-16">
      {label}
    </span>
  </div>
);

export default TicketBooking;
