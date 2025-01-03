import { Card } from "../components/ui/card";

export const MetricCard = ({ title, value, icon, trend }) => {
  return (
    <Card className="glass-card p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="metric-value mt-2">{value}</h3>
          {trend && (
            <p className={`text-sm mt-2 ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {trend.isPositive ? '↑' : '↓'} {trend.value}%
            </p>
          )}
        </div>
        <div className="text-primary text-2xl">{icon}</div>
      </div>
    </Card>
  );
};
