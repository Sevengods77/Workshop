"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { time: "00:00", magnitude: 2.1, depth: 45 },
  { time: "04:00", magnitude: 1.8, depth: 38 },
  { time: "08:00", magnitude: 2.4, depth: 52 },
  { time: "12:00", magnitude: 1.9, depth: 41 },
  { time: "16:00", magnitude: 2.6, depth: 58 },
  { time: "20:00", magnitude: 2.2, depth: 48 },
  { time: "24:00", magnitude: 2.0, depth: 44 },
]

export function SeismologyChart() {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <h2 className="text-xl font-bold mb-4">Seismic Activity Monitoring</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="time" stroke="var(--color-muted-foreground)" />
          <YAxis stroke="var(--color-muted-foreground)" />
          <Tooltip
            contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
            labelStyle={{ color: "var(--color-foreground)" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="magnitude"
            stroke="var(--color-chart-1)"
            strokeWidth={2}
            name="Magnitude (Richter)"
          />
          <Line type="monotone" dataKey="depth" stroke="var(--color-chart-2)" strokeWidth={2} name="Depth (km)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
