"use client"
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface EthPriceData {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}





export function EthOverview() {
    const [priceData, setPriceData] = useState<EthPriceData | null>(null);
    const data = [
        // This is where the Crypto API call data will dynamically 
        // change later 
          {
            name: "Open",
            // total: Math.floor(Math.random() * 5000) + 1000,
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
                const response = await fetch('https://api.coinpaprika.com/v1/coins/eth-ethereum/ohlcv/today');
                const data: EthPriceData[] = await response.json();
                if (data && data.length > 0) {
                    setPriceData(data[0]);
                }
            } catch (error) {
                console.error("Error fetching Ethereum data:", error);
            }
        };

        fetchPriceData();
    }, []);

    const renderCustomBarLabel = ({ x, y, width, height, value }) => {
      return value ? (
        <text style={{fontSize: "12px"}} x={x + width / 2} y={y} fill="#FFF9" textAnchor="middle" dy={-6}>
          {`$${value.toFixed(2)}`}
        </text>
      ) : null;
    };



    const yAxisMax = (priceData?.high.toFixed(0));
    let parsedy = (parseInt(yAxisMax) + 5000);
    console.log(parsedy)
    const maxYValue = Math.max(...data.map(d => d.total ? d.total : 0));

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
            // domain={[0, 45000]}
          />
          <Bar dataKey="total" barSize={70} fill="#FF1867" radius={[4, 4, 0, 0]} label={renderCustomBarLabel}  />
        </BarChart>
      </ResponsiveContainer>
    )
}