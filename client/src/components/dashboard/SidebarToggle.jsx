// src/components/dashboard/SidebarToggle.jsx
import React from "react";

export default function SidebarToggle({ isCollapsed, toggleSidebar }) {
  return (
    <button
      className="btn btn-outline-light m-2 d-md-none d-block position-fixed top-0 end-0"
      onClick={toggleSidebar}
      style={{
        zIndex: 1050, // ensures it stays on top
        backgroundColor: "#332929",
        borderColor: "#ffffff",
      }}
    >
      <i className={`bi ${isCollapsed ? "bi-list" : "bi-x-lg"}`} />
    </button>
  );
}
