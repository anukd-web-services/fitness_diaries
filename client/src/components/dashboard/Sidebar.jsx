import React, { use, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar(isCollapsed) {
  const location = useLocation();

  //Bootstrap tooltip setup
  useEffect(() => {
    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((el) => new window.bootstrap.Tooltip(el));
  }, [isCollapsed]);

  const links = [];
}
