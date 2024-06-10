import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Desktop/Authentication/Login";
import HomePage from "./Components/Desktop/Homepage/HomePage";
import SignUp from "./Components/Desktop/Authentication/SignUp";
import Appointment from "./Components/Desktop/Appointment/Appointment";
import Selection from "./Components/Selection/Selection";
import HeroSelection from "./Components/Selection/HeroSelection";
import ExplorePage from "./Components/Mobile/HeroMobile/ExplorePage";
import LoginSelection from "./Components/Selection/LoginSelection";
import MobileNotification from "./Components/Mobile/MobileNotification/MobileNotification";
import RegisterSelection from "./Components/Selection/RegisterSelection";
import AppointmentSelection from "./Components/Selection/AppointmentSelection";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Selection/>} exact />
        <Route path="/hero" element={<HeroSelection/>} exact />
        <Route path="/explore" element={<ExplorePage/>} exact />
        <Route path="/login" element={<LoginSelection />} exact />
        <Route path="/notification" element={<MobileNotification />} exact />
        <Route path="/signup" element={<RegisterSelection/>} exact />
        <Route path="/appointment" element={<AppointmentSelection/>} exact />
      </Routes>
    </div>
  );
}

export default App;
