import React, { useState } from 'react';
import '../styles/Settings.css';

const Settings = () => {
  const [formData, setFormData] = useState({
    username: 'admin',
    email: 'admin@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: true,
    darkMode: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }
    alert('Settings updated successfully!');
  };

  return (
    <div className="settings-page">
      <h2 className="settings-header">Settings</h2>
      <form className="settings-form" onSubmit={handleSubmit}>
        {/* Profile Settings */}
        <div className="settings-section">
          <h3>Profile Settings</h3>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Password Management */}
        <div className="settings-section">
          <h3>Password Management</h3>
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password:</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="settings-section">
          <h3>Preferences</h3>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleInputChange}
              />
              Enable Email Notifications
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="darkMode"
                checked={formData.darkMode}
                onChange={handleInputChange}
              />
              Enable Dark Mode
            </label>
          </div>
        </div>

        <button type="submit" className="save-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
