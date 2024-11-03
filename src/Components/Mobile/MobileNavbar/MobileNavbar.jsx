import React, { useState } from 'react'
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import HeroMobile from '../HeroMobile/HeroMobile';
import ExplorePage from '../HeroMobile/ExplorePage';
import LoginMobile from '../LoginMobile/LoginMobile';
import { useLocation, useNavigate } from 'react-router-dom';
const MobileNavbar = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: "home", label: "Home", icon: HomeOutlinedIcon, path: "/hero" },
    { id: "search", label: "Search", icon: SearchIcon, path: "/explore" },
    {
      id: "book",
      label: "book",
      icon: AddCircleOutlineOutlinedIcon,
      path: "/appointment",
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: NotificationsOutlinedIcon,
      path: "/notification",
    },
    {
      id: "profile",
      label: "Profile",
      icon: PersonOutlineOutlinedIcon,
      path: "/login",
    },
  ];
  
  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 bg-white shadow-md rounded-lg">
        <div className="flex justify-around py-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className="text-center flex flex-col items-center"
              onClick={() => navigate(tab.path)}
            >
              <tab.icon
                sx={{
                  fontSize: 24,
                  color: location.pathname === tab.path ? "blue" : "gray",
                }}
              />
              <span
                className={`text-xs ${
                  location.pathname === tab.path
                    ? "text-blue-500"
                    : "text-gray-500"
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