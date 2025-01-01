import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='xl:min-w-[1440px] bg-[#1a1a1a] px-[100px] py-[16px] flex justify-between items-center'>
        <Image src='/images/Logo.png' width={35} height={35} alt='Logo' />
        <nav className='flex justify-center items-center gap-[40px] inter text-[18px]'>
            <Link href='' className='hover:underline'>Home</Link>
            <Link href='' className='hover:underline'>News</Link>
            <Link href='' className='hover:underline'>All Blogs</Link>
            <Link href='' className='hover:underline'>Resources</Link>
        </nav>
        <Link href='' className='bg-[#FFD11A] text-black text-[18px] font-medium rounded-[10px] px-[20px] py-[14px]'>Contact Us</Link>
    </div>
  )
}

export default Header