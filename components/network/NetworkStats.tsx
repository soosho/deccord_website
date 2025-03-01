import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function NetworkStats() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Network Statistics</h2>
          <p className="text-xl text-muted-foreground">
            Real-time metrics of the Deccord network
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Block Height</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">0</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Network Hashrate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">0 H/s</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Masternodes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">0</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Difficulty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">0</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}