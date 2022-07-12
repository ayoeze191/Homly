import React from 'react'
import Account from "./../assets/images/Account.png";
import House from "./../assets/images/House.png";
import Shield from "./../assets/images/Shield.png";
import ViewMore from  "./../assets/images/ViewMore.png"

const HowWeOperate = () => {
  return (
    <div className='w-full container mx-auto flex flex-col items-center gap-4 md:gap-10 md:mt-20'>
        <h1 className='flex gap-4 md:hidden'>view More <span><img src={ViewMore} alt="" /></span></h1>
        <h1 className='text-2xl md:text-4xl text-center md:text-left w-4/5'>How We Operate</h1>
        <p className='text-[#A4A4A4] w-4/5 mx-auto flex flex-col md:flex-row gap-4 md:gap-6 text-center mb-4 md:mb-6'>At homly we offer the best services,ensuring we have our customers
needs at hand.</p>
<div className='md:bg-black flex flex-col container justify-center gap-4  pb-36'>
    <div className='w-4/5 mx-auto hidden md:flex flex-col md:flex-row gap-4 md:gap-6 md:relative md:bottom-10'>
<div className='bg-white shadow-lg flex flex-col gap-4 p-6 w-full rounded-lg text-center'>
    <div className='flex justify-center'><img src={Shield} alt=''/></div>
    <h3>Poperty Insurance</h3>
    <p>Our insurance comany covers the properties damages for a year</p>
</div>
<div className='bg-white shadow-lg flex flex-col gap-4 p-6 w-full rounded-lg text-center'>
    <div className='flex justify-center'><img src={Account} alt=''/></div>
    <h3>Easy Payment Method</h3>
    <p>We make our system of payment to be done at your comfort</p>
</div>
<div className='bg-white shadow-lg flex flex-col gap-4 p-6 w-full rounded-lg text-center'>
    <div className='flex justify-center'><img src={House} alt=''/></div>
    <h3>Purchase Property</h3>
    <p>Customers gets document to properties easy and fast</p>
</div>
</div>
<div className='w-4/5 mx-auto flex flex-col md:flex-row gap-4 md:gap-6'>
<div className='bg-white shadow-lg flex flex-col gap-4 p-6 w-full rounded-lg text-center'>
    <div className='flex justify-center'><img src={Shield} alt=''/></div>
    <h3>Poperty Insurance</h3>
    <p>Our insurance comany covers the properties damages for a year</p>
</div>
<div className='bg-white shadow-lg flex flex-col gap-4 p-6 w-full rounded-lg text-center'>
    <div className='flex justify-center'><img src={Account} alt=''/></div>
    <h3>Easy Payment Method</h3>
    <p>We make our system of payment to be done at your comfort</p>
</div>
<div className='bg-white shadow-lg flex flex-col gap-4 p-6 w-full rounded-lg text-center'>
    <div className='flex justify-center'><img src={House} alt=''/></div>
    <h3>Purchase Property</h3>
    <p>Customers gets document to properties easy and fast</p>
</div>
</div>
</div>
    </div>
  )
}
export default HowWeOperate