import { Card } from "../components/ui/card";
import { Trophy } from "lucide-react";

const leaderboardData = [
  { name: "John Smith", savings: "320 kWh" },
  { name: "Emma Wilson", savings: "280 kWh" },
  { name: "Mike Johnson", savings: "245 kWh" },
];

export const LeaderboardCard = () => {
  return (
    <Card className="glass-card p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="text-yellow-500" />
        <h3 className="text-lg font-semibold">Top Savers</h3>
      </div>
      <div className="space-y-4">
        {leaderboardData.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">#{index + 1}</span>
              <span>{user.name}</span>
            </div>
            <span className="text-primary">{user.savings}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
