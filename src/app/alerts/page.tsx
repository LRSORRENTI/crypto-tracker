import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const alerts = [
  { name: "BTC price drops below $60k", status: "Active", channel: "Push", created: "2 hours ago" },
  { name: "ETH 24h volatility > 6%", status: "Active", channel: "Email", created: "Yesterday" },
  { name: "SOL volume spike 2x", status: "Paused", channel: "Webhook", created: "Jan 31" },
]

const history = [
  { name: "BTC crossed $64k", time: "Today 9:42 AM", channel: "Push" },
  { name: "ETH volatility normalized", time: "Yesterday 7:15 PM", channel: "Email" },
  { name: "ADA volume spike 1.8x", time: "Jan 30 2:11 PM", channel: "Webhook" },
]

export default function AlertsPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Alerts</p>
          <h1 className="text-3xl font-semibold tracking-tight">Smart Triggers</h1>
        </div>
        <Button className="h-9">Create Alert</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Create New Alert</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Asset</p>
              <Input placeholder="BTC, ETH, SOL..." />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Condition</p>
              <Input placeholder="Price above / below / volatility" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Threshold</p>
              <Input placeholder="$62,000 or 5%" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Notify via</p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1">Push</span>
                <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1">Email</span>
                <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1">Webhook</span>
              </div>
            </div>
            <Button variant="secondary" className="h-9 w-full">Save Alert</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Active Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.name} className="rounded-lg border border-border/60 bg-background/80 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{alert.name}</p>
                  <span className={alert.status === "Active" ? "text-xs text-emerald-500" : "text-xs text-muted-foreground"}>
                    {alert.status}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{alert.channel}</span>
                  <span>{alert.created}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Recent Triggers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {history.map((item) => (
            <div key={item.name} className="flex flex-col justify-between gap-2 rounded-lg border border-border/60 bg-background/80 p-4 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.time}</p>
              </div>
              <span className="text-xs text-muted-foreground">{item.channel}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
