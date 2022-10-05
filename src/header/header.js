import React from 'react'
import bell from './../assets/images/bell.svg'
import Logo from './../assets/images/Logo.png'
import menu from  './../assets/images/menuicon.png'
const Header = () => {
  return (
    <div className='bg-white'>
    <div className='flex px-3 md:px-20 sm:container mx-auto items-center py-2 justify-between'>
        <div className="   flex"><img  src={Logo} alt = ""/></div>
        <div className='hidden  md:flex list-none justify-between gap-5'>
          <li className="font-bold">Home</li>
          <li>About Us</li>
          <li>Properties</li>
          <li>Services</li>
        </div>
        <div className='   md:flex hidden'>
        <button className='bg-black px-5 py-3 rounded-lg text-white'>Get Started</button>
        </div>
        <div className='flex  justify-end  md:hidden'>
        <div className='mr-6 '><img  src={bell} alt = ""/></div> 
        <div className=''><img  src={menu} alt = ""/></div> 
        </div>
    </div>
    </div>
  )
}

export default Header