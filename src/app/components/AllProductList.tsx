'use client'

import { useMemo, useState } from 'react'
import type { BazarProduct } from '@/app/Type'
import BazarPriceCard from './BazarPriceCard'

type Props = {
  products: BazarProduct[]
}

export default function AllProductsList({ products }: Props) {
  const [sortOrder, setSortOrder] = useState('default')

  const sortedProducts = useMemo(() => {
    const result = [...products]

    if (sortOrder === 'low-to-high') {
      result.sort((a, b) => a.today - b.today)
    } else if (sortOrder === 'high-to-low') {
      result.sort((a, b) => b.today - a.today)
    }

    return result
  }, [products, sortOrder])

  return (
    <section className=' p-4 sm:p-5'>
      {/* Heading and sorting */}
      <div className='mb-5 flex flex-wrap items-center justify-between gap-3'>
        <div>
          <h2 className='text-3xl font-bold text-slate-800'>সব পণ্য</h2>
          <p className='mt-1 text-2xl text-slate-500'>
            বাজারের সব পণ্যের আজকের দাম
          </p>
        </div>
        <div className='flex'>
          <span className='text-slate-500 ml-18.75 p-2'>সাজান</span>
          <select
            aria-label='Sort products by price'
            className='select select-bordered select-sm w-full max-w-48 bg-white sm:w-auto'
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value='default'>ডিফল্ট ক্রম</option>
            <option value='low-to-high'>দাম: কম থেকে বেশি</option>
            <option value='high-to-low'>দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      {/* Product count */}
      <p className='mb-3 text-xl text-slate-500'>
        মোট {sortedProducts.length.toLocaleString('bn-BD')} টি পণ্য
      </p>

      {/* Cards */}
      {sortedProducts.length > 0 ? (
        <div className='grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 lg:grid-cols-3'>
          {sortedProducts.map((product) => (
            <BazarPriceCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className='py-8 text-center text-sm text-slate-500'>
          কোনো পণ্য পাওয়া যায়নি।
        </p>
      )}
    </section>
  )
}
