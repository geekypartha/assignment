import React, { useState } from 'react'
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
const MobileNavbar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home", icon: HomeOutlinedIcon },
    { id: "search", label: "Search", icon: SearchIcon },
    { id: "book", label: "book", icon: AddCircleOutlineOutlinedIcon },
    { id: "notifications", label: "Notifications", icon: NotificationsOutlinedIcon },
    { id: "profile", label: "Profile", icon: PersonOutlineOutlinedIcon },
  ];
  
  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 bg-white shadow-md rounded-lg">
        <div className="flex justify-around py-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className="text-center flex flex-col items-center"
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon
                className={`w-6 h-6 ${
                  activeTab === tab.id ? "text-blue-500" : "text-gray-500"
                }`}
              />
              <span
                className={`text-xs font-poppins-regular ${
                  activeTab === tab.id ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default MobileNavbar