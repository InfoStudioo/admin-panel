import React, { useState } from 'react';
import { FaBars, FaBell, FaUserCircle, FaChevronDown, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'; // Import logout icon
import { useNavigate } from 'react-router-dom'; // Navigation for logout
import '../styles/navbar.css';

const Navbar = ({ toggleSidebar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Dropdown state
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Handle logout logic
    navigate('/loginpage'); // Redirect to login page
  };

  return (
    <nav className="navbar">
      {/* Sidebar toggle */}
      <button onClick={toggleSidebar} className="navbar-toggle">
        <FaBars />
      </button>

      {/* Navbar icons */}
      <div className="navbar-icons">
        <FaBell className="navbar-icon" />
        <FaEnvelope className="navbar-icon" />

        {/* Profile dropdown */}
        <div className="profile-dropdown">
          <FaUserCircle className="navbar-icon" />
          <button onClick={toggleDropdown} className="profile-toggle">
            <FaChevronDown />
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={handleLogout}>
                <FaSignOutAlt className="logout-icon" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
