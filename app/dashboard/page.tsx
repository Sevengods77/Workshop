import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function DashboardPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1">
        <DashboardLayout />
      </div>
      <Footer />
    </main>
  )
}
