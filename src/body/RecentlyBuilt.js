import React from 'react'
import Bungalow1 from "./../assets/images/Bungalow1.png"
import Location from "./../assets/images/Location.png"
import Bathtub from "./../assets/images/Bathtub.png"
import car from "./../assets/images/car.png"
import OfficeBuildingOutline from "./../assets/images/OfficeBuildingOutline.png";
import BedRoom from "./../assets/images/BedRoom.png"

const RecentlyBuilt = () => {
  return (
    <div className='bg-black w-full container mx-auto'>
        <div className='relative bottom-40 w-5/6 mx-auto flex flex-col gap-2'>
        <div>
        <h1 className='text-black text-center text-lg font-bold'>Recently Built</h1>
        <p className='text-[#A4A4A4] text-center'>Explore to find and acquire your desired property for your comfort
all available at homly.</p>
</div>
<div className='grid  grid-cols-1 gap-5 lg:grid-cols-2'>
<div className='bg-[#FFFFFF] flex gap-4  mx-auto rounded-lg shadow-lg pt-3 px-3 w-fit'>
<div>
    <img src={Bungalow1} alt = "Bungalow1" className='w-full h-full pb-3'/>
</div>
<div>
<h1 className='text-black font-'>Equisite Detached Bungalow</h1>
<h1 className='flex text-[#A4A4A4]'><img src={Location} alt=''/>413 Texas,CA 378</h1>
<h1 className='text-[#2320AF]'>$83,400</h1>
<div className='rounded-xl grid grid-cols-2'>
    <div className='flex text-xs md:text-sm'><img src={Bathtub} alt =""/>4 Bathroom</div>
    <div className='flex text-xs md:text-sm'><img src={car} alt=''/>2 Garage</div>
    <div className='flex text-xs md:text-sm'><img src={OfficeBuildingOutline} alt=''/>4.2 Square Feet</div>
    <div className='flex text-xs md:text-sm'><img src={BedRoom} alt=''/>4 Bedroom</div>
</div>
<div className='w-full flex justify-center'>
    <button className='bg-black px-4 py-3 rounded-xl mx-auto text-white'>Buy</button>
</div>
</div>
</div>
<div className='bg-[#FFFFFF] flex gap-4  mx-auto rounded-lg shadow-lg pt-3 px-3 w-fit'>
<div>
    <img src={Bungalow1} alt = "Bungalow1" className='w-full h-full pb-3'/>
</div>
<div>
<h1 className='text-black font-'>Equisite Detached Bungalow</h1>
<h1 className='flex text-[#A4A4A4]'><img src={Location} alt=''/>413 Texas,CA 378</h1>
<h1 className='text-[#2320AF]'>$83,400</h1>
<div className='rounded-xl grid grid-cols-2'>
    <div className='flex text-xs md:text-sm'><img src={Bathtub} alt =""/>4 Bathroom</div>
    <div className='flex text-xs md:text-sm'><img src={car} alt=''/>2 Garage</div>
    <div className='flex text-xs md:text-sm'><img src={OfficeBuildingOutline} alt=''/>4.2 Square Feet</div>
    <div className='flex text-xs md:text-sm'><img src={BedRoom} alt=''/>4 Bedroom</div>
</div>
<div className='w-full flex justify-center'>
    <button className='bg-black px-4 py-3 rounded-xl mx-auto text-white'>Buy</button>
</div>
</div>
</div>
<div className='bg-[#FFFFFF] flex gap-4  mx-auto rounded-lg shadow-lg pt-3 px-3 w-fit'>
<div>
    <img src={Bungalow1} alt = "Bungalow1" className='w-full h-full pb-3'/>
</div>
<div>
<h1 className='text-black font-'>Equisite Detached Bungalow</h1>
<h1 className='flex text-[#A4A4A4]'><img src={Location} alt=''/>413 Texas,CA 378</h1>
<h1 className='text-[#2320AF]'>$83,400</h1>
<div className='rounded-xl grid grid-cols-2'>
    <div className='flex text-xs md:text-sm'><img src={Bathtub} alt =""/>4 Bathroom</div>
    <div className='flex text-xs md:text-sm'><img src={car} alt=''/>2 Garage</div>
    <div className='flex text-xs md:text-sm'><img src={OfficeBuildingOutline} alt=''/>4.2 Square Feet</div>
    <div className='flex text-xs md:text-sm'><img src={BedRoom} alt=''/>4 Bedroom</div>
</div>
<div className='w-full flex justify-center'>
    <button className='bg-black px-4 py-3 rounded-xl mx-auto text-white'>Buy</button>
</div>
</div>
</div>
<div className='bg-[#FFFFFF] flex gap-4  mx-auto rounded-lg shadow-lg pt-3 px-3 w-fit'>
<div>
    <img src={Bungalow1} alt = "Bungalow1" className='w-full h-full pb-3'/>
</div>
<div>
<h1 className='text-black font-'>Equisite Detached Bungalow</h1>
<h1 className='flex text-[#A4A4A4]'><img src={Location} alt=''/>413 Texas,CA 378</h1>
<h1 className='text-[#2320AF]'>$83,400</h1>
<div className='rounded-xl grid grid-cols-2'>
    <div className='flex text-xs md:text-sm'><img src={Bathtub} alt =""/>4 Bathroom</div>
    <div className='flex text-xs md:text-sm'><img src={car} alt=''/>2 Garage</div>
    <div className='flex text-xs md:text-sm'><img src={OfficeBuildingOutline} alt=''/>4.2 Square Feet</div>
    <div className='flex text-xs md:text-sm'><img src={BedRoom} alt=''/>4 Bedroom</div>
</div>
<div className='w-full flex justify-center'>
    <button className='bg-black px-4 py-3 rounded-xl mx-auto text-white'>Buy</button>
</div>
</div>
</div>
</div>
</div>

</div>
  )
}

export default RecentlyBuilt