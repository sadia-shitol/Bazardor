'use client'
import { useEffect, useState } from 'react'
const API_URL = 'https://api.abcz.workers.dev/api/bazardor/products'
type Market = {
  market: string
  division: string
  min: number
  max: number
}

type Product = {
  id: number
  slug: string
  nameBn: string
  categoryNameBn: string
  unit: string
  today: number
  markets: Market[]
}

type MarketPriceSectionProps = {
  id: string
}

const formatNumber = (value: number) =>
  new Intl.NumberFormat('bn-BD', {
    maximumFractionDigits: 2,
  }).format(value)

const formatPrice = (value: number) => `${formatNumber(value)} টাকা`

const MarketPriceSection: React.FC<MarketPriceSectionProps> = ({ id }) => {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error('দামের তথ্য লোড করা যায়নি।')
        }

        const result = await response.json()

        const products: Product[] = Array.isArray(result)
          ? result
          : result.products ?? result.data ?? []

        const selectedProduct = products.find(
          (item) => String(item.id) === id || item.slug === id
        )

        if (!selectedProduct) {
          throw new Error('পণ্যটি খুঁজে পাওয়া যায়নি।')
        }

        setProduct(selectedProduct)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'একটি সমস্যা হয়েছে।')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <div className='rounded-2xl border border-black bg-white p-6'>
        <p className='text-sm text-gray-500'>দামের তথ্য লোড হচ্ছে...</p>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className='rounded-2xl border border-red-100 bg-white p-6'>
        <p className='text-sm text-red-600'>
          {error || 'পণ্যের তথ্য পাওয়া যায়নি।'}
        </p>
      </div>
    )
  }

  const markets = product.markets ?? []

  const lowestPrice = markets.length
    ? Math.min(...markets.map((market) => market.min))
    : 0

  const highestPrice = markets.length
    ? Math.max(...markets.map((market) => market.max))
    : 0

  const averagePrice = markets.length
    ? markets.reduce((sum, market) => sum + (market.min + market.max) / 2, 0) /
      markets.length
    : 0

  return (
    <div className='mt-4 rounded-2xl  p-4 sm:p-6'>
      <h2 className='mb-4 text-2xl font-bold text-gray-800'>
        {product.nameBn} এর দামের সারসংক্ষেপ
      </h2>

      <div className='mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3'>
        <div className='rounded-xl border border-gray-200 p-4'>
          <p className='text-sm text-gray-500'>সর্বনিম্ন দাম</p>
          <p className='mt-1 text-xl font-bold text-green-700'>
            {formatPrice(lowestPrice)}
          </p>
          <p className='mt-1 text-xs text-gray-500'>সবচেয়ে কম দামের বাজার</p>
        </div>

        <div className='rounded-xl border border-gray-200 p-4'>
          <p className='text-sm text-gray-500'>সর্বাধিক দাম</p>
          <p className='mt-1 text-xl font-bold text-red-700'>
            {formatPrice(highestPrice)}
          </p>
          <p className='mt-1 text-xs text-gray-500'>সবচেয়ে বেশি দামের বাজার</p>
        </div>

        <div className='rounded-xl border border-gray-200 p-4'>
          <p className='text-sm text-gray-500'>গড় দাম</p>
          <p className='mt-1 text-xl font-bold text-green-700'>
            {formatPrice(averagePrice)}
          </p>
          <p className='mt-1 text-xs text-gray-500'>বাজারের আনুমানিক গড়</p>
        </div>
      </div>

      <h3 className='mb-4 text-2xl font-bold text-gray-800'>
        বাজারভিত্তিক আজকের দাম
      </h3>

      <div className='overflow-x-auto rounded-xl border text-black border-gray-200 bg-gray-100  '>
        <table className='w-full min-w-[650px] border-collapse text-sm'>
          <thead className='bg-[#f1f5f1] text-gray-500'>
            <tr>
              <th className=' text-black px-4 py-3 text-left font-semibold border-r border-gray-300'>
                বাজার
              </th>
              <th className='px-4 text-black  py-3 text-left font-semibold border-r border-gray-300'>
                বিভাগ
              </th>
              <th className='px-4 py-3 text-black text-right font-semibold border-r border-gray-300'>
                সর্বনিম্ন
              </th>
              <th className='px-4 py-3 text-right  text-black font-semibold border-r border-gray-300'>
                সর্বোচ্চ
              </th>
              <th className='px-4 py-3 text-right  text-black font-semibold border-r border-gray-300'>
                গড়
              </th>
            </tr>
          </thead>

          <tbody>
            {markets.map((market, index) => (
              <tr
                key={`${market.market}-${index}`}
                className='border-t border-gray-200 transition-colors duration-200 hover:bg-emerald-50'
              >
                <td className='border-r border-gray-300 text-gray-800 whitespace-nowrap px-4 py-3 text-left font-medium '>
                  {market.market}
                </td>

                <td className=' border-r border-gray-300 whitespace-nowrap px-4 py-3 text-left text-gray-800'>
                  {market.division}
                </td>

                <td className='border-r border-gray-300 whitespace-nowrap px-4 py-3 text-right text-gray-800'>
                  {formatPrice(market.min)}
                </td>

                <td className=' border-r border-gray-300 whitespace-nowrap px-4 py-3 text-right text-gray-800'>
                  {formatPrice(market.max)}
                </td>

                <td className='whitespace-nowrap px-4 py-3 text-right font-semibold text-gray-800'>
                  {formatPrice((market.min + market.max) / 2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MarketPriceSection
