"use client"

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Arabian Sea", value: 35 },
  { name: "Bay of Bengal", value: 28 },
  { name: "Western Onshore", value: 22 },
  { name: "Eastern Onshore", value: 15 },
]

const COLORS = ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)", "var(--color-chart-4)"]

export function RegionalDistribution() {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <h2 className="text-xl font-bold mb-4">Production Distribution by Region</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
            labelStyle={{ color: "var(--color-foreground)" }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
