'use client'
import Image from 'next/image'
import user from '@/app/assets/doreamon.png'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Container from './Container'
import logo from '@/app/assets/logo.png'
const Navbar = () => {
  const [date, setDate] = useState('')
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString('bn-BD', {
      dateStyle: 'full',
    })
    setDate(currentDate)
  }, [])
  return (
    <div className='bg-base-200 shadow-sm'>
      <Container>
        <div className='navbar '>
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
            <div className='text-large p-2 ml-0'>{date}</div>
          </div>

          <div className='flex'>
            <div className='dropdown dropdown-end'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div className='w-96 rounded-full border-2 border-s-olive-950'>
                  <Image alt='Tailwind CSS Navbar component' src={user} />
                </div>
              </div>
              <span> Shitol</span>
              <ul
                tabIndex={-1}
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
              >
                <li>
                  <Link href={'/'} className='justify-between'>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href={'/'}>Settings</Link>
                </li>
                <li>
                  <Link href={'/'}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
