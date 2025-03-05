'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { siteConfig } from "@/config/site"
import { MarketTicker } from "@/types/market"

interface HomeStatsData {
  price: number
  volume: number
  hashrate: number
  supply: number
}

export function HomeStats() {
  const [data, setData] = useState<HomeStatsData>({
    price: 0,
    volume: 0,
    hashrate: 0,
    supply: 0
  })
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        cache: 'no-store' as RequestCache
      }

      // Fetch market data
      const marketData = await fetch('https://mecacex.com/api/v2/trade/public/markets/dcdusdt/tickers')
        .then(res => res.json()) as MarketTicker;

      // Fetch network data
      const [hashrateRes, supplyRes] = await Promise.all([
        fetch(`${siteConfig.apiEndpoint}${siteConfig.api.getHashrate}`, options),
        fetch(`${siteConfig.apiEndpoint}${siteConfig.api.getSupply}`, options)
      ]);

      const hashrateData = await hashrateRes.json();
      const supplyData = await supplyRes.json();

      setData({
        price: Number(marketData.ticker.last),
        volume: Number(marketData.ticker.volume),
        hashrate: Number(hashrateData.hashrate),
        supply: Number(supplyData.supply)
      })
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatHashrate = (hashrate: number) => {
    if (hashrate >= 1e12) return `${(hashrate / 1e12).toFixed(2)} TH/s`
    if (hashrate >= 1e9) return `${(hashrate / 1e9).toFixed(2)} GH/s`
    return `${hashrate.toFixed(2)} MH/s`
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Price</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">
                {loading ? '...' : `$${data.price.toFixed(8)}`}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Volume (24h)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">
                {loading ? '...' : `$${data.volume.toLocaleString()}`}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Network Hashrate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">
                {loading ? '...' : formatHashrate(data.hashrate)}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Circulating Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">
                {loading ? '...' : data.supply.toLocaleString()}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}