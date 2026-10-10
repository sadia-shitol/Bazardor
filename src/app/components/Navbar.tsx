'use client'
import Image from 'next/image'
import React, { Suspense } from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Container from './Container'
import logo from '@/app/assets/logo.png'
import Navlinks from './Navlinks'
import PriceTicker from './PriceTicker'
const Navbar = () => {
  const [date, setDate] = useState('')
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString('bn-BD', {
      dateStyle: 'full',
    })
    setDate(currentDate)
  }, [])
  return (
    <div className='bg-base-200 shadow-sm fixed z-10'>
      <Container>
        <div className='navbar  '>
          <div className='mt-2  flex-2'>
            <div className=' flex '>
              <Link href='/' className='btn btn-ghost text-2xl'>
                <Image
                  src={logo}
                  alt='Bazardor Logo'
                  className='hidden md:block'
                />
                <span className='text-2xl font-bold '>বাজার দর</span>
              </Link>
            </div>
            <div className='text-large p-2 ml-4'>{date}</div>
          </div>

          <div className='flex gap-2 navbar-end'>
            <Link href='' className='btn shadow-sm'>
              সাইন ইন
            </Link>
            <Link
              href=''
              className='btn bg-green-800 shadow-sm hover:bg-green-600 text-white'
            >
              সাইন আপ
            </Link>
          </div>
        </div>

        <Suspense fallback={<div className='min-h-8' />}>
          <Navlinks />
        </Suspense>
      </Container>
      <PriceTicker />
    </div>
  )
}

export default Navbar
