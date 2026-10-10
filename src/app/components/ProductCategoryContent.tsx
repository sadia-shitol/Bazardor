'use client'
import { useMemo, useState } from 'react'
import BazarPriceCard from './BazarPriceCard'
import type { BazarProduct } from '@/app/Type'

interface Props {
  products: BazarProduct[]
  categoryNameBn: string
}

type SortOption = 'default' | 'low' | 'high'

const ProductCategoryContent = ({ products, categoryNameBn }: Props) => {
  const [sortBy, setSortBy] = useState<SortOption>('default')

  const sortedProducts = useMemo(() => {
    const result = [...products]

    if (sortBy === 'low') {
      result.sort((a, b) => Number(a.today) - Number(b.today))
    }

    if (sortBy === 'high') {
      result.sort((a, b) => Number(b.today) - Number(a.today))
    }

    return result
  }, [products, sortBy])

  const categoryIcon = products[0]?.categoryIcon ?? '🛒'

  return (
    <div className='space-y-5'>
      {/* Category heading */}
      <div className='flex items-center gap-3 rounded-2xl border border-[#dfe7df] bg-[#fafcf9] p-4'>
        <span className='text-3xl' aria-hidden='true'>
          {categoryIcon}
        </span>

        <div>
          <h1 className='text-xl font-bold text-[#202820]'>{categoryNameBn}</h1>

          <p className='text-sm text-gray-500'>
            ৮টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      {/* Sorting bar */}
      <div className='flex justify-end rounded-2xl border border-[#dfe7df] bg-[#fafcf9] p-3'>
        <div className='flex items-center gap-3'>
          <label htmlFor='category-sort' className='text-sm text-gray-600'>
            সাজান
          </label>

          <select
            id='category-sort'
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
            className='select select-bordered select-sm rounded-lg'
          >
            <option value='default'>ডিফল্ট</option>
            <option value='low'>দাম: কম থেকে বেশি</option>
            <option value='high'>দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      {/* Product count */}
      <p className='text-sm text-gray-500'>
        মোট {products.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে
      </p>

      {/* Product grid */}
      {sortedProducts.length > 0 ? (
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
          {sortedProducts.map((product) => (
            <BazarPriceCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className='rounded-xl border border-[#dfe7df] bg-[#fafcf9] py-12 text-center text-gray-500'>
          এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
        </div>
      )}
    </div>
  )
}

export default ProductCategoryContent
