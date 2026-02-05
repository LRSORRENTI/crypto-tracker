// "use client"
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
            name: "Open",
            total: priceData?.open,
          },
          {
            name: "High",
            total: priceData?.high
          },
          {
            name: "Low",
            total: priceData?.low
          },
          {
            name: "Close",
            total: priceData?.close
          },
          
        ]

    useEffect(() => {
        const fetchPriceData = async () => {
            try {
                const response = await fetch('https://api.coinpaprika.com/v1/coins/btc-bitcoin/ohlcv/today');
                const data: BitcoinPriceData[] = await response.json();
                // console.log(data);
                if (data && data.length > 0) {
                    setPriceData(data[0]);
                }
            } catch (error) {
                console.error("Error fetching Bitcoin data:", error);
            }
        };

        fetchPriceData();
    }, []);


    const renderCustomBarLabel = ({ x, y, width, value }: any): any => {
      return value ? (
        <text style={{fontSize: "10px"}} x={x + width / 2} y={y + 3} fill="hsl(var(--background))" textAnchor="middle" dy={-6}>
          {`$${value.toFixed(2)}`}
        </text>
      ) : null;
    };

    return (
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 16, right: 8, left: 8, bottom: 8 }}>
          <XAxis
            dataKey="name"
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Bar
            dataKey="total"
            barSize={48}
            fill="hsl(var(--btc))"
            radius={[8, 8, 0, 0]}
            label={renderCustomBarLabel}
          />
        </BarChart>
      </ResponsiveContainer>
    )
}
