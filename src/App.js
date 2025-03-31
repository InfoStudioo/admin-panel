import React, { useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import CaptchaPage from "./pages/CaptchaPage";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

const AdminPanelLayout = ({ isSidebarOpen, toggleSidebar }) => (
  <div className={`main-content ${isSidebarOpen ? "" : "sidebar-closed"}`}>
    <Sidebar isOpen={isSidebarOpen} />
    <div className="main">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  </div>
);

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/loginpage" replace />} />
        <Route path="/loginpage" element={<Login />} />

        {/* Private routes for authenticated users */}
        <Route element={<PrivateRoute />}>
          <Route path="/captcha_admin" element={<CaptchaPage />} />
          <Route
            path="/adminpanel/*"
            element={<AdminPanelLayout isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* Catch-all to redirect to login */}
        <Route path="*" element={<Navigate to="/loginpage" replace />} />
      </Routes>
    </div>
  );
};

export default App;
