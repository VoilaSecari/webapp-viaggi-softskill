import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Navbar from "./assets/pages/Navbar";
import HomePage from "./assets/pages/Homepage";
import TravelDetailPage from "./assets/pages/viaggi/TravelDetailPage";
import TravelListPage from "./assets/pages/viaggi/TravelListPage";
import ContactListPage from "./assets/pages/viaggi/ContactListPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/viaggi">
          <Route path="" element={<TravelListPage />} />
          <Route path=":id" element={<TravelDetailPage />} />
          <Route path="/viaggi/contatti" element={<ContactListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
