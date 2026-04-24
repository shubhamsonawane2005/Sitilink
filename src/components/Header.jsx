import { Search, MessageSquare, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-4 sticky top-0 bg-[#00baf2] z-50 rounded-b-2xl shadow-md">
      <div className="relative">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30 backdrop-blur-sm">
          <User className="text-white w-6 h-6" />
        </div>
        {/* <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 border border-gray-300">
          <div className="w-3 h-1 bg-gray-400 rounded-sm"></div>
        </div> */}
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide flex items-center">
          Paytm
        </h1>
      </div>
      <div className="flex gap-5">
        <Search
          className="text-white w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => navigate('/search')}
        />
        <MessageSquare className="text-white w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" />
      </div>
    </header>
  );
};

export default Header;
