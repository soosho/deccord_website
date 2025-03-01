// components/home/FeatureSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PrivateSendSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">PrivateSend Technology</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Enhanced Privacy</h3>
              <p className="text-muted-foreground">
                PrivateSend ensures your financial privacy through an innovative coin-mixing 
                process that makes it impossible to trace the origin of funds.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Key Benefits</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Complete transaction anonymity</li>
                <li>Protection against blockchain analysis</li>
                <li>Optional privacy features</li>
              </ul>
            </div>
          </div>
          <Card className="border-primary/20 hover:border-primary transition-colors duration-300 shadow-lg hover:shadow-xl">
            <CardHeader>
              <CardTitle>How PrivateSend Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">1</div>
                <p className="text-muted-foreground">Funds are split into denominations</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">2</div>
                <p className="text-muted-foreground">Masternodes mix the coins with other users</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">3</div>
                <p className="text-muted-foreground">Mixed coins are returned to your wallet</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}