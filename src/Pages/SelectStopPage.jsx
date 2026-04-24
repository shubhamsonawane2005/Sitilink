import { useState } from "react";
import { ArrowLeft, ChevronDown, X, Minus, Plus, Info, User, Users } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const popularStops = [
  "Railway Station Terminal",
  "Linear Bus Stop",
  "Golden Point",
  "Sahara Darwaja",
  "Chowk Terminal",
  "Kamela Darwaja",
  "Kinnary Cinema",
  "Maan Darwaja",
  "Textile Market",
  "Dabholi Gam Brts",
  "I C Gandhi School"
];

const SelectStopPage = () => {
  const navigate = useNavigate();
  const { cityId } = useParams();

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [activeInput, setActiveInput] = useState("from");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isPassengerModalOpen, setIsPassengerModalOpen] = useState(false);

  // Format city name for display
  const cityName = cityId ? cityId.charAt(0).toUpperCase() + cityId.slice(1) : "City";

  const handleStopSelect = (stop) => {
    if (activeInput === "from") {
      setFromValue(stop);
      setActiveInput("to");
    } else {
      setToValue(stop);
    }
  };

  const activeValue = activeInput === "from" ? fromValue : toValue;
  const filteredStops = popularStops.filter(stop =>
    stop.toLowerCase().includes(activeValue.toLowerCase())
  );

  const passengerText = [];
  if (adults > 0) passengerText.push(`${adults} Adult${adults > 1 ? 's' : ''}`);
  if (children > 0) passengerText.push(`${children} Child${children > 1 ? 'ren' : ''}`);
  const passengerString = passengerText.join(", ") || "Select Passengers";

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-sans flex flex-col relative">
      {/* Header */}
      <div className="flex items-start justify-between p-4">
        <div className="flex gap-4">
          <ArrowLeft className="w-6 h-6 text-gray-800 cursor-pointer mt-1" onClick={() => navigate(-1)} />
          <div>
            <h1 className="text-lg font-bold text-gray-900 leading-tight">Buy City Bus Ticket</h1>
            <div className="flex items-center text-sm text-gray-800 mt-0.5">
              {cityName} <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
        <span className="text-[#00baf2] font-medium text-sm cursor-pointer mt-1">Help</span>
      </div>

      {/* Inputs */}
      <div className="px-4 py-2 flex flex-col gap-3 relative">
        {/* Connecting line */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-200 z-0"></div>

        <div className="relative z-10">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500 font-medium">From</label>
          <input
            type="text"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            onFocus={() => setActiveInput("from")}
            className={`w-full rounded-lg px-3 py-3 outline-none text-sm font-medium text-gray-800 transition-colors bg-white shadow-sm ${activeInput === "from" ? "border-2 border-[#00baf2]" : "border border-gray-300 focus:border-[#00baf2]"}`}
          />
        </div>

        <div className="relative z-10 mt-2">
          <input
            type="text"
            placeholder="To"
            value={toValue}
            onChange={(e) => setToValue(e.target.value)}
            onFocus={() => setActiveInput("to")}
            className={`w-full rounded-lg px-3 py-3 outline-none text-sm font-medium text-gray-800 transition-colors bg-white shadow-sm ${activeInput === "to" ? "border-2 border-[#00baf2]" : "border border-gray-300 focus:border-[#00baf2]"}`}
          />
        </div>

        {/* Passenger Box */}
        <div className="relative z-10 mt-2">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500 font-medium">Passenger</label>
          <div
            onClick={() => setIsPassengerModalOpen(true)}
            className="w-full border border-gray-300 rounded-lg px-3 py-3 flex justify-between items-center bg-white cursor-pointer"
          >
            <span className="text-sm font-medium text-gray-800">{passengerString}</span>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Buy Ticket Button */}
        <div className="mt-4 relative z-10">
          <button
            onClick={() => navigate('/ticket-success', { 
              state: { from: fromValue, to: toValue, adults, children, price: adults * 8 + children * 4 } 
            })}
            disabled={!fromValue || !toValue}
            className={`w-full py-3 rounded-lg font-medium text-sm transition-colors ${fromValue && toValue ? 'bg-[#00baf2] text-white' : 'bg-gray-100 text-gray-400'}`}
          >
            {fromValue && toValue
              ? `Buy Ticket for ₹${adults * 8 + children * 4}`
              : "Buy Ticket"}
          </button>

          <div className="flex items-center gap-1 mt-3 justify-center text-gray-500">
            <Info className="w-3 h-3" />
            <span className="text-xs">All bus tickets will be valid for 2 hours post booking</span>
          </div>
        </div>
      </div>

      {/* Popular Stops List */}
      <div className="flex-1 mt-6">
        <h2 className="px-4 text-base font-bold text-gray-900 mb-2">
          {activeValue ? "Search Results" : "Popular Stops"}
        </h2>

        <div className="flex flex-col border-t border-gray-100">
          {filteredStops.length > 0 ? (
            filteredStops.map((stop, index) => (
              <div
                key={index}
                onClick={() => handleStopSelect(stop)}
                className="px-4 py-4 border-b border-gray-100 text-sm text-gray-800 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                {stop}
              </div>
            ))
          ) : (
            <div className="px-4 py-8 text-center text-sm text-gray-500">
              No stops found matching "{activeValue}"
            </div>
          )}
        </div>
      </div>

      {/* Passenger Modal */}
      {isPassengerModalOpen && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsPassengerModalOpen(false)}></div>
          <div className="relative bg-white rounded-t-3xl p-6 shadow-xl animate-in slide-in-from-bottom w-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Add Passenger</h2>
                <p className="text-sm text-gray-500 mt-1">You can now book upto 5 Tickets</p>
              </div>
              <button
                onClick={() => setIsPassengerModalOpen(false)}
                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-6 mb-8">
              {/* Child Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 flex justify-center"><User className="w-6 h-6 text-gray-800" /></div>
                  <div>
                    <div className="font-medium text-gray-900">Child <span className="text-xs text-gray-500 font-normal">(Age &lt; 12 yrs)</span></div>
                    <div className="text-sm text-gray-500">₹4 / person</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => children > 0 && setChildren(c => c - 1)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center ${children > 0 ? 'border-[#00baf2] text-[#00baf2]' : 'border-gray-300 text-gray-300'}`}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-4 text-center font-medium">{children}</span>
                  <button
                    onClick={() => (adults + children) < 5 && setChildren(c => c + 1)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center ${(adults + children) < 5 ? 'border-[#00baf2] text-[#00baf2]' : 'border-gray-300 text-gray-300'}`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Adult Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 flex justify-center"><Users className="w-6 h-6 text-gray-800" /></div>
                  <div>
                    <div className="font-medium text-gray-900">Adult <span className="text-xs text-gray-500 font-normal">(Age &gt; 12yrs)</span></div>
                    <div className="text-sm text-gray-500">₹8 / person</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => adults > 0 && setAdults(a => a - 1)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center ${adults > 0 ? 'border-[#00baf2] text-[#00baf2]' : 'border-gray-300 text-gray-300'}`}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-4 text-center font-medium">{adults}</span>
                  <button
                    onClick={() => (adults + children) < 5 && setAdults(a => a + 1)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center ${(adults + children) < 5 ? 'border-[#00baf2] text-[#00baf2]' : 'border-gray-300 text-gray-300'}`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsPassengerModalOpen(false)}
              className="w-full bg-[#00baf2] text-white py-3.5 rounded-xl font-medium text-lg"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectStopPage;
