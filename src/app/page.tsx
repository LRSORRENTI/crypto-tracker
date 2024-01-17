'use client'
import React, {useState} from 'react'
import { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/ui/date-range-picker"
import { MainNav } from "@/components/ui/main-nav"
import { Overview } from "@/components/ui/overview"
import { BitcoinOverview } from "@/components/ui/BitcoinOverview"
import { RecentSales } from "@/components/ui/recent-sales"
import { Search } from "@/components/ui/search"
import TeamSwitcher from "@/components/ui/team-switcher"
import { UserNav } from "@/components/ui/user-nav"
import { EthBarChart } from "@/components/ui/EthBarChart";
import { CardanoBarChart } from '@/components/ui/CardanoBarChart'
import { LitecoinBarChart } from '@/components/ui/LitecoinBarChart'
import '../app/globals.css'
// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app built using the components.",
// }
let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });



export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const getCardTitle = (tab: any) => {
    switch (tab) {
      case "overview":
        return "Bitcoin";
      case "reports":
        return "Ethereum";
      case "ADA":
        return "Cardano";
      case "LTC":
        return "Litecoin";
      default:
        return "Default";
    }
  };
  
  return (
    <>
      <div className="flex-col max-w-6xl mx-auto">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{color: "#CFFF04" }}>Dashboard</h2>
            <div className="flex items-center space-x-2">
              <p className='date' style={{color: "#CFFF04"}}> {new Date().toLocaleDateString()}</p><p style={{color: "#CFFF04"}}>{time}</p>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
            <TabsTrigger
            style={{ color: "#FF1867" }}
            value="overview"
            onClick={() => setActiveTab("overview")}
            >Bitcoin</TabsTrigger>
             <TabsTrigger
              style={{ color: "#00d1dc" }}
              value="reports"
              onClick={() => setActiveTab("reports")}
              >
              Ethereum
              </TabsTrigger>
              <TabsTrigger style={{color: "#00FF3C"}}
              value='ADA'
              onClick={() => setActiveTab("ADA")}>
                Cardano
              </TabsTrigger>
              <TabsTrigger style={{color: "#bc13fe"}}
              value='LTC'
              onClick={() => setActiveTab("LTC")}
              >
                Litecoin
              </TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium" style={{color: "#FF1867"}}>
                      Bitcoin
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path style={{color: "#FF1867"}} d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium" style={{color: "#00d1dc"}}>
                      Ethereum
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                     <path style={{color: "#00d1dc"}} d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
             

                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2,350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium" style={{color: "#00FF3c"}}>Cardano</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                     
                      <path style={{color: "#00ff3c"}} d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$112</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium" style={{color: "#bc13fe"}}>
                      Litecoin
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                     
                      <path style={{color: "#bc13fe"}} d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$573</div>
                    <p className="text-xs text-muted-foreground">
                    +22% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-4">
        <CardHeader>
         <CardTitle>{getCardTitle(activeTab)}</CardTitle>
          </CardHeader>
          <CardContent className="pl-3">
            {activeTab === "overview" && <BitcoinOverview />}
            {activeTab === "reports" && <EthBarChart />}
            {activeTab === "ADA" && <CardanoBarChart/>}
            {activeTab === "LTC" && <LitecoinBarChart/>}
            {/* Add similar conditions for other tabs if needed */}
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  </Tabs>
        </div>
        </div>
    </>
  )
}