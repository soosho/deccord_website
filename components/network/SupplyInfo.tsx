'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { siteConfig } from "@/config/site"

export function SupplyInfo() {
  const [circulatingSupply, setCirculatingSupply] = useState<number>(500000)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSupply = async () => {
      try {
        const response = await fetch(`${siteConfig.apiEndpoint}${siteConfig.api.getSupply}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
          mode: 'cors',
          cache: 'no-store'
        })

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const supply = await response.json()
        const supplyNumber = typeof supply === 'string' ? parseFloat(supply) : Number(supply)
        
        if (isNaN(supplyNumber)) {
          throw new Error('Invalid supply value received')
        }

        setCirculatingSupply(supplyNumber)
        setError(null)
      } catch (error) {
        console.warn('Error fetching supply:', error)
        // Keep using the initial value (500000) in case of error
      } finally {
        setLoading(false)
      }
    }

    fetchSupply()
  }, [])

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2
    }).format(num)
  }

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
              <p className="text-3xl font-bold text-primary">
                {loading ? (
                  '...'
                ) : error ? (
                  <span className="text-red-500 text-base">Error loading data</span>
                ) : (
                  `${formatNumber(circulatingSupply)} DCD`
                )}
              </p>
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
                <span className="font-semibold">3.825 DCD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Masternode Reward:</span>
                <span className="font-semibold">0.675 DCD</span>
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