import React from 'react'

import hallmark from "./../assets/images/hallmark.png"
import House from "./../assets/images/Housing.png"
import Toyota from "./../assets/images/Toyota.png"
import Nike from "./../assets/images/Nike.png"


const Brand = () => {
  return (
    <div className='bg-black md:bg-inherit flex w-full px-8 mt-10 justify-evenly mx-auto items-center gap-2 md:gap-0'>
        <div className='w-14 md:w-[initial]'><img src={hallmark} alt='' className='w-full'/></div>
        <div className='w-14 md:w-[initial]'><img src={House} alt=''  className='w-full'/></div>
        <div className='w-14 md:w-[initial]'><img src={Toyota} alt='' className='w-full'/></div>
        <div className='w-14 md:w-[initial]'><img src={Nike} alt='' className='w-full'/></div>
    </div>
  )
}

export default Brand