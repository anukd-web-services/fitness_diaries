import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProfileModal from "./ProfileModal";

export default function SidebarToggle() {
  const { isCollapsed, setIsCollapsed } = useState(false);
  const [showProfile, setShowProfile] = useState(false);
}
