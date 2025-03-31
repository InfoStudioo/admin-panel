import React from 'react';
import { FaTachometerAlt, FaUsers, FaCog, FaBuilding } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="company-name">
        <FaBuilding className="company-icon" />
        {isOpen && "Company Name"}
      </div>
      <div className="sidebar-content">
        <NavLink to="/adminpanel/dashboard" className="sidebar-item" activeClassName="active">
          <FaTachometerAlt className="sidebar-icon" />
          {isOpen && <span>Dashboard</span>}
        </NavLink>
        <NavLink to="/adminpanel/users" className="sidebar-item" activeClassName="active">
          <FaUsers className="sidebar-icon" />
          {isOpen && <span>Users</span>}
        </NavLink>
        <NavLink to="/adminpanel/settings" className="sidebar-item" activeClassName="active">
          <FaCog className="sidebar-icon" />
          {isOpen && <span>Settings</span>}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
