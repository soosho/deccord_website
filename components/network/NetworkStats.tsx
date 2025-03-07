'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { siteConfig } from "@/config/site"

interface NetworkData {
  blockHeight: number
  hashrate: number
  difficulty: number
  circulatingSupply: number
}

export function NetworkStats() {
  const [data, setData] = useState<NetworkData>({
    blockHeight: 1,
    hashrate: 32.88209100316724,
    difficulty: 0.0002441371325370145,
    circulatingSupply: 500000
  })
  const [loading, setLoading] = useState(true)

  const fetchNetworkData = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors' as RequestMode,
        cache: 'no-store' as RequestCache
      }

      // Using the provided fallback values in case of failure
      let blockHeight = 1;
      let hashrate = 32.88209100316724;
      let difficulty = 0.0002441371325370145;
      let supply = 500000;

      try {
        const blockData = await fetch(`${siteConfig.apiEndpoint}${siteConfig.api.getBlockCount}`, options)
          .then(res => res.json());
        blockHeight = Number(blockData.height);
      } catch (e) {
        console.warn('Failed to fetch block height:', e);
      }

      try {
        const hashrateData = await fetch(`${siteConfig.apiEndpoint}${siteConfig.api.getHashrate}`, options)
          .then(res => res.json());
        hashrate = parseFloat(hashrateData.hashrate);
      } catch (e) {
        console.warn('Failed to fetch hashrate:', e);
      }

      try {
        difficulty = await fetch(`${siteConfig.apiEndpoint}${siteConfig.api.getDifficulty}`, options)
          .then(res => res.json())
          .then(data => parseFloat(data));
      } catch (e) {
        console.warn('Failed to fetch difficulty:', e);
      }

      try {
        const supplyData = await fetch(`${siteConfig.apiEndpoint}${siteConfig.api.getSupply}`, options)
          .then(res => res.json());
        supply = Number(supplyData.supply); // Updated to use supply from response object
      } catch (e) {
        console.warn('Failed to fetch supply:', e);
      }

      setData({
        blockHeight,
        hashrate,
        difficulty,
        circulatingSupply: supply
      })
    } catch (error) {
      console.error('Error in fetchNetworkData:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNetworkData()
    // Refresh every 30 seconds
    const interval = setInterval(fetchNetworkData, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatHashrate = (hashrate: number) => {
    if (hashrate >= 1e12) return `${(hashrate / 1e12).toFixed(2)} TH/s`
    if (hashrate >= 1e9) return `${(hashrate / 1e9).toFixed(2)} GH/s`
    if (hashrate >= 1e6) return `${(hashrate / 1e6).toFixed(2)} MH/s`
    if (hashrate >= 1e3) return `${(hashrate / 1e3).toFixed(2)} KH/s`
    return `${hashrate.toFixed(2)} H/s`
  }

  const formatDifficulty = (diff: number) => {
    if (diff >= 1e12) return `${(diff / 1e12).toFixed(2)}T`
    if (diff >= 1e9) return `${(diff / 1e9).toFixed(2)}B`
    if (diff >= 1e6) return `${(diff / 1e6).toFixed(2)}M`
    if (diff >= 1e3) return `${(diff / 1e3).toFixed(2)}K`
    return diff.toFixed(8)
  }

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
              <p className="text-3xl font-bold text-primary">
                {loading ? '...' : data.blockHeight.toLocaleString()}
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
              <CardTitle>Active Masternodes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">-</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Difficulty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">
                {loading ? '...' : formatDifficulty(data.difficulty)}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}