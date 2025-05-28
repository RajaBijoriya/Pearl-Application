import React from 'react'
import { Button } from '@mantine/core';

const Footer = () => {
  return (
    <div className='bg-black text-white py-10 w-full h-full'>
      <div className='flex mr-12 ml-12 justify-start gap-90'>
        <div className='flex flex-col gap-10'>
        <p className='text-[12px]'>Contact</p>
        <p className='gap-10 text-5xl'>Let's start <br /> creating together</p>
        <div>
          <Button className='gap-30 mt-15' variant="outline" color="black" bg="white" radius="xl">Let's talk</Button>
        </div>
        <p className='text-[12px] text-neutral-400'>2023 Pearl Framer template crafted with love by Dawid Pietrasiak</p>
      </div>
      <div className='flex gap-20 '>
        <ul className='flex flex-col gap-2 text-[12px]'>
            <li>Home</li>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <ul className='flex flex-col gap-2 text-[14px]'>
            <li>Twitter</li>
            <li>Dribbble</li>
            <li>Instagram</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Footer
