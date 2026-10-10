import React from 'react'
import type { BazarProduct } from '@/app/Type'
import BazarPriceCard from '@/app/components/BazarPriceCard'

async function getProducts(): Promise<BazarProduct[]> {
  const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products')

  if (!res.ok) {
    throw new Error('Failed to fetch product prices')
  }

  const data = await res.json()

  return Array.isArray(data) ? data : data.products
}

const RateBasedProductSection = async () => {
  let products: BazarProduct[]

  try {
    products = await getProducts()
  } catch {
    return (
      <section className='rounded-xl bg-base-200 p-4'>
        বাজারের দামের তথ্য লোড করা যায়নি।
      </section>
    )
  }

  const increasedPrice = products.filter(
    (product) => product.change.dir === 'up'
  )

  const decreasedPrice = products.filter(
    (product) => product.change.dir === 'down'
  )

  return (
    <div className='space-y-6'>
      <section className=' justify-center p-4 sm:p-5'>
        <h2 className='mb-4 flex items-center gap-2 font-bold text-slate-800 text-3xl'>
          <span className='text-red-500'>▲</span>
          আজ দাম বেড়েছে
        </h2>

        {increasedPrice.length > 0 ? (
          <div className='grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 lg:grid-cols-3'>
            {increasedPrice.map((product) => (
              <BazarPriceCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className='text-sm text-base-content/60'>
            আজ কোনো পণ্যের দাম বাড়েনি।
          </p>
        )}
      </section>

      {/* Decreased prices */}
      <section className=' justify-center p-4 sm:p-5'>
        <h2 className='mb-4 flex items-center gap-2 text-3xl font-bold text-slate-800'>
          <span className='text-green-600'>▼</span>
          আজ দাম কমেছে
        </h2>

        {decreasedPrice.length > 0 ? (
          <div className='grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 lg:grid-cols-3'>
            {decreasedPrice.map((product) => (
              <BazarPriceCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className='text-sm text-base-content/60'>
            আজ কোনো পণ্যের দাম কমেনি।
          </p>
        )}
      </section>
    </div>
  )
}

export default RateBasedProductSection
