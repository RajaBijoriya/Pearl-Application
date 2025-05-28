import React from 'react'
import { Button } from '@mantine/core';
import { Routes, Route, Link } from "react-router-dom";
import { hover, motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="w-full py-4 bg-white justify-center items-center ">
      <ul className='flex justify-between items-center ml-12 mr-12'>
        <li className='font-medium text-xl'>pearl</li>
        <li>
            <ul className='flex gap-10 text-[15px] font-normal'>
                <nav className='flex gap-10'>
                  <Link  className='text-[12px] font-semibold' to="/">Home</Link> 
                   <Link className='text-[12px] font-semibold'  to="/work">Work</Link>  
                   <Link  className='text-[12px] font-semibold' to="/about">About</Link>  
                   <Link  className='text-[12px] font-semibold' to="/contact">Contact</Link>
                </nav>
            </ul>
        </li>
        <li>
           {/* <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // initial={{ opacity: 0, y: 50 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    > */}
             <Button   variant="filled" color="rgba(5, 5, 5, 1)" size="xs" radius="lg">Remix</Button>
          {/* </motion.div> */}
        </li>
      </ul>
    </div>
  )
}

export default Navbar
