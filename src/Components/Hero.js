import React from 'react';

export const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg" alt="/" />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Beaches and Gateaways</h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo aperiam culpa vitae, non, perspiciatis eum eaque eligendi esse optio aliquid ad fuga consectetur excepturi? Nobis fugiat doloremque alias? Molestias.</p>
          <button className='bg-white text-black'>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}