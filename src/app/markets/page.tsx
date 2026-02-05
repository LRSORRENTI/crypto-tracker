import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const movers = [
  { name: "Bitcoin", symbol: "BTC", price: "$63,420", change: "+2.4%" },
  { name: "Ethereum", symbol: "ETH", price: "$3,210", change: "+1.1%" },
  { name: "Solana", symbol: "SOL", price: "$142", change: "+6.8%" },
  { name: "Chainlink", symbol: "LINK", price: "$19.30", change: "-1.9%" },
]

const trendData = [
  { label: "BTC", value: "+2.4%", color: "hsl(var(--btc))", points: "0,24 10,20 20,18 30,16 40,10 50,8 60,12" },
  { label: "ETH", value: "+1.1%", color: "hsl(var(--eth))", points: "0,18 10,16 20,14 30,12 40,14 50,10 60,8" },
  { label: "SOL", value: "+6.8%", color: "hsl(var(--ada))", points: "0,26 10,22 20,20 30,14 40,8 50,6 60,4" },
]

const watchlist = [
  { name: "Bitcoin", symbol: "BTC", price: "$63,420", volume: "$19.4B", change: "+2.4%" },
  { name: "Ethereum", symbol: "ETH", price: "$3,210", volume: "$9.8B", change: "+1.1%" },
  { name: "Solana", symbol: "SOL", price: "$142", volume: "$2.3B", change: "+6.8%" },
  { name: "Cardano", symbol: "ADA", price: "$0.61", volume: "$520M", change: "-0.7%" },
  { name: "Litecoin", symbol: "LTC", price: "$86.10", volume: "$410M", change: "+0.3%" },
]

export default function MarketsPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Markets</p>
          <h1 className="text-3xl font-semibold tracking-tight">Live Snapshot</h1>
        </div>
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center md:w-auto">
          <Input placeholder="Search markets..." className="h-9 w-full sm:w-64" />
          <Button variant="secondary" className="h-9">Filters</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Market Cap</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">$2.38T</p>
            <p className="text-xs text-muted-foreground">+3.2% today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">24h Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">$96.4B</p>
            <p className="text-xs text-muted-foreground">+1.4% today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">BTC Dominance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">52.1%</p>
            <p className="text-xs text-muted-foreground">-0.6% today</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Intraday Trend</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-3">
          {trendData.map((trend) => (
            <div key={trend.label} className="rounded-lg border border-border/60 bg-background/80 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{trend.label}</span>
                <span className={trend.value.startsWith("-") ? "text-red-500" : "text-emerald-500"}>
                  {trend.value}
                </span>
              </div>
              <svg viewBox="0 0 60 28" className="mt-3 h-10 w-full">
                <polyline
                  points={trend.points}
                  fill="none"
                  stroke={trend.color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Top Movers</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-4">
          {movers.map((item) => (
            <div key={item.symbol} className="rounded-lg border border-border/60 bg-background/80 p-4">
              <p className="text-sm text-muted-foreground">{item.symbol}</p>
              <p className="text-lg font-semibold">{item.name}</p>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{item.price}</span>
                <span className={item.change.startsWith("-") ? "text-red-500" : "text-emerald-500"}>
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Watchlist</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="hidden grid-cols-[2fr_1fr_1fr_1fr] gap-4 text-xs text-muted-foreground md:grid">
            <span>Asset</span>
            <span>Price</span>
            <span>24h Volume</span>
            <span>Change</span>
          </div>
          {watchlist.map((asset) => (
            <div key={asset.symbol} className="grid gap-2 rounded-lg border border-border/60 bg-background/80 p-4 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-4">
              <div>
                <p className="text-sm text-muted-foreground">{asset.symbol}</p>
                <p className="text-base font-semibold">{asset.name}</p>
              </div>
              <p className="text-sm font-medium">{asset.price}</p>
              <p className="text-sm text-muted-foreground">{asset.volume}</p>
              <p className={asset.change.startsWith("-") ? "text-sm text-red-500" : "text-sm text-emerald-500"}>
                {asset.change}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
