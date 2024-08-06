import React from 'react'
import { Gavel, Scale, Lightbulb, Users } from 'lucide-react';

const Services = () => {
  return (
    <div className='bg-customlue h-full text-white'>
      <div className='p-4'>
        <div className='flex items-center gap-2'>
          <Gavel className='w-10 h-10' />
          <p className='text-xl'>FORTRESS <span className='text-customyellow'>LEGAL</span></p>
        </div>
        <div className='mt-20 flex flex-col ms-30  gap-3 justify-start'>
          <div className='w-full'>
            <p className='md:text-5xl sm:text-xl text-wrap'>Trust us to navigate your legal journey with expertise and care.</p>
          </div>
          <div className='w-full flex flex-wrap'>
            <p className='md:text-2xl sm:text-sm text-wrap'>We have a team of talented lawyers who can bring your ideas into life.</p>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap items-start justify-center ms-10 me-10 mt-10 gap-4 text-black pb-10'>
        <div className=' items-center bg-custompik p-4 rounded-lg w-[300px] h-[270px] border border-customyellow'>
          <Scale className='w-10 h-10 text-black mb-2' />
          <p className='font-bold py-2'>Litigation</p>
          <p className=''>We offer exceptional legal representation throughout the litigation process, from consultation to resolution, committed to advocating for your rights and securing the best outcome.</p>
        </div>
        <div className='bg-custompyellow p-4 rounded-lg w-[300px] h-[270px] border border-customyellow'>
          <Lightbulb className='w-10 h-10 text-black mb-2' />
          <p className='font-bold py-2'>Intellectual Property</p>
          <p className=''>We understand the value of your intellectual property and are dedicated to safeguarding your innovations, creations, and brand identity.</p>
        </div>
        <div className='bg-customgree p-4 rounded-lg w-[300px] h-[270px] border border-customyellow'>
          <Users className='w-10 h-10 text-black mb-2' />
          <p className='font-bold py-2'>Family Law</p>
          <p className=''>Our skilled team offers compassionate support for all family law matters, including divorce, custody, and adoption. We provide expert guidance tailored to your needs, ensuring your family’s future is protected.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
