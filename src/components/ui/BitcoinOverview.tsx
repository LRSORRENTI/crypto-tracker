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

    const renderCustomBarLabel = ({ x, y, width, height, value }) => {
      return value ? (
        <text style={{fontSize: "9px"}} x={x + width / 2} y={y + 3} fill="#FFF9" textAnchor="middle" dy={-6}>
          {`$${value.toFixed(2)}`}
        </text>
      ) : null;
    };

    // const yAxisMax = 50000;

    // const yAxisMax = (priceData?.high.toFixed(2));
    // let parsedy = (parseInt(yAxisMax) + 5000);
    // console.log(parsedy)
    const maxYValue = Math.max(...data.map(d => d.total ? d.total : 0));
    // const yAxisMax = priceData?.high > 50000 ? maxYValue : 100000;
    // const yAxisMax = priceData?.high > 40000 ? maxYValue : priceData?.high + 5000;
    // const yAxisMax = priceData?.high + 5000;
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
            // domain={[0, yAxisMax]}
            // domain={[0, yAxisMax]}
          />
          <Bar dataKey="total" barSize={60} fill="#FF1867" radius={[4, 4, 0, 0]} label={renderCustomBarLabel}  />
        </BarChart>
      </ResponsiveContainer>
    )
}