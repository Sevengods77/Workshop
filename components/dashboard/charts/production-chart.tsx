"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { zone: "Zone A", oil: 450, gas: 280 },
  { zone: "Zone B", oil: 380, gas: 320 },
  { zone: "Zone C", oil: 520, gas: 250 },
  { zone: "Zone D", oil: 410, gas: 290 },
  { zone: "Zone E", oil: 490, gas: 310 },
]

export function ProductionChart() {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <h2 className="text-xl font-bold mb-4">Production by Zone</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="zone" stroke="var(--color-muted-foreground)" />
          <YAxis stroke="var(--color-muted-foreground)" />
          <Tooltip
            contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
            labelStyle={{ color: "var(--color-foreground)" }}
          />
          <Legend />
          <Bar dataKey="oil" fill="var(--color-chart-1)" name="Oil (1000 bbl/day)" />
          <Bar dataKey="gas" fill="var(--color-chart-3)" name="Gas (MMSCFD)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
