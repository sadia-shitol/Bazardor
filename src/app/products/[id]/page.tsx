import { notFound } from 'next/navigation'
import MarketPriceSection from '@/app/components/MarketPriceSection'
import type { BazarProduct } from '@/app/Type'
export const instant = false
type Props = {
  params: Promise<{ id: string }>
}

const API_URL = 'https://openapi.programming-hero.com/api/bazardor/products'

const unitLabels: Record<string, string> = {
  kg: 'কেজি',
  piece: 'পিস',
  dozen: 'ডজন',
  litre: 'লিটার',
  liter: 'লিটার',
}

const ProductDetailsPage = async ({ params }: Props) => {
  const { id } = await params

  const response = await fetch(API_URL, {
    next: { revalidate: 300 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }

  const data = await response.json()

  const products: BazarProduct[] = Array.isArray(data) ? data : data.products

  const product = products.find((item) => String(item.id) === id)

  if (!product) {
    notFound()
  }

  const isUp = product.change.dir === 'up'
  const unitLabel = unitLabels[product.unit] ?? product.unit

  const priceHistory = [
    { label: 'গতকালের দাম', price: product.yesterday },
    { label: 'গত সপ্তাহের দাম', price: product.lastWeek },
    { label: 'গত মাসের দাম', price: product.lastMonth },
  ]

  return (
    <main className='mx-auto border border-gray-200 bg-[#fbfdfb] mt-56 w-full max-w-5xl px-4 py-8 sm:px-6 lg:py-12'>
      <section className='overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm'>
        <div className='bg-[#f3f8f1] p-5 sm:p-8'>
          <div className='flex flex-col gap-8 sm:flex-row sm:items-center'>
            <div className='flex size-20 items-center justify-center rounded-2xl bg-white text-5xl shadow-sm'>
              {product.image}
            </div>

            <div className='w-[45%]'>
              <p className='mb-2 text-sm text-gray-600'>
                {product.categoryIcon} {product.categoryNameBn}
              </p>

              <h1 className='text-2xl w-full font-bold text-[#253629] sm:text-3xl'>
                {product.nameBn}
              </h1>
            </div>
            <div className='flex  flex-wrap items-end justify-between gap-4'>
              <div className='ml-96  '>
                <p className='text-sm text-base-content/60'>আজকের বাজারদর</p>

                <p className='mt-2 text-3xl font-bold text-[#253629] sm:text-4xl'>
                  {Number(product.today).toLocaleString('bn-BD')} টাকা
                </p>

                <p className='mt-2 text-sm text-gray-500'>প্রতি {unitLabel}</p>
              </div>

              <span
                className={`badge h-auto gap-1 border-0 px-3 py-2 text-sm font-semibold 
              ${
                isUp
                  ? 'ml-96 bg-red-100 border-red-200 border-[0.1px] text-red-600'
                  : ' ml-96 bg-green-100  border-green-200 border-[0.1px] text-green-800'
              }`}
              >
                {isUp ? '▲' : '▼'}
                {Number(product.change.pct).toLocaleString('bn-BD', {
                  maximumFractionDigits: 2,
                })}
                %
              </span>
            </div>
          </div>
        </div>

        <div className='p-5 sm:p-8'>
          <h2 className='text-3xl font-bold'>আগের দামের তুলনা</h2>

          <div className='mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3'>
            {priceHistory.map((item) => (
              <div
                key={item.label}
                className='rounded-xl border border-base-200 bg-[#fafcfa] p-4'
              >
                <p className='text-sm text-base-content/60'>{item.label}</p>

                <p className='mt-2 text-lg font-bold'>
                  {Number(item.price).toLocaleString('bn-BD')} টাকা
                </p>

                <p className='mt-1 text-xs text-base-content/50'>
                  প্রতি {unitLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MarketPriceSection id={id} />
    </main>
  )
}

export default ProductDetailsPage
