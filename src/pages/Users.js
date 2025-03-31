import React, { useState } from 'react';
import '../styles/Users.css';

const Users = () => {
  // Sample data for users
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 3, name: 'Mark Johnson', email: 'mark.johnson@example.com', role: 'User' },
    { id: 4, name: 'Tom Johnson', email: 'tom.johnson@example.com', role: 'User' },
    { id: 5, name: 'Jerry Johnson', email: 'jerry.johnson@example.com', role: 'User' },
   
  ]);

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="users-page">
      <h2>Users Management</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(user.id)}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
