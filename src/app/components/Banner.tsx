'use client'
import banner from '@/app/assets/bazar-hero.png'
import React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Banner = () => {
  const [date, setDate] = useState('')
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString('bn-BD', {
      dateStyle: 'full',
    })
    setDate(currentDate)
  }, [])
  return (
    <section className='py-4 mt-60 sm:py-6'>
      <div className=' flex flex-col-reverse items-center justify-between gap-4 rounded-3xl border border-base-300 bg-base-200 px-4 py-5 shadow-sm sm:px-6 md:min-h-62.5 md:flex-row md:gap-8 md:px-8 lg:px-10'>
        <div className='w-full flex-1 text-center md:text-left ml-5'>
          <span className='inline-block rounded-full bg-green-100 px-3 py-1 text-large mb-3 font-medium text-green-700'>
            {date}
          </span>
          <h1 className='  text-2xl font-extrabold leading-tight text-base-content sm:text-2xl lg:text-4xl '>
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className='mt-3 text-sm leading-6 text-base-content/70 sm:text-base'>
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            <br />
            বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক
            জায়গায়।
          </p>
          <Link
            href='/'
            className='btn btn-primary bg-green-700 mt-5 inline-flex items-center justify-center rounded-md border border-green-700 px-5 py-2 text-sm font-medium text-white transition hover:bg-green-700 hover:text-white'
          >
            সব পণ্য দেখুন
          </Link>
        </div>
        {/* Image */}
        <div className='mr-4 flex w-full flex-1 flex:col-reverse items-center justify-center md:justify-end'>
          <Image
            alt='Fitness Banner'
            src={banner}
            className='max-w-sm  h-100 w-100 ml-3.5'
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
