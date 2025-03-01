import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function SupplyInfo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Supply Distribution</h2>
          <p className="text-xl text-muted-foreground">
            Total supply and distribution metrics
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Max Supply</CardTitle>
              <CardDescription>Total coins that will ever exist</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">10.5M DCD</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premine</CardTitle>
              <CardDescription>Initial development funding</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">500K DCD</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Circulating Supply</CardTitle>
              <CardDescription>Currently available coins</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">0 DCD</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Block Rewards</CardTitle>
              <CardDescription>With Masternodes Online</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Block Reward:</span>
                <span className="font-semibold">3.375 DCD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Masternode Reward:</span>
                <span className="font-semibold">1.125 DCD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Superblock Reward:</span>
                <span className="font-semibold">0.5 DCD</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Block Rewards</CardTitle>
              <CardDescription>Without Masternodes Online</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Block Reward:</span>
                <span className="font-semibold">4.5 DCD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Superblock Reward:</span>
                <span className="font-semibold">0.5 DCD</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}