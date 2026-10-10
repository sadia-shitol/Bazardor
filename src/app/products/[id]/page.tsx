import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { BazarProduct } from '@/app/Type'

type Props = {
  params: Promise<{ id: string }>
}

const API_URL = 'https://api.abcz.workers.dev/api/bazardor/products'

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
    <main className='mx-auto mt-42 w-full max-w-5xl px-4 py-8 sm:px-6 lg:py-12'>
      <Link
        href='/'
        className='mb-6 inline-block text-sm font-medium text-green-800 hover:underline'
      >
        ← সব পণ্যে ফিরে যান
      </Link>

      <section className='overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm'>
        {/* Product information */}
        <div className='bg-[#f3f8f1] p-5 sm:p-8'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
            <div className='flex size-20 items-center justify-center rounded-2xl bg-white text-5xl shadow-sm'>
              {product.image}
            </div>

            <div>
              <p className='mb-2 text-sm text-gray-600'>
                {product.categoryIcon} {product.categoryNameBn}
              </p>

              <h1 className='text-2xl font-bold text-[#253629] sm:text-3xl'>
                {product.nameBn}
              </h1>

              <p className='mt-2 text-sm text-gray-600'>প্রতি {unitLabel}</p>
            </div>
          </div>
        </div>

        {/* Today's price */}
        <div className='p-5 sm:p-8'>
          <div className='flex flex-wrap items-end justify-between gap-4'>
            <div>
              <p className='text-sm text-base-content/60'>আজকের বাজারদর</p>

              <p className='mt-2 text-3xl font-bold text-[#253629] sm:text-4xl'>
                {Number(product.today).toLocaleString('bn-BD')} টাকা
              </p>

              <p className='mt-2 text-sm text-gray-500'>প্রতি {unitLabel}</p>
            </div>

            <span
              className={`badge h-auto gap-1 border-0 px-3 py-2 text-sm font-semibold 
              ${
                isUp ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-800'
              }`}
            >
              {isUp ? '▲' : '▼'}{' '}
              {Number(product.change.pct).toLocaleString('bn-BD', {
                maximumFractionDigits: 2,
              })}
              %
            </span>
          </div>

          <div className='divider my-6' />

          {/* Previous prices */}
          <h2 className='text-lg font-bold'>আগের দামের তুলনা</h2>

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
    </main>
  )
}

export default ProductDetailsPage
