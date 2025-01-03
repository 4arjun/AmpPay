import { Bolt, Leaf, DollarSign, Battery, BarChart3 } from "lucide-react";
import { MetricCard } from "../components/MetricCard";
import { UsageChart } from "..//components/UsageChart";
import { LeaderboardCard } from "..//components/LeaderboardCard";

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
      <h1 className="text-3xl font-bold mb-8">Energy Dashboard</h1>
      
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
          <UsageChart
            data={mockWeeklyData}
            title="Weekly Energy Consumption"
          />
        </div>
        <LeaderboardCard />
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className="text-primary" />
          <h2 className="text-xl font-semibold">Predicted Usage</h2>
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
