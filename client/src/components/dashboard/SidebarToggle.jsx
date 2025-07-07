import React from "react";

export default function SidebarToggle({ isCollapsed, toggleSidebar }) {
  return (
    <button
      type="button"
      className="btn btn-outline-light m-2 d-md-none d-block position-fixed top-0 end-0"
      onClick={toggleSidebar}
      aria-label={isCollapsed ? "Open sidebar" : "Close sidebar"}
      style={{
        zIndex: 1050, // ensures it stays above offcanvas and modals
        backgroundColor: "#332929",
        borderColor: "#ffffff",
      }}
    >
      <i className={`bi ${isCollapsed ? "bi-list" : "bi-x-lg"}`} />
    </button>
  );
}
