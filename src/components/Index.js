import React, { useState, useEffect } from "react";
import {
  Bolt,
  Leaf,
  DollarSign,
  Battery,
  BarChart3,
  AlertTriangle,
  Sun,
  Moon,
} from "lucide-react";
import "./Dash.css";

const mockWeeklyData = [
  { date: "Mon", value: 240 },
  { date: "Tue", value: 300 },
  { date: "Wed", value: 280 },
  { date: "Thu", value: 260 },
  { date: "Fri", value: 320 },
  { date: "Sat", value: 290 },
  { date: "Sun", value: 270 },
];

const MetricCard = ({ title, value, icon, trend }) => (
  <div className="dashboard-metric-card">
    <div className="dashboard-metric-header">
      {icon}
      <h3>{title}</h3>
    </div>
    <p className="dashboard-metric-value">{value}</p>
    {trend && (
      <p
        className={`dashboard-metric-trend ${
          trend.isPositive
            ? "dashboard-trend-positive"
            : "dashboard-trend-negative"
        }`}
      >
        {trend.isPositive ? "▲" : "▼"} {trend.value}%
      </p>
    )}
  </div>
);

const UsageChart = ({ data, title }) => (
  <div className="dashboard-chart-card">
    <h3>{title}</h3>
    <div className="dashboard-chart">
      {data.map((point, index) => (
        <div
          key={index}
          className="dashboard-chart-bar"
          style={{ height: `${point.value / 4}%` }}
        >
          <span>{point.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const LeaderboardCard = ({ leaderboard }) => (
  <div className="dashboard-leaderboard-card">
    <h3>Efficiency Leaderboard</h3>
    <ul>
      {leaderboard.map((user, index) => (
        <li key={index}>
          <span>{user.name}</span>
          <span>{user.efficiency}%</span>
        </li>
      ))}
    </ul>
  </div>
);

const IncidentReporting = ({ addIncident }) => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    if (description && location) {
      addIncident({ description, location });
      setDescription("");
      setLocation("");
    }
  };

  return (
    <div className="dashboard-incident-card">
      <h3>Report an Incident</h3>
      <input
        type="text"
        placeholder="Describe the issue"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const Dashboard = () => {
  const [userName, setUserName] = useState("Arjun");
  const [leaderboard, setLeaderboard] = useState([
    { name: "John Doe", efficiency: 98 },
    { name: "Jane Smith", efficiency: 95 },
    { name: "Alice Johnson", efficiency: 93 },
  ]);
  const [weeklyData, setWeeklyData] = useState(mockWeeklyData);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [incidents, setIncidents] = useState([
    { description: "Broken power line", location: "Oak Street" },
  ]);

  const addIncident = (incident) => {
    setIncidents((prev) => [...prev, incident]);
  };
  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div
      className={`dashboard-container ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <header className="dashboard-header">
        <h1>Welcome, {userName}</h1>
        <div className="dashboard-theme-toggle">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </header>

      <div className="dashboard-metrics-row">
        <MetricCard
          title="Current Power"
          value="4.2 kW"
          icon={<Bolt />}
          trend={{ value: 5, isPositive: false }}
        />
        <MetricCard
          title="Daily Usage"
          value="28.5 kWh"
          icon={<Battery />}
          trend={{ value: 3, isPositive: true }}
        />
        <MetricCard
          title="Monthly Bill"
          value="$245.00"
          icon={<DollarSign />}
        />
        <MetricCard
          title="Carbon Saved"
          value="125 kg"
          icon={<Leaf />}
          trend={{ value: 12, isPositive: true }}
        />
      </div>

      <div className="dashboard-row">
        <UsageChart data={weeklyData} title="Weekly Energy Consumption" />
        <LeaderboardCard leaderboard={leaderboard} />
      </div>

      <div className="dashboard-lower-row">
        <IncidentReporting addIncident={addIncident} />
        <div className="dashboard-warnings-card">
          <h3>Reported Incidents</h3>
          {incidents.map((incident, index) => (
            <div key={index} className="dashboard-alert">
              <p>
                <strong>Issue:</strong> {incident.description}
              </p>
              <p>
                <strong>Location:</strong> {incident.location}
              </p>
            </div>
          ))}
        </div>
        <div className="dashboard-tips-card">
          <h4>Did You Know?</h4>
          <ul>
            <li>
              Standby appliances can account for up to <strong>10%</strong> of
              household energy use.
            </li>
            <li>
              Solar panels can save the average household over{" "}
              <strong>$20,000</strong> in energy costs over 20 years.
            </li>
            <li>
              Microwaves use <strong>50%-65% less energy</strong> than
              conventional ovens for reheating and cooking small meals.
            </li>
            <li>
              Cranking up your AC doesn’t cool a room faster but increases
              energy usage unnecessarily.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
