import React from "react";
import {
  Bolt,
  Leaf,
  DollarSign,
  Battery,
  BarChart3,
  AlertTriangle,
} from "lucide-react";
import { MetricCard } from "../components/MetricCard";
import { UsageChart } from "../components/UsageChart";
import { LeaderboardCard } from "../components/LeaderboardCard";
import { UserProfile } from "../components/UserProfile";
import { IssueReporting } from "../components/IssueReporting";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import "@fortawesome/fontawesome-free/css/all.min.css";


const mockWeeklyData = [
  { date: "Mon", value: 240 },
  { date: "Tue", value: 300 },
  { date: "Wed", value: 280 },
  { date: "Thu", value: 260 },
  { date: "Fri", value: 320 },
  { date: "Sat", value: 290 },
  { date: "Sun", value: 270 },
];

const Index = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <div className="flex justify-end mb-6">
        <UserProfile />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <IssueReporting />
        </div>
        <div className="glass-card bg-gradient-to-br from-[#1A1F2C] via-[#2D3748] to-[#1A1F2C] p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="text-red-500 w-6 h-6" />
            <h2 className="text-xl font-semibold text-gray-200">
              Active Warnings
            </h2>
          </div>
          <div className="space-y-4">
            <Alert variant="destructive" className="bg-red-100 border border-red-200 text-red-800 p-4 rounded-lg">
              <AlertTitle className="font-bold">Power Line Damage Detected</AlertTitle>
              <AlertDescription className="text-sm">
                Downed power lines reported on Oak Street. Please avoid the
                area and maintain a safe distance of at least 30 feet.
              </AlertDescription>
            </Alert>
            <Alert className="bg-yellow-100 border border-yellow-200 text-yellow-800 p-4 rounded-lg">
              <AlertTitle className="font-bold">Scheduled Maintenance</AlertTitle>
              <AlertDescription className="text-sm">
                Planned outage on March 15th, 2-4 PM for system upgrades. Please
                prepare accordingly.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <UsageChart data={mockWeeklyData} title="Weekly Energy Consumption" />
        </div>
        <LeaderboardCard />
      </div>

      <div className="glass-card bg-gradient-to-br from-[#1A1F2C] via-[#2D3748] to-[#1A1F2C] p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className="text-primary w-6 h-6" />
          <h2 className="text-xl font-semibold text-gray-200">
            Predicted Usage
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-400">Estimated Next Bill</p>
            <p className="metric-value text-3xl">$268.50</p>
          </div>
          <div className="text-sm text-gray-400">
            <p>Based on current usage patterns</p>
            <p>Bill date: May 15, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
