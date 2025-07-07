import React, { useState, useEffect } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import SidebarToggle from "../../components/dashboard/SidebarToggle";

export default function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const resize = () => setIsCollapsed(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="d-flex">
      <Sidebar isCollapsed={isCollapsed} />
      <div
        className="flex-grow-1 text-white p-4"
        style={{
          backgroundColor: "#332929", // ← custom theme color
          minHeight: "100vh",
        }}
      >
        <SidebarToggle
          isCollapsed={isCollapsed}
          toggleSidebar={() => setIsCollapsed((v) => !v)}
        />
        <h2>Dashboard Page</h2>
      </div>
    </div>
  );
}
