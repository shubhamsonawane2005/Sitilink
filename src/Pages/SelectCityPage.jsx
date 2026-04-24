import { ArrowLeft, Landmark, Umbrella, Mountain, Building2, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cities = [
  { id: "ahmedabad", name: "Ahmedabad", isNew: false, icon: Landmark },
  { id: "goa", name: "Goa", isNew: false, icon: Umbrella },
  { id: "nashik", name: "Nashik", isNew: false, icon: Mountain },
  { id: "surat", name: "Surat", isNew: true, icon: Building2 },
  { id: "mumbai", name: "Mumbai", isNew: true, icon: Building },
];

const SelectCityPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-sans">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b border-gray-50">
        <ArrowLeft className="w-6 h-6 text-gray-800 cursor-pointer" onClick={() => navigate(-1)} />
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Select your City</h1>

        <div className="flex flex-col">
          {cities.map((city) => (
            <div 
              key={city.id}
              onClick={() => navigate(`/city-bus/stops/${city.id}`)}
              className="flex items-center gap-4 py-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 border border-blue-100">
                <city.icon className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-800">{city.name}</span>
                {city.isNew && (
                  <span className="bg-[#21b777] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    Newly Added
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCityPage;
