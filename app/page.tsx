import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className='xl:min-w-[1440px]'>
      
      {/* Section 1 */}
      <div id='grid-container' className='px-[100px] py-[50px] pb-0'>

        {/* 1 */}
        <div className='col-start-1 col-end-4 row-start-1 row-end-3 flex flex-col gap-[20px] kumbh py-[100px] '>
          <h3 className='text-[#666666] text-[30px] font-medium'>Your Journey as a Web-developer starts here</h3>
          <h1 className='text-[60px] font-medium leading-[120%]'>Explore the Latest Web-development Frameworks in 2024</h1>
          <p>Welcome to our blog on web-frameworks and their innovation.This blog is your passport to a world where you could start your journey as a web-developer and start accessing this resources. </p>
        </div>

        {/* 2 */}
        <div className='col-start-4 col-end-6 row-start-1 row-end-4 flex flex-col justify-between pb-[30px] border-[#262626] border-[1px]'>
          <Image src='/images/img-1.png' width={400} height={400} alt='Shining Moon' />
          <div className='flex flex-col gap-[10px] inter m-[50px]'>
            <h3 className='text-[24px] font-medium '>Explore many more resources</h3>
            <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
            <Link href='' className='border-[#262626] border-[1px] text-[18px] rounded-[10px] px-[24px] py-[18px] w-[241px]'>Explore Resources <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[#FFD11A] size-[15px]  inline-flex items-center ml-[10px]' /></Link>
          </div>
        </div>

        {/* 3 */}
        <div className='row-start-3 row-end-3  col-start-1 col-end-1 border-[#262626] border-[1px] inter flex flex-col justify-center p-[30px]'>
          <h2 className='text-[40px] font-semibold'>40 <span className='text-[#FFD11A]'>+</span></h2>
          <p>Resources available</p>
        </div>

        {/* 4 */}
        <div className='row-start-3 row-end-3  col-start-2 col-end-2 border-[#262626] border-[1px] inter flex flex-col justify-center p-[30px]'>
          <h2 className='text-[40px] font-semibold'>120 <span className='text-[#FFD11A]'>+</span></h2>
          <p>Visitors</p>
        </div>

        {/* 5 */}
        <div className='row-start-3 row-end-3  col-start-3 col-end-3 border-[#262626] border-[1px] inter flex flex-col justify-center p-[30px]'>
          <h2 className='text-[40px] font-semibold'>50 <span className='text-[#FFD11A]'>+</span></h2>
          <p>Reviews</p>
        </div>
      </div>

      {/* Section 2 */}
      <div className='flex justify-center items-center px-[100px] border-[#262626] border-[1px]'>

        {/* 1 */}
        <div className='w-[413.33px] h-[300px] flex flex-col justify-center gap-[25px] p-[30px]'>
          <Image src='/images/icon-1.png' width={50} height={50} alt='Icon' />
          <div className='flex justify-between items-center'>
            <div>
              <h4 className='text-[20px]'>Latest Blog</h4>
              <p>Stay Current</p>
            </div>
            <div className='bg-[#FFD11A] w-[50px] h-[50px] rounded-full flex justify-center items-center'>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[20px] text-black' />
            </div>
          </div>
          <p>Latest articles published periodically</p>
        </div>

        {/* 2 */}
        <div className='w-[413.33px] h-[300px] flex flex-col justify-center gap-[25px] p-[30px] border-[#262626] border-[1px]'>
          <Image src='/images/icon-2.png' width={50} height={50} alt='Icon' />
          <div className='flex justify-between items-center'>
            <div>
              <h4 className='text-[20px]'>Expert Contributors</h4>
              <p className='text-[#666666] text-[18px]'>Trusted Insights</p>
            </div>
            <div className='bg-[#FFD11A] w-[50px] h-[50px] rounded-full flex justify-center items-center'>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[20px] text-black' />
            </div>
          </div>
          <p>50+ renowned AI experts on our team</p>
        </div>

        {/* 3 */}
        <div className='w-[413.33px] h-[300px] flex flex-col justify-center gap-[25px] p-[30px] '>
          <Image src='/images/icon-3.png' width={50} height={50} alt='Icon' />
          <div className='flex justify-between items-center'>
            <div>
              <h4 className='text-[20px]'>Global Readership</h4>
              <p>Worldwide Impact</p>
            </div>
            <div className='bg-[#FFD11A] w-[50px] h-[50px] rounded-full flex justify-center items-center'>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[20px] text-black' />
            </div>
          </div>
          <p>2million monthly readers</p>
        </div>

      </div>

      {/* Section 3 */}
      <div className='p-[100px] bg-[#1a1a1a]'>
        <h1 className='font-medium kumbh text-[54px]'>Future of Web-Development</h1>
      </div>

      {/* Section 4 */}
      <div id='grid-container2' className='px-[100px] py-[50px] '>

        {/* 1 */}
        <div className='col-start-1 col-end-3 row-start-1 row-end-3 flex flex-col justify-center gap-[20px] p-[50px] border-[#262626] border-[1px]'>
          <Image src='/images/icon-4.png' width={80} height={80} alt='Icon' />
          <h1 className='kumbh font-semibold text-[40px]'>Future Technology</h1>
          <p>future of web development is poised to be shaped by several key trends and technologies.</p>
        </div>

        {/* 2 */}
        <div className='col-start-1 col-end-3 row-start-3 row-end-3 flex flex-col justify-center gap-[20px] p-[50px] border-[#262626] border-[1px] '>
          <Image src='/images/icon-5.png' width={92.38} height={80} alt='Icon' />
          <h1 className='kumbh font-semibold text-[40px]'>WebDev Insights</h1>
          <p>Dive deep into future technoloy concepts with our insights section.</p>
        </div>

        {/* 3 */}
        <div className='col-start-3 col-end-5 row-start-1 row-end-4  border-[#262626] border-[1px] flex flex-col gap-[20px] p-[20px] '>

          {/* 3.1 */}
          <div className='flex justify-between'>

            {/* 3.1.1 */}
            <div className='bg-[#1A1A1A] p-[10px] inter w-[340px] rounded-[10px]'>
              <h2 className='text-[18px] font-medium mb-[10px]'>AI-Powered Development</h2>
              <p className='text-[16px]'>Artificial Intelligence (AI) and Machine Learning (ML) will play an increasingly significant role in web development.</p>
            </div>

            {/* 3.1.2 */}
            <div className='bg-[#1A1A1A] p-[10px] inter w-[340px] rounded-[10px]'>
              <h2 className='text-[18px] font-medium mb-[10px]'>Rise of No-Code and Low-Code Platforms</h2>
              <p className='text-[16px]'>No-code and low-code platforms will democratize web development, enabling non-developers to create complex web applications with minimal coding knowledge.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home