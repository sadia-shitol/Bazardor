'use client'

import React from 'react'
import Link from 'next/link'
const SignUpPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  return (
    <div className='pt-20 mx-auto mt-40  w-full pb-5 max-w-[472px]'>
      <div className=' text-center'>
        <h1 className='text-2xl font-bold tracking-tight text-[#202b24] sm:text-3xl'>
          অ্যাকাউন্ট তৈরি করুন
        </h1>

        <p className='mt-2 mb-2 text-sm text-[#69736c] sm:text-base'>
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      {/* Registration Form */}
      <div className='rounded-[20px] border border-[#dce6dd] bg-[#fbfdfb] px-5 py-7 shadow-sm sm:px-7 sm:py-8'>
        <form onSubmit={handleSubmit} className='space-y-5'>
          {/* Name */}
          <div>
            <label
              htmlFor='name'
              className='mb-2 block text-sm font-medium text-[#26332a]'
            >
              নাম
            </label>

            <input
              id='name'
              name='name'
              type='text'
              placeholder='যেমন: রহিম উদ্দিন'
              autoComplete='name'
              required
              className='h-11 w-full rounded-[10px] border border-[#dce5dd] bg-transparent px-3.5 text-sm text-[#253129] outline-none transition placeholder:text-[#536057] focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/10'
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor='email'
              className='mb-2 block text-sm font-medium text-[#26332a]'
            >
              ইমেইল
            </label>

            <input
              id='email'
              name='email'
              type='email'
              placeholder='you@example.com'
              autoComplete='email'
              required
              className='h-11 w-full rounded-[10px] border border-[#dce5dd] bg-transparent px-3.5 text-sm text-[#253129] outline-none transition placeholder:text-[#253129] focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/10'
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor='password'
              className='mb-2 block text-sm font-medium text-[#26332a]'
            >
              পাসওয়ার্ড
            </label>

            <input
              id='password'
              name='password'
              type='password'
              placeholder='কমপক্ষে ৮ অক্ষর'
              autoComplete='new-password'
              minLength={8}
              required
              className='h-11 w-full rounded-[10px] border border-[#dce5dd] bg-transparent px-3.5 text-sm text-[#253129] outline-none transition placeholder:text-[#536057] focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/10'
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor='confirmPassword'
              className='mb-2 block text-sm font-medium text-[#26332a]'
            >
              পাসওয়ার্ড নিশ্চিত করুন
            </label>

            <input
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              placeholder='আবার লিখুন'
              autoComplete='new-password'
              minLength={8}
              required
              className='h-11 w-full rounded-[10px] border border-[#dce5dd] bg-transparent px-3.5 text-sm text-[#253129] outline-none transition placeholder:text-[#536057] focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/10'
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='h-11 w-full rounded-[9px] bg-[#07883e] text-sm font-semibold text-white shadow-[0_3px_4px_rgba(0,100,40,0.3)] transition hover:bg-[#067534] active:scale-[0.99]'
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        {/* Divider */}
        <div className='my-5 flex items-center gap-4'>
          <div className='h-px flex-1 bg-[#dce5dd]' />

          <span className='text-sm text-[#303a33]'>অথবা</span>

          <div className='h-px flex-1 bg-[#dce5dd]' />
        </div>

        {/* Social Sign In */}
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
          <button
            type='button'
            className='flex h-11 items-center justify-center gap-2 rounded-[10px] border border-[#dce5dd] text-sm font-semibold text-[#28332b] transition hover:bg-[#f0f5f0]'
          >
            {/* Google icon */}
            <svg viewBox='0 0 48 48' className='size-[17px]' aria-hidden='true'>
              <path
                fill='#4285F4'
                d='M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.7c3.9-3.6 6-8.8 6-15Z'
              />
              <path
                fill='#34A853'
                d='M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.7-5.1c-1.8 1.2-4 1.9-6.8 1.9-5.2 0-9.7-3.5-11.3-8.2H5.8v5.2A20 20 0 0 0 24 44Z'
              />
              <path
                fill='#FBBC05'
                d='M12.7 27.8a12 12 0 0 1 0-7.6V15H5.8a20 20 0 0 0 0 18Z'
              />
              <path
                fill='#EA4335'
                d='M24 12c3 0 5.7 1 7.8 3l5.8-5.8A19.4 19.4 0 0 0 24 4 20 20 0 0 0 5.8 15l6.9 5.2C14.3 15.5 18.8 12 24 12Z'
              />
            </svg>
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            type='button'
            className='flex h-11 items-center justify-center gap-2 rounded-[10px] border border-[#dce5dd] text-sm font-semibold text-[#28332b] transition hover:bg-[#f0f5f0]'
          >
            {/* <Github size={17} aria-hidden="true" /> */}
            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        {/* Login Link */}
        <p className='mt-5 text-center text-sm text-[#38423b]'>
          অ্যাকাউন্ট আছে?{' '}
          <Link
            href='/sign-in'
            className='font-medium text-[#07883e] hover:underline'
          >
            সাইন ইন করুন
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
