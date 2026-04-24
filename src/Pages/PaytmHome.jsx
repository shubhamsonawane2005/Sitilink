import Header from "../components/Header";
import UPIActions from "../components/UPIActions";
import RechargesAndBills from "../components/RechargesAndBills";
import TicketBooking from "../components/TicketBooking";
import BottomNav from "../components/BottomNav";

const PaytmHome = () => {
  return (
    <div className="max-w-md mx-auto bg-[#f5f7fa] min-h-screen font-sans relative pb-24 shadow-2xl">
      {/* 
        We use a relative container with a max-width to simulate a mobile screen 
        on larger displays, while filling the screen on mobile devices.
        The pb-24 ensures content doesn't get hidden behind the fixed BottomNav.
      */}
      
      <Header />
      
      <main className="animate-fade-in">
        <UPIActions />
        
        {/* Promotional Banner */}
        <div className="mx-3 mt-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white shadow-md flex justify-between items-center cursor-pointer hover:shadow-lg transition-shadow">
          <div>
            <p className="text-xs font-medium text-blue-200">Exclusive Offer</p>
            <p className="text-lg font-bold">Get ₹100 Cashback! 💰</p>
            <p className="text-xs mt-1">On your first UPI transfer</p>
          </div>
          <button className="bg-white text-blue-700 px-4 py-2 rounded-full text-xs font-bold shadow-sm">
            Claim Now
          </button>
        </div>

        <RechargesAndBills />
        <TicketBooking />
        
        {/* Passbook / Wealth Mini Section */}
        <div className="bg-white mx-3 mt-4 mb-6 rounded-3xl shadow-sm border border-gray-100 p-4 flex items-center justify-between cursor-pointer">
           <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-3 rounded-full">
                  <span className="text-xl">🏦</span>
              </div>
              <div>
                  <h3 className="font-bold text-gray-800 text-sm">Balance & History</h3>
                  <p className="text-xs text-gray-500">Check Bank Balance & Passbook</p>
              </div>
           </div>
           <span className="text-blue-500 font-bold text-lg">›</span>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default PaytmHome;
