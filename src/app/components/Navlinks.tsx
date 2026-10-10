'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type Category = {
  id: string
  slug: string
  nameBn: string
  icon: string
}

const Navlinks = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          'https://api.abcz.workers.dev/api/bazardor/categories'
        )

        if (!res.ok) {
          throw new Error('Failed to fetch categories')
        }

        const data: Category[] = await res.json()
        setCategories(data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return (
    <nav
      aria-label='Product categories'
      className='w-[70%] lg:w-[80%] md:w-[90%] sm:w-full mt-4'
    >
      <div className='flex items-center justify-between gap-4 overflow-x-auto py-3'>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className='skeleton h-6 w-16 shrink-0' />
            ))
          : categories.map((category) => {
              const href = `/category/${category.slug}`
              const isActive = pathname === href

              return (
                <Link
                  key={category.id}
                  href={href}
                  className={`flex shrink-0 items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-200 sm:text-base ${
                    isActive
                      ? 'bg-green-100 text-green-800'
                      : 'text-base-content hover:bg-base-300'
                  }`}
                >
                  <span aria-hidden='true'>{category.icon}</span>
                  <span>{category.nameBn}</span>
                </Link>
              )
            })}
      </div>
    </nav>
  )
}

export default Navlinks
