import MobileMenu from '@/components/layout/navBar/mobile-menu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavBar() {
 return (
  <nav className="relative flex items-center justify-between bg-white p-4 dark:bg-black lg:px-10">
   <div className="block w-1/3 md:hidden">
    <MobileMenu
     menu={[
      { path: '/', title: '#1' },
      { path: '/', title: '#2' },
     ]}
    />
   </div>
   <div className="flex justify-self-center md:w-1/3 md:justify-self-start">
    <div className="md:mr-4">
     <Link href="/" aria-label="Go back home">
      <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
     </Link>
    </div>
    <ul className="hidden md:flex md:items-center">
     <li>
      <Link
       href="/"
       className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
      >
       menu#1
      </Link>
     </li>
     <li>
      <Link
       href="/"
       className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
      >
       menu#2
      </Link>
     </li>
    </ul>
   </div>
   <div className="hidden w-1/3 md:block">
    <input type="text" className="w-full" placeholder="search" />
   </div>

   <div className="flex w-1/3 justify-around">
    <div className="hidden lg:block">
     <Link
      href="/"
      className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
     >
      wallet
     </Link>{' '}
     |{' '}
     <Link
      href="/"
      className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
     >
      user
     </Link>
    </div>

    <div className="block md:hidden">아이콘 서치</div>
    <div>cart</div>
   </div>
  </nav>
 )
}

export default NavBar
