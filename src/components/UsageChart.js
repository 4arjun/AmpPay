import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const UsageChart = ({ data, title }) => {
  return (
    <div className="glass-card p-6 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip 
              contentStyle={{ 
                background: '#1A1F2C',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px'
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8B5CF6"
              fillOpacity={1}
              fill="url(#colorGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
