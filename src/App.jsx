import { Routes, Route } from "react-router-dom"
import PaytmHome from "./Pages/PaytmHome"
import SearchPage from "./Pages/SearchPage"
import SelectCityPage from "./Pages/SelectCityPage"
import SelectStopPage from "./Pages/SelectStopPage"
import TicketSuccessPage from "./Pages/TicketSuccessPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PaytmHome />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/city-bus/cities" element={<SelectCityPage />} />
      <Route path="/city-bus/stops/:cityId" element={<SelectStopPage />} />
      <Route path="/ticket-success" element={<TicketSuccessPage />} />
    </Routes>
  )
}

export default App
