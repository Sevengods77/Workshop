"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, TrendingUp, Droplet, Wind, Activity } from "lucide-react"
import { SeismologyChart } from "./charts/seismology-chart"
import { ProductionChart } from "./charts/production-chart"
import { RegionalDistribution } from "./charts/regional-distribution"
import { DrillingInsights } from "./charts/drilling-insights"

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("seismic")

  const dashboardTabs = [
    { id: "seismic", label: "Seismic Activity", icon: Activity },
    { id: "production", label: "Production Data", icon: Droplet },
    { id: "regional", label: "Regional Distribution", icon: TrendingUp },
    { id: "drilling", label: "Drilling Insights", icon: Wind },
  ]

  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 bg-sidebar border-r border-sidebar-border overflow-hidden ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between mb-6">
            {sidebarOpen && <h3 className="font-bold text-sidebar-foreground">Filters</h3>}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-sidebar-accent rounded transition-colors text-sidebar-foreground"
            >
              {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>

          <div className="space-y-2">
            {dashboardTabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded transition-colors ${
                    activeTab === tab.id
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent"
                  }`}
                >
                  <Icon size={20} />
                  {sidebarOpen && <span className="text-sm font-medium">{tab.label}</span>}
                </button>
              )
            })}
          </div>

          {sidebarOpen && (
            <div className="border-t border-sidebar-border pt-4 mt-6">
              <h4 className="text-xs font-bold text-sidebar-foreground uppercase mb-3">Filters</h4>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-sidebar-foreground/70 font-medium">Region</label>
                  <select className="w-full mt-1 px-2 py-1 rounded bg-sidebar-accent/50 text-sidebar-foreground text-sm border border-sidebar-border">
                    <option>All Regions</option>
                    <option>Arabian Sea</option>
                    <option>Bay of Bengal</option>
                    <option>Western Onshore</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-sidebar-foreground/70 font-medium">Date Range</label>
                  <select className="w-full mt-1 px-2 py-1 rounded bg-sidebar-accent/50 text-sidebar-foreground text-sm border border-sidebar-border">
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>Last Year</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6 lg:p-8 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Energy Data Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor seismology, production, and drilling operations in real-time
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Active Sites", value: "47", icon: Activity },
              { label: "Daily Production", value: "2.3M bbl", icon: Droplet },
              { label: "Seismic Events", value: "12", icon: TrendingUp },
              { label: "Efficiency Rate", value: "94.2%", icon: Wind },
            ].map((kpi, index) => {
              const Icon = kpi.icon
              return (
                <div key={index} className="bg-card rounded-lg p-6 border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground text-sm font-medium">{kpi.label}</span>
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div className="text-3xl font-bold">{kpi.value}</div>
                </div>
              )
            })}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeTab === "seismic" && (
              <>
                <SeismologyChart />
                <DrillingInsights />
              </>
            )}
            {activeTab === "production" && (
              <>
                <ProductionChart />
                <RegionalDistribution />
              </>
            )}
            {activeTab === "regional" && (
              <>
                <RegionalDistribution />
                <ProductionChart />
              </>
            )}
            {activeTab === "drilling" && (
              <>
                <DrillingInsights />
                <SeismologyChart />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
