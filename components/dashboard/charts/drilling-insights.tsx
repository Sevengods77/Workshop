"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { week: "Week 1", wellsActive: 12, efficiency: 92 },
  { week: "Week 2", wellsActive: 14, efficiency: 88 },
  { week: "Week 3", wellsActive: 13, efficiency: 95 },
  { week: "Week 4", wellsActive: 15, efficiency: 91 },
]

export function DrillingInsights() {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <h2 className="text-xl font-bold mb-4">Drilling Operations Efficiency</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="week" stroke="var(--color-muted-foreground)" />
          <YAxis stroke="var(--color-muted-foreground)" />
          <Tooltip
            contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
            labelStyle={{ color: "var(--color-foreground)" }}
          />
          <Area
            type="monotone"
            dataKey="efficiency"
            stroke="var(--color-chart-1)"
            fill="url(#colorEff)"
            name="Efficiency %"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
