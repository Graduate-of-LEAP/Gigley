// EarningsSummary.tsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '../ui/card';

export const EarningsSummary = () => {
  const data = [
    { month: 'Jan', earnings: 400 },
    { month: 'Feb', earnings: 300 },
    { month: 'Mar', earnings: 500 },
    { month: 'Apr', earnings: 200 },
    { month: 'May', earnings: 600 },
  ];

  return (
    <Card className="p-4 border-t-4 border-[#1167b1]">
      <h2 className="text-2xl font-semibold text-[#1167b1] mb-4">
        Earnings Summary
      </h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="earnings"
            stroke="#2a9df4"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
