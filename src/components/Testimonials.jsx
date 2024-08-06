import React from 'react';

const Testimonials = () => {
  return (
    <div className='bg-customlue text-white h-full pt-10'>
      <div className='flex flex-col items-center justify-center mb-10'>
        <div>
          <p className='text-3xl font-bold'>TESTIMONIALS</p>
        </div>
        <div>
          <p className='text-xl'>What are people saying about us</p>
        </div>
      </div>
      <div className='flex flex-col items-center md:flex-row justify-center gap-10 text-black pb-10 '>
        <div className='bg-white rounded-md p-4 w-80'>
          <p className='text-lg font-semibold'>“Exceptional Service and Expertise”</p>
          <p className='mt-2'>“From the moment I walked in, I felt supported and understood. They handled my case with utmost care and provided expert guidance every step of the way. Their commitment to achieving the best outcome for their clients is truly commendable”</p>
          <p className='mt-4 text-left'>~Emily Warren</p>
        </div>
        <div className='bg-white rounded-md p-4 w-80 mt-10 md:mt-10'>
          <p className='text-lg font-semibold'>“A Lifesaver in a Tough Time”"</p>
          <p className='mt-2'>"Their team was not only knowledgeable and skilled but also compassionate and understanding. They made the legal process as smooth as possible and fought tirelessly on my behalf."</p>
          <p className='mt-4 text-left'>~Wilson James</p>
        </div>
        <div className='bg-white rounded-md p-4 w-80 mt-10 md:mt-20'>
          <p className='text-lg font-semibold'>“Professionalism and Integrity at Its Best”</p>
          <p className='mt-2'>"Their professionalism, integrity, and attention to detail are unparalleled. They took the time to listen to my concerns and provided clear, actionable advice. It was a pleasure working with them, and I couldn't be happier with the results."</p>
          <p className='mt-4 text-left'>~Sarah Monroe</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
