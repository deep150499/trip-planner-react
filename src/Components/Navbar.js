import React, {useState} from 'react';
import {HiMenuAlt3} from 'react-icons/hi';

export const Navbar = () => {

  const [nav,setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav ){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'scroll';
    }
  }

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className='text-white font-bold text-2xl z-20 cursor-pointer'>Experiences</h1>
      <HiMenuAlt3 className='z-20 text-white cursor-pointer' size={25} onClick={() => handleNav()}/>
      <div className={nav ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/70 px-4 py-7 flex-col z-10 ease-in duration-300' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-3xl p-8 cursor-pointer'>Home</li>
          <li className='font-bold text-3xl p-8 cursor-pointer'>Destinations</li>
          <li className='font-bold text-3xl p-8 cursor-pointer'>Reservations</li>
          <li className='font-bold text-3xl p-8 cursor-pointer'>Amenities</li>
          <li className='font-bold text-3xl p-8 cursor-pointer'>Rooms</li>
        </ul>
      </div>
    </div>
  )
}
