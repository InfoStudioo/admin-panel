
# Admin Panel Frontend

This is the frontend part of the **Admin Panel** project developed in **React.js**. It provides a fully functional user interface for admins to monitor sales, spending, transactions, users, and settings. This frontend connects to the backend API hosted separately in the [`admin-panel-backend`](https://github.com/InfoStudioo/admin-panel-backend) repository.

## ✨ Features

- **Dashboard Overview**: Displays total, monthly, and daily sales data with charts.
- **User Management**: View and manage registered users.
- **Transaction History**: Displays a list of transactions (mock or dynamic).
- **Spending Analysis**: Graphical representation of spend data.
- **Chart.js Integration**: For sales and spend visualizations.
- **Captcha-secured Login Page**
- **Sidebar & Navbar**: Smooth navigation experience.
- **Settings Section**: Static for now, extendable for real configurations.

---

## 🛠️ Technologies Used

- React (with Vite for bundling)
- React Router DOM
- Axios
- Chart.js (`react-chartjs-2`)
- SCSS / CSS Modules
- Responsive design with Flexbox/Grid

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/InfoStudioo/admin-panel.git
   cd admin-panel


2. Install dependencies

npm install

3. Set environment variables (Optional) If you're using a .env file for API base URL:

VITE_API_URL=http://localhost:5000


4. Run the development server

npm run dev

Visit http://localhost:5173 in your browser.


🔌 Backend API
This frontend connects to the backend from this repo:

➡️ admin-panel-backend - https://github.com/InfoStudioo/admin-panel-backend

Make sure the backend is running on the correct port (default: http://localhost:5000) or update the base URL in api/api.js.

🎥 Video Series Roadmap (YouTube)
A complete video series explaining the frontend and backend in detail is available on YouTube:

🔹 Frontend Development

React App Setup – Part 1 - https://youtu.be/IyGoucFuNaY

Initial Setup and App Structure – Part 2 - https://youtu.be/L09cAOXnt84

Sidebar and Navbar Implementation – Part 3 - https://youtu.be/2EZfn9X5oqY

Footer Component Creation – Part 4 - https://youtu.be/mR0Wo38jrKM

Dashboard Component Development – Part 5 - https://youtu.be/Z13Yll6urbA

Integration of Chart.js Library – Part 6 - https://youtu.be/T70hwgsuSqU

Spend Analysis with React Chart.js 2 – Part 7 - https://youtu.be/ipaoTF5YEzM

Static Transaction List Implementation – Part 8 - https://youtu.be/T70hwgsuSqU

User Management Component – Part 9 - https://youtu.be/7_E1I7QgjcI

Settings Component Implementation – Part 10 - https://youtu.be/AHe4Koitv8A

Backend Development Database Setup and Query Execution – Part 11 - https://youtu.be/yLkMuimvNVk

Backend Project Setup – Part 12 - https://youtu.be/rlkFqio91bE

Models and Controllers Setup – Part 13 - https://youtu.be/BpQ7l3EqAR0

Routing and Server Configuration – Part 14 - https://youtu.be/I2PKhP9dBhI

Postman Setup and API Testing – Part 15 - https://youtu.be/fHKj9ldKSuw

Login and Dashboard Access API – Part 16 - https://youtu.be/gxsqzkIIxbk

Login API Implementation – Part 17 - https://youtu.be/kkf-ygyOHxQ

Captcha Implementation and Dashboard Access – Part 18 - https://youtu.be/Cr-FMabt4HM

API Authentication Setup – Part 19 - https://youtu.be/7Pm4MvSr8KY

Transaction Management APIs – Part 20 - https://youtu.be/TTjX1wPEiwQ

Session Handling and Error Management – Part 21 - https://youtu.be/h2S-YjbMOS8

Sales Data Management API – Part 22 - https://youtu.be/isY2pp4bQgI

GetSalesData API: Backend Implementation, React Integration & Testing – Part 23 - https://youtu.be/9k7eFu0Mxa0

Add SpendData API Creation and Testing in Postman – Part 24 - https://youtu.be/Vd-wOHsn_tg

getSpendData API: Creation, Testing, and Integration in React App – Part 25 - https://youtu.be/bI-9gXvXoY0

These videos provide step-by-step instructions and are highly recommended for a thorough understanding of the project.

📁 Folder Structure

admin-panel/
├── public/
├── src/
│   ├── api/             # Axios configs
│   ├── components/      # Navbar, Sidebar, Footer
│   ├── pages/           # Dashboard, Users, Settings, Login, etc.
│   ├── utils/           # Helper functions
│   ├── assets/          # Images and icons
│   ├── App.jsx
│   └── main.jsx
├── .env                 # (Optional) API URL
├── vite.config.js
└── package.json

📬 Contact
For any issues or suggestions, feel free to raise an Issue or reach out via comments on the YouTube videos.

