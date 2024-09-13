import React, { useState } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  const rmsCurrent = "220V";
  const rmsPower = "1500W";
  const peakPower = "2000W";
  const unitsConsumed = "350 kWh";
  const todaysReport =
    "Energy consumption is within the expected range. No anomalies detected.";
  const predictedBill = "$120.00";

  const leaderboardData = [
    { house: "House A", consumption: "300 kWh" },
    { house: "House B", consumption: "350 kWh" },
    { house: "House C", consumption: "400 kWh" },
  ];

  const graphData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Energy Consumption",
        data: [100, 200, 150, 300, 250, 400],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleMenuClick = (section) => {
    setActiveSection(section);
    setIsSidebarOpen(false);
  };

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li
              className={activeSection === "dashboard" ? "active" : ""}
              onClick={() => handleMenuClick("dashboard")}
            >
              Home
            </li>
            <li
              className={activeSection === "report" ? "active" : ""}
              onClick={() => handleMenuClick("report")}
            >
              Report Issue
            </li>
            <li
              className={activeSection === "notifications" ? "active" : ""}
              onClick={() => handleMenuClick("notifications")}
            >
              Notifications
            </li>
            <li
              className={activeSection === "profile" ? "active" : ""}
              onClick={() => handleMenuClick("profile")}
            >
              Profile
            </li>
            <li
              className={activeSection === "settings" ? "active" : ""}
              onClick={() => handleMenuClick("settings")}
            >
              Settings
            </li>
          </ul>
        </nav>
      </div>

      <div className="content">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </button>

        {activeSection === "dashboard" && (
          <>
            <h1>Energy Insights Dashboard</h1>
            <div className="dashboard-sections">
              <div className="dashboard-section rms-display">
                <h2>RMS Current & Power</h2>
                <p>
                  <strong>Current:</strong> {rmsCurrent}
                </p>
                <p>
                  <strong>Power:</strong> {rmsPower}
                </p>
              </div>

              <div className="dashboard-section peak-power">
                <h2>Peak Power</h2>
                <p>{peakPower}</p>
              </div>

              <div className="dashboard-section units-consumed">
                <h2>Units Consumed</h2>
                <p>{unitsConsumed}</p>
              </div>

              <div className="dashboard-section todays-report">
                <h2>Today's Report</h2>
                <p>{todaysReport}</p>
              </div>

              <div className="dashboard-section leaderboard">
                <h2>Leaderboard</h2>
                <ul>
                  {leaderboardData.map((item, index) => (
                    <li key={index}>
                      <span>{item.house}</span> -{" "}
                      <span>{item.consumption}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="dashboard-section graph">
                <h2>Energy Consumption Over Time</h2>
                <Line data={graphData} />
              </div>

              <div className="dashboard-section predicted-bill">
                <h2>Predicted Bill</h2>
                <p>{predictedBill}</p>
              </div>
            </div>
          </>
        )}

        {activeSection === "report" && (
          <div className="report-content">
            <h1>Report Issue</h1>
            <form>
              <label htmlFor="issue">Issue Description:</label>
              <textarea id="issue" rows="4"></textarea>
              <label htmlFor="severity">Severity:</label>
              <select id="severity">
                <option value="minor">Minor</option>
                <option value="major">Major</option>
                <option value="critical">Critical</option>
              </select>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}

        {activeSection === "notifications" && (
          <div className="notifications-content">
            <h1>Notifications</h1>
            <ul>
              <li>Notification 1</li>
              <li>Notification 2</li>
              <li>Notification 3</li>
            </ul>
          </div>
        )}

        {activeSection === "profile" && (
          <div className="profile-content">
            <h1>Profile</h1>
            <p>
              <strong>Name:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> johndoe@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <button>Edit Profile</button>
          </div>
        )}

        {activeSection === "settings" && (
          <div className="settings-content">
            <h1>Settings</h1>
            <form>
              <label htmlFor="notifications">Notifications:</label>
              <select id="notifications">
                <option value="all">All</option>
                <option value="important">Important</option>
                <option value="none">None</option>
              </select>
              <label htmlFor="darkMode">Dark Mode:</label>
              <input type="checkbox" id="darkMode" />
              <button type="submit">Save Settings</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
