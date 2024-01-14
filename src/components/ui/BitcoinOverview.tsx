"use client"
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface BitcoinPriceData {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}





export function BitcoinOverview() {
    const [priceData, setPriceData] = useState<BitcoinPriceData | null>(null);
    const data = [
        // This is where the Crypto API call data will dynamically 
        // change later 
          {
            name: "open",
            // total: Math.floor(Math.random() * 5000) + 1000,
            total: priceData?.open
          },
          {
            name: "high",
            total: priceData?.high
          },
          {
            name: "low",
            total: priceData?.low
          },
          {
            name: "close",
            total: priceData?.close
          },
        ]

    useEffect(() => {
        const fetchPriceData = async () => {
            try {
                const response = await fetch('https://api.coinpaprika.com/v1/coins/btc-bitcoin/ohlcv/historical?start=2024-01-14&end=2024-01-14');
                const data: BitcoinPriceData[] = await response.json();
                if (data && data.length > 0) {
                    setPriceData(data[0]);
                }
            } catch (error) {
                console.error("Error fetching Bitcoin data:", error);
            }
        };

        fetchPriceData();
    }, []);
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#FF1867"  radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}