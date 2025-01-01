import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className='xl:min-w-[1440px]'>
      
      {/* Section 1 */}
      <div id='grid-container' className='px-[100px] py-[50px] '>

        {/* 1 */}
        <div className='col-start-1 col-end-4 row-start-1 row-end-3 flex flex-col gap-[20px] kumbh py-[100px] '>
          <h3 className='text-[#666666] text-[30px] font-medium'>Your Journey as a Web-developer starts here</h3>
          <h1 className='text-[64px] font-medium leading-[120%]'>Explore the Latest Web-development Frameworks in 2024</h1>
          <p className='text-[#666666]'>Welcome to our blog on web-frameworks and their innovation.This blog is your passport to a world where you could start your journey as a web-developer and start accessing this resources. </p>
        </div>

        {/* 2 */}
        <div className='col-start-4 col-end-6 row-start-1 row-end-4 flex flex-col justify-between pb-[30px] border-[#262626] border-[1px]'>
          <Image src='/images/img-1.png' width={400} height={400} alt='Shining Moon' />
          <div className='flex flex-col gap-[10px] inter m-[50px]'>
            <h3 className='text-[24px] font-medium '>Explore many more resources</h3>
            <p className='text-[#666666] text-[18px]'>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
            <Link href='' className='border-[#262626] border-[1px] text-[18px] rounded-[10px] px-[24px] py-[18px] w-[241px]'>Explore Resources <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#FFD11A] size-[15px]  inline-flex items-center ml-[10px]' /></Link>
          </div>
        </div>

        {/* 3 */}
        <div className='row-start-3 row-end-3 bg-blue-600 col-start-1 col-end-1 border-[#262626] border-[1px]'>

        </div>

        {/* 4 */}
        <div className='col-start-2 col-end-2 row-start-3 row-end-3 bg-cyan-600 border-[#262626] border-[1px]'>

        </div>

        {/* 5 */}
        <div className='col-start-3 col-end-3 row-start-3 row-end-3 bg-purple-600 border-[#262626] border-[1px]'>

        </div>
      </div>
    </div>
  )
}

export default Home