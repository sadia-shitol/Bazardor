'use client'

import React, { Suspense } from 'react'
import CategoryContent from '@/app/components/CategoryContent'

const CategoryPage = () => {
  return (
    <Suspense
      fallback={
        <div className='mx-auto max-w-6xl px-4 py-8'>
          <p>ক্যাটাগরি লোড হচ্ছে...</p>
        </div>
      }
    >
      <CategoryContent />
    </Suspense>
  )
}

export default CategoryPage
