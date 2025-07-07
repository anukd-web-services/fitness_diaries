import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/sidebar.css"; // Ensure this path is correct

export default function Sidebar({ isCollapsed }) {
  const location = useLocation();

  // Initialize Bootstrap tooltips on load & when collapsed state changes
  useEffect(() => {
    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((el) => new window.bootstrap.Tooltip(el));
  }, [isCollapsed]);

  // Define your sidebar links here
  const links = [
    { to: "/dashboard", label: "Home", icon: "house-door" },
    { to: "/dashboard/stats", label: "Stats", icon: "bar-chart" },
    { to: "/dashboard/settings", label: "Settings", icon: "gear" },
  ];

  return (
    <div className={`sidebar p-3 ${isCollapsed ? "collapsed" : ""}`}>
      {!isCollapsed && <h4 className="mb-4 text-center">MyApp</h4>}

      <ul className="nav nav-pills flex-column">
        {links.map((link) => (
          <li className="nav-item mb-2" key={link.to}>
            <Link
              to={link.to}
              className={`nav-link ${
                location.pathname === link.to ? "active" : "text-white"
              }`}
              data-bs-toggle={isCollapsed ? "tooltip" : ""}
              data-bs-placement="right"
              title={isCollapsed ? link.label : ""}
            >
              <i className={`bi bi-${link.icon} me-2`} />
              <span className="link-text">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
