import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faUser } from '@fortawesome/free-solid-svg-icons';

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
        <div className='col-start-3 col-end-5 row-start-1 row-end-4  border-[#262626] border-[1px] flex flex-col justify-between  px-[20px] py-[40px]'>

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

          {/* 3.2 */}
          <div className='flex justify-between'>

            {/* 3.2.1 */}
            <div className='bg-[#1A1A1A] p-[10px] inter w-[340px] rounded-[10px]'>
              <h2 className='text-[18px] font-medium mb-[10px]'>Progressive Web Apps (PWAs) Becoming Standard</h2>
              <p className='text-[16px]'>Progressive Web Apps (PWAs) will continue to gain traction, offering the benefits of both web and mobile apps.</p>
            </div>

            {/* 3.2.2 */}
            <div className='bg-[#1A1A1A] p-[10px] inter w-[340px] rounded-[10px]'>
              <h2 className='text-[18px] font-medium mb-[10px]'>Enhanced Web Security and Privacy</h2>
              <p className='text-[16px]'>With increasing concerns over data privacy and cybersecurity, web development will see a stronger focus on building secure and privacy-centric websites.</p>
            </div>
          </div>

          {/* 3.3 */}
          <div className='flex justify-between'>

            {/* 3.3.1 */}
            <div className='bg-[#1A1A1A] p-[10px] inter w-[340px] rounded-[10px]'>
              <h2 className='text-[18px] font-medium mb-[10px]'>Component-Based Architecture is Dominating</h2>
              <p className='text-[16px]'>Modern web development is increasingly driven by component-based frameworks like React, Vue, and Angular.</p>
            </div>

            {/* 3.3.2 */}
            <div className='bg-[#1A1A1A] p-[10px] inter w-[340px] rounded-[10px]'>
              <h2 className='text-[18px] font-medium mb-[10px]'>Emphasis on Performance and User Experience (UX)</h2>
              <p className='text-[16px]'>JAMstack (JavaScript, APIs, Markup) is becoming a popular architecture for building fast, scalable, and secure websites.</p>
            </div>
          </div>

          {/* 3.4 */}
          <div className='flex justify-between'>

            {/* 3.4.1 */}
            <div className='bg-[#1A1A1A] p-[10px] inter w-[340px] rounded-[10px]'>
              <h2 className='text-[18px] font-medium mb-[10px]'>The Shift Toward JAMstack</h2>
              <p className='text-[16px]'>Web developers are increasingly focusing on optimizing performance and enhancing user experience.</p>
            </div>

            {/* 3.4.2 */}
            <div className='bg-[#1A1A1A] p-[10px] inter w-[340px] rounded-[10px]'>
              <h2 className='text-[18px] font-medium mb-[10px]'>Growing Importance of Accessibiliy</h2>
              <p className='text-[16px]'>Web accessibility is no longer an afterthought but a fundamental aspect of web development.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Section 5 */}
      <div className='p-[100px] bg-[#1a1a1a] flex justify-between items-center'>
        <div>
          <h3 className='bg-[#333333] text-[20px] font-medium rounded-[10px] w-[280px] p-[10px]'>A Knowledge Treasure Trove</h3>
          <h1 className='font-medium kumbh text-[54px]'>Explore All Blog Posts</h1>
        </div>
        <Link href='' className='bg-[#141414] flex items-center rounded-[10px] p-[20px]'><p>
          View All Blogs</p> <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] text-[#FFD11A] ml-[10px]' /></Link>
      </div>

      {/* Section 6 */}
      <div className='px-[100px]'>

        {/* 1 */}
        <div className='py-[100px] flex justify-between items-center border-[#262626] border-b-[1px]'>

          {/* 1.1 */}
          <div className='flex justify-start items-center gap-[20px]'>
            <div className='w-[50px] h-[50px] bg-blue-400 rounded-full flex justify-center items-center'>
              <FontAwesomeIcon icon={faUser} className='size-[25px] ' />
            </div>
            <div >
              <h4 className='text-[20px] font-semibold'>Kunal Sonne</h4>
              <p>SY-IT Student</p>
            </div>
          </div>

          {/* 1.2 */}
          <div className='flex flex-col gap-[15px] w-[700px]'>
            <p>August 2, 2024</p>
            <h3 className='text-[26px] font-semibold'>SvelteCraft: Mastering Lightweight Web Apps</h3>
            <p>SvelteKit is a framework for building fast, modern web applications using Svelte.</p>
          </div>

          {/* 1.3 */}
          <Link href='' className='bg-[#141414] flex items-center rounded-[10px] p-[20px]'><p>
          View Blog</p> <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] text-[#FFD11A] ml-[10px]' /></Link>
        </div>

        {/* 2 */}
        <div className='py-[100px] flex justify-between items-center border-[#262626] border-b-[1px]'>

          {/* 2.1 */}
          <div className='flex justify-start items-center gap-[20px]'>
            <div className='w-[50px] h-[50px] bg-blue-400 rounded-full flex justify-center items-center'>
              <FontAwesomeIcon icon={faUser} className='size-[25px] ' />
            </div>
            <div >
              <h4 className='text-[20px] font-semibold'>Raj Thakur</h4>
              <p>SY-IT Student</p>
            </div>
          </div>

          {/* 2.2 */}
          <div className='flex flex-col gap-[15px] w-[700px]'>
            <p>August 5, 2024</p>
            <h3 className='text-[26px] font-semibold'>NextWave: Navigating the Future of React</h3>
            <p>Next.js is a React framework that enables hybrid static and server rendering, route pre-fetching, and much more.</p>
          </div>

          {/* 2.3 */}
          <Link href='' className='bg-[#141414] flex items-center rounded-[10px] p-[20px]'><p>
          View Blog</p> <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] text-[#FFD11A] ml-[10px]' /></Link>
        </div>

        {/* 3 */}
        <div className='py-[100px] flex justify-between items-center border-[#262626] border-b-[1px]'>

          {/* 3.1 */}
          <div className='flex justify-start items-center gap-[20px]'>
            <div className='w-[50px] h-[50px] bg-blue-400 rounded-full flex justify-center items-center'>
              <FontAwesomeIcon icon={faUser} className='size-[25px] ' />
            </div>
            <div >
              <h4 className='text-[20px] font-semibold'>Hariom</h4>
              <p>SY-IT Student</p>
            </div>
          </div>

          {/* 3.2 */}
          <div className='flex flex-col gap-[15px] w-[700px]'>
            <p>August 10, 2024</p>
            <h3 className='text-[26px] font-semibold'>RemixRoute: The Art of Seamless Web Experiences</h3>
            <p>Remix is a new full-stack web framework  providing a cut-edge experience by leveraging modern web standards.</p>
          </div>

          {/* 3.3 */}
          <Link href='' className='bg-[#141414] flex items-center rounded-[10px] p-[20px]'><p>
          View Blog</p> <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] text-[#FFD11A] ml-[10px]' /></Link>
        </div>
      </div>

      {/* Section 7 */}
      <div className='p-[100px] bg-[#1a1a1a] flex justify-between items-center'>
        <div>
          <h3 className='bg-[#333333] text-[20px] font-medium rounded-[10px] w-[370px] p-[10px]'>Your Gateway to In-Depth Information</h3>
          <h1 className='font-medium kumbh text-[54px] w-[900px]'>Unlock Valuable Knowledge with FutureTech&apos;s Resources</h1>
        </div>
        <Link href='' className='bg-[#141414] flex items-center rounded-[10px] p-[20px]'><p>
          View All REsources</p> <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] text-[#FFD11A] ml-[10px]' /></Link>
      </div>

      {/* Section 8 */}
      <div className='p-[100px] flex justify-between items-center'>

        {/* 1 */}
        <div className='flex flex-col gap-[20px] w-[600px]'>
          <Image src='/images/icon-6.png' width={80} height={80} alt='Icon' />
          <h2 className='kumbh text-[40px] font-semibold'>Free Resources to Learn</h2>
          <p>video tutorials that walk through building a project from scratch using different frameworks.</p>
          <Link href='' className='px-[50px] py-[16px] bg-[#1a1a1a] text-center flex items-center justify-center rounded-[10px]'><p>Explore all Resources</p> <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] text-[#FFD11A] ml-[10px]' /></Link>
          <p className='px-[50px] py-[16px] bg-[#1a1a1a] rounded-[10px] text-center'>Explored by <span className='text-[24px] font-semibold text-white '>10 + Users</span></p>
        </div>
      </div>
    </div>
  )
}

export default Home