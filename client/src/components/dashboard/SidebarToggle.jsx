import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProfileModal from "./ProfileModal";

export default function SidebarToggle() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const handleToggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  const handleLogout = () => {
    setShowProfile(false);
  };
  return <div className="d-flex"></div>;
}
