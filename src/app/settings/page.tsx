import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground">Settings</p>
        <h1 className="text-3xl font-semibold tracking-tight">Account & Preferences</h1>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Profile</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Full name</p>
              <Input placeholder="Satoshi Nakamoto" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Email</p>
              <Input placeholder="satoshi@crypto.io" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <p className="text-sm text-muted-foreground">Primary exchange</p>
              <Input placeholder="Coinbase, Kraken, Binance" />
            </div>
            <Button variant="secondary" className="h-9 md:col-span-2">Save Profile</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-lg border border-border/60 bg-background/80 p-3">
              <p className="text-sm font-medium">Two-factor auth</p>
              <p className="text-xs text-muted-foreground">Enabled via authenticator</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background/80 p-3">
              <p className="text-sm font-medium">Active sessions</p>
              <p className="text-xs text-muted-foreground">3 devices</p>
            </div>
            <Button className="h-9 w-full">Manage Security</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <label className="flex items-center justify-between rounded-lg border border-border/60 bg-background/80 p-3">
              <span>Price alerts via push</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label className="flex items-center justify-between rounded-lg border border-border/60 bg-background/80 p-3">
              <span>Daily market digest</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label className="flex items-center justify-between rounded-lg border border-border/60 bg-background/80 p-3">
              <span>Exchange downtime</span>
              <input type="checkbox" />
            </label>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Portfolio Mix</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>BTC</span>
                <span className="text-muted-foreground">48%</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full" style={{ width: "48%", background: "hsl(var(--btc))" }} />
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>ETH</span>
                <span className="text-muted-foreground">28%</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full" style={{ width: "28%", background: "hsl(var(--eth))" }} />
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>ALT</span>
                <span className="text-muted-foreground">24%</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full" style={{ width: "24%", background: "hsl(var(--ada))" }} />
              </div>
            </div>
            <Button variant="secondary" className="h-9 w-full">Rebalance Targets</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">API Keys</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-border/60 bg-background/80 p-3 text-sm">
            <p className="font-medium">Trading bot</p>
            <p className="text-xs text-muted-foreground">Last used 2 days ago</p>
          </div>
          <div className="rounded-lg border border-border/60 bg-background/80 p-3 text-sm">
            <p className="font-medium">Analytics workspace</p>
            <p className="text-xs text-muted-foreground">Last used 6 hours ago</p>
          </div>
          <Button variant="secondary" className="h-9 md:col-span-2">Generate New Key</Button>
        </CardContent>
      </Card>
    </section>
  )
}
