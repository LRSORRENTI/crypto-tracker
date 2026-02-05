'use client'
import React, { useState, useEffect } from 'react';
import { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Skeleton } from '@/components/ui/skeleton';
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

const DashboardPage = () => {
    // }
let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const [btcPrice, setBtcPrice] = useState<number | null>(null);
  const [ethPrice, setEthPrice] = useState<number | null>(null);
  const [adaPrice, setAdaPrice] = useState<number | null>(null);
  const [ltcPrice, setLtcPrice] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Define fetchPriceData inside your component
  const fetchPriceData = async () => {
    try {
      const btcResponse = await fetch('https://api.coinpaprika.com/v1/coins/btc-bitcoin/ohlcv/today');
      const ethResponse = await fetch('https://api.coinpaprika.com/v1/coins/eth-ethereum/ohlcv/today');
      const adaResponse = await fetch('https://api.coinpaprika.com/v1/coins/ada-cardano/ohlcv/today');
      const ltcResponse = await fetch('https://api.coinpaprika.com/v1/coins/ltc-litecoin/ohlcv/today');

      const btcData = await btcResponse.json();
      const ethData = await ethResponse.json();
      const adaData = await adaResponse.json();
      const ltcData = await ltcResponse.json();

      // Set the state for each cryptocurrency's price
      if (btcData.length > 0) setBtcPrice(btcData[0].close);
      if (ethData.length > 0) setEthPrice(ethData[0].close);
      if (adaData.length > 0) setAdaPrice(adaData[0].close);
      if (ltcData.length > 0) setLtcPrice(ltcData[0].close);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPriceData(); // Fetch data when the component mounts
  }, []); // Empty dependency array means this effect runs once on mount

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
      <div className="flex-col">
        <div className="flex-1 space-y-6 pb-10 pt-8 md:pt-10">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl main-h2">Dashboard</h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <p className="date">{new Date().toLocaleDateString()}</p>
              <p>{time}</p>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className='tablist'>
            <TabsTrigger
            className="crypto-btc data-[state=active]:text-[hsl(var(--btc))]"
            value="overview"
            onClick={() => setActiveTab("overview")}
            >Bitcoin</TabsTrigger>
             <TabsTrigger
              className="crypto-eth data-[state=active]:text-[hsl(var(--eth))]"
              value="reports"
              onClick={() => setActiveTab("reports")}
              >
              Ethereum
              </TabsTrigger>
              <TabsTrigger className="crypto-ada data-[state=active]:text-[hsl(var(--ada))]"
              value='ADA'
              onClick={() => setActiveTab("ADA")}>
                Cardano
              </TabsTrigger>
              <TabsTrigger className="crypto-ltc data-[state=active]:text-[hsl(var(--ltc))]"
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
                    <CardTitle className="text-sm font-medium crypto-btc">
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
                      className="h-4 w-4 crypto-btc"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                  <div className="text-2xl font-bold">
                  {btcPrice !== null ? `$${btcPrice.toFixed(2)}` : <Skeleton className="h-6 w-[140px] mt-1 mb-2" />}
                  </div>
                <p className="text-xs text-muted-foreground">
                 +20.1% from last month
                  </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium crypto-eth">
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
                      className="h-4 w-4 crypto-eth"
                    >
                     <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
             

                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                    {ethPrice !== null ? `$${ethPrice.toFixed(2)}` : <Skeleton className="h-6 w-[140px] mt-1 mb-2" />}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium crypto-ada">Cardano</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 crypto-ada"
                    >
                     
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                    <div className="text-2xl font-bold">
                  {adaPrice !== null ? `$${adaPrice.toFixed(2)}` : <Skeleton className="h-6 w-[100px] mt-1 mb-2" />}
                  </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium crypto-ltc">
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
                      className="h-4 w-4 crypto-ltc"
                    >
                     
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                    <div className="text-2xl font-bold">
                  {ltcPrice !== null ? `$${ltcPrice.toFixed(2)}` : <Skeleton className="h-6 w-[100px] mt-1 mb-2" />}
                  </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                    +22% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center">
        <Card className="col-span-3 bars">
        <CardHeader>
         <CardTitle>{getCardTitle(activeTab)}</CardTitle>
          </CardHeader>
          <CardContent className="pl-3">
            {activeTab === "overview" && <BitcoinOverview />}
            {activeTab === "reports" && <EthBarChart />}
            {activeTab === "ADA" && <CardanoBarChart/>}
            {activeTab === "LTC" && <LitecoinBarChart/>}
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  </Tabs>
        </div>
        </div>
    </>
  )
};

export default DashboardPage;
