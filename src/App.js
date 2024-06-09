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


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Selection/>} exact />
        <Route path="/hero" element={<HeroSelection/>} exact />
        <Route path="/explore" element={<ExplorePage/>} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<SignUp/>} exact />
        <Route path="/appointment" element={<Appointment/>} exact />
      </Routes>
    </div>
  );
}

export default App;
