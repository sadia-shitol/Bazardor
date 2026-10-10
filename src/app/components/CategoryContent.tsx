import BazarPriceCard from './BazarPriceCard'
import { BazarProduct } from '../Type'
import React, { Suspense, useEffect, useMemo, useState } from 'react'
type Category = {
  id: string
  slug: string
  nameBn: string
  icon: string
}

type SortOption = 'default' | 'price-asc' | 'price-desc'

const PRODUCTS_API =
  'https://openapi.programming-hero.com/api/bazardor/products'
const CATEGORIES_API =
  'https://openapi.programming-hero.com/api/bazardor/categories'

import { useParams } from 'next/navigation'
const CategoryContent = () => {
  const params = useParams<{ category: string }>()
  const slug = params.category

  const [products, setProducts] = useState<BazarProduct[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [sortBy, setSortBy] = useState<SortOption>('default')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError('')

        const [productsResponse, categoriesResponse] = await Promise.all([
          fetch(PRODUCTS_API),
          fetch(CATEGORIES_API),
        ])

        if (!productsResponse.ok || !categoriesResponse.ok) {
          throw new Error('তথ্য লোড করা যায়নি।')
        }

        const [productsData, categoriesData] = await Promise.all([
          productsResponse.json(),
          categoriesResponse.json(),
        ])

        const productList = Array.isArray(productsData)
          ? productsData
          : productsData.products ?? productsData.data ?? []

        const categoryList = Array.isArray(categoriesData)
          ? categoriesData
          : categoriesData.categories ?? categoriesData.data ?? []

        if (!Array.isArray(productList) || !Array.isArray(categoryList)) {
          throw new Error('সার্ভার থেকে সঠিক তথ্য পাওয়া যায়নি।')
        }

        setProducts(productList)
        setCategories(categoryList)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'একটি সমস্যা হয়েছে।')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const category = categories.find((item) => item.slug === slug)

  const categoryProducts = useMemo(() => {
    const filtered = products.filter((product) => product.category === slug)

    if (sortBy === 'price-asc') {
      return [...filtered].sort((a, b) => a.today - b.today)
    }

    if (sortBy === 'price-desc') {
      return [...filtered].sort((a, b) => b.today - a.today)
    }

    return filtered
  }, [products, slug, sortBy])

  if (loading) {
    return (
      <main className='mx-auto max-w-6xl px-4 py-8'>
        <p className='text-base-content/60'>পণ্যের তথ্য লোড হচ্ছে...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className='mx-auto max-w-6xl px-4 py-8'>
        <p className='rounded-xl bg-red-50 p-4 text-red-600'>{error}</p>
      </main>
    )
  }

  if (!category) {
    return (
      <main className='mx-auto max-w-6xl px-4 py-8'>
        <p className='text-base-content/60'>ক্যাটাগরি পাওয়া যায়নি।</p>
      </main>
    )
  }

  return (
    <main className='mx-auto min-h-screen mt-56 max-w-6xl px-4 py-6 sm:py-8 bg-gray-50'>
      <section className='mb-20 flex items-center gap-4 rounded-2xl border border-base-200 bg-green-100 p-5 sm:p-6'>
        <div className='flex size-14 shrink-0 items-center justify-center rounded-xl bg-base-200/60 text-3xl'>
          {category.icon}
        </div>

        <div>
          <h1 className='text-2xl font-bold text-base-content'>
            {category.nameBn}
          </h1>

          <p className='mt-1 text-sm text-base-content/60'>
            {categoryProducts.length.toLocaleString('bn-BD')} টি পণ্যের আজকের
            দাম ও পরিবর্তন
          </p>
        </div>
        <div className='ml-124 flex gap-2.5'>
          <label htmlFor='price-sort' className=' text-sm text-base-content/60'>
            সাজান
          </label>
          <select
            id='price-sort'
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
            className='select select-bordered select-sm max-w-full bg-base-100'
          >
            <option value='default'>ডিফল্ট</option>
            <option value='price-asc'>দাম: কম থেকে বেশি</option>
            <option value='price-desc'>দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </section>

      <p className='mb-4 text-2xl text-base-content/60'>
        মোট {categoryProducts.length.toLocaleString('bn-BD')} টি পণ্য দেখানো
        হচ্ছে
      </p>
      {categoryProducts.length > 0 ? (
        <section className='flex flex-wrap justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {categoryProducts.map((product) => (
            <BazarPriceCard key={product.id} product={product} />
          ))}
        </section>
      ) : (
        <div className='rounded-2xl border border-base-200 bg-base-100 p-8 text-center'>
          <p className='text-base-content/60'>
            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
          </p>
        </div>
      )}
    </main>
  )
}
export default CategoryContent
