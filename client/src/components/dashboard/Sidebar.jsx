import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/sidebar.css";

//Menu Configuration
export default function Sidebar({ isCollapsed, onProfileClick }) {
  const menuItems = [
    {
      label: "Dashboard",
      icon: "bi-house",
      subItems: [
        { label: "Daily Routine", icon: "bi-calendar-day", href: "#" },
        { label: "Upcoming Routine", icon: "bi-calendar-check", href: "#" },
        { label: "Quick Stats", icon: "bi-bar-chart-line", href: "#" },
        { label: "Highlgihts", icon: "bi-star", href: "#" },
      ],
    },
    { label: "Profile", icon: "bi-person", onclick: onProfileClick },
  ];
  return (
    <div
      className={`sidebar d-flex flex-column p-3 text-white ${
        isCollapsed ? "collapsed" : ""
      }`}
    >
      <h5 className="text-center mb-4">{!isCollapsed && "Your Dashboard"}</h5>
      <ul className="nav nav-pills flex-column">
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <li className="nav-item mb-2">
              {item.onclick ? (
                <button
                  className="btn text-white nav-link"
                  onClick={item.onclick}
                >
                  <i className={`bi ${item.icon} me-2`}></i>
                  {!isCollapsed && item.label}
                </button>
              ) : (
                <a
                  href={item.href || "#"}
                  className="nav-link text-white fw-bold"
                >
                  <i className={`bi ${item.icon} me-2`}></i>
                  {!isCollapsed && item.label}
                </a>
              )}
              {!isCollapsed &&
                item.subItems?.map((sub, subIndex) => (
                  <li className="nav nav-item ms-4 mb-1" key={subIndex}>
                    <a href={sub.href} className="nav-link text-white small">
                      <i className={`bi ${sub.icon} me-2`}></i>
                      {sub.label}
                    </a>
                  </li>
                ))}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
