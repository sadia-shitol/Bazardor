'use client'

import React from 'react'
import Link from 'next/link'

const SignInPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className='mx-auto mt-60 pb-8 w-full max-w-117'>
      <div className='mb-7 text-center'>
        <h1 className='text-2xl font-bold tracking-tight text-[#202b24] sm:text-3xl'>
          সাইন ইন
        </h1>

        <p className='mt-2 text-sm leading-6 text-[#69736c] sm:text-base'>
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      {/* Sign In Form */}
      <div className='rounded-[20px] border border-[#dce6dd] bg-[#fbfdfb] px-5 py-7 shadow-sm sm:px-7 sm:py-8'>
        <form onSubmit={handleSubmit} className='space-y-5'>
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
              className='h-11 w-full rounded-[10px] border border-[#dce5dd] bg-transparent px-3.5 text-sm text-[#253129] outline-none transition placeholder:text-[#536057] focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/10'
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
              autoComplete='current-password'
              minLength={8}
              required
              className='h-11 w-full rounded-[10px] border border-[#dce5dd] bg-transparent px-3.5 text-sm text-[#253129] outline-none transition placeholder:text-[#536057] focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/10'
            />
          </div>

          {/* Submit */}
          <button
            type='submit'
            className='h-11 w-full rounded-[9px] bg-[#07883e] text-sm font-semibold text-white shadow-[0_3px_4px_rgba(0,100,40,0.3)] transition hover:bg-[#067534] active:scale-[0.99]'
          >
            সাইন ইন
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
          {/* Google */}
          <button
            type='button'
            className='flex h-11 items-center justify-center gap-2 rounded-[10px] border border-[#dce5dd] px-2 text-sm font-semibold text-[#28332b] transition hover:bg-[#f0f5f0]'
          >
            <svg
              viewBox='0 0 48 48'
              className='size-[17px] shrink-0'
              aria-hidden='true'
            >
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
            <span>Google দিয়ে চালিয়ে যান</span>
          </button>

          {/* GitHub */}
          <button
            type='button'
            className='flex h-11 items-center justify-center gap-2 rounded-[10px] border border-[#dce5dd] px-2 text-sm font-semibold text-[#28332b] transition hover:bg-[#f0f5f0]'
          >
            <svg
              viewBox='0 0 24 24'
              className='size-[17px] shrink-0'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3.01 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z' />
            </svg>
            <span>GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <p className='mt-5 text-center text-sm text-[#38423b]'>
          অ্যাকাউন্ট নেই?{' '}
          <Link
            href='/sign-up'
            className='font-medium text-[#07883e] hover:underline'
          >
            সাইন আপ করুন
          </Link>
        </p>
      </div>

      {/* Back to Home */}
    </div>
  )
}

export default SignInPage
