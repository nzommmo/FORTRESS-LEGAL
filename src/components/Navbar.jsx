import React from 'react';
import { Gavel } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="relative h-screen text-white">
      <div className="absolute inset-0 bg-custom-image bg-cover bg-center opacity-90"></div>
      <div className="relative z-10 justify-center h-full">
        <div className='flex justify-between p-4'>
          <div className='flex items-center gap-2'>
            <Gavel className='w-10 h-10' />
            <p className='text-xl'>FORTRESS <span className='text-customyellow'>LEGAL</span></p>
          </div>
          <ul className='flex gap-4 md:text-xl text-sm'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Attorneys</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className='flex flex-col gap-5 items-center justify-center mt-20'>
          <div>
            <p className='text-5xl'>Your Justice, Our Priority</p>
          </div>
          <div>
            <p className='text-xl'>Experienced Legal Representation You Can Trust</p>
          </div>
        </div>
        <div className='flex mt-40 items-center md:gap-40 sm:gap-40 justify-center'>
          <div>
            <button className='bg-customyellow md:px-5 md:py-2 text-xl rounded sm:text-sm sm:py-1 sm:px-1'>GET STARTED</button>
          </div>
          <div>
            <button className='bg-customlue1 md:px-5 md:py-2 text-xl rounded sm:text-sm sm:py-1 sm:px-1'>CONTACT US</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
