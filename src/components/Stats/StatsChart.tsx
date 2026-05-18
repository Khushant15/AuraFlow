import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useStats, useSettings } from '../../contexts';
import { THEME_COLORS } from '../../types';

export function StatsChart() {
  const { stats } = useStats();
  const { settings } = useSettings();

  const themeColor = THEME_COLORS[settings.theme];

  // Get last 7 days of data
  const chartData = useMemo(() => {
    const today = new Date();
    const data = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateKey = date.toISOString().split('T')[0];

      const dayStats = stats.dailyStats.find(s => s.date === dateKey);

      data.push({
        date: date.toLocaleDateString('en-US', { weekday: 'short' }),
        pomodoros: dayStats?.totalPomodoros || 0,
        focusTime: dayStats?.totalFocusTime || 0,
      });
    }

    return data;
  }, [stats.dailyStats]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 rounded-lg shadow-xl" style={{ background: 'var(--color-bg-tertiary)', border: '1px solid var(--color-border)' }}>
          <p className="text-[color:var(--color-text-primary)] font-medium">{label}</p>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {payload[0].value} pomodoros ({payload[0].payload.focusTime} min)
          </p>
        </div>
      );
    }
    return null;
  };

  if (stats.dailyStats.length === 0) {
    return (
      <div className="p-8 text-center">
        <p style={{ color: 'var(--color-text-muted)' }}>No data yet. Complete some pomodoros to see your stats!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Last 7 Days</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.05)' }} />
            <Bar
              dataKey="pomodoros"
              fill={themeColor.primary}
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
