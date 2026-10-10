'use client'

import { useEffect, useState } from 'react'
import MarqueeText from 'react-marquee-text'
import 'react-marquee-text/dist/styles.css'

type Product = {
  id: string
  slug: string
  nameBn: string
  today: string
  unit: string
  image: string
  category?: {
    icon?: string
    nameBn?: string
  }
  categoryIcon?: string
  categoryNameBn?: string
  change?: {
    dir?: string
    pct?: string
  }
  changeDir?: string
  changePct?: string
}

const PriceTicker = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const unitBn: Record<string, string> = {
    kg: 'কেজি',
    piece: 'পিস',
    dozen: 'ডজন',
    litre: 'লিটার',
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          'https://api.api-store.workers.dev/api/bazardor/products'
        )

        if (!res.ok) {
          throw new Error('Failed to fetch products')
        }

        const data: Product[] = await res.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className='bg-green-950 px-4 py-3 text-sm text-black'>
        বাজারদরের তথ্য লোড হচ্ছে...
      </div>
    )
  }

  if (products.length === 0) return null

  return (
    <div className='overflow-hidden  py-3 text-sm'>
      <MarqueeText duration={100} pauseOnHover direction='right'>
        {products.map((product) => {
          const pct = Number(product.change?.pct) || 0

          const isUp = pct > 0
          const isDown = pct < 0

          const color = isUp
            ? 'text-red-700'
            : isDown
            ? 'text-green-900'
            : 'text-gray-300'

          const arrow = isUp ? '▲' : isDown ? '▼' : '—'
          return (
            <span
              key={product.id}
              className='mx-6 inline-flex items-center gap-2 whitespace-nowrap text-green'
            >
              <span>{product.image}</span>
              <span className='font-medium text-black'>{product.nameBn}</span>
              <span className='font-medium text-black'>
                {Number(product.today).toLocaleString('bn-BD')} টাকা/ প্রতি{' '}
                {unitBn[product.unit] ?? product.unit}
              </span>
              <span className={`font-semibold ${color}`}>
                {arrow} {Math.abs(pct).toLocaleString('bn-BD')}%
              </span>

              <span className='text-green-900'>|</span>
            </span>
          )
        })}
      </MarqueeText>
    </div>
  )
}

export default PriceTicker
