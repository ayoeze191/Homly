import React from 'react'
import Bathtub from "./../assets/images/Bathtub.png"
import car from "./../assets/images/car.png"
import OfficeBuildingOutline from "./../assets/images/OfficeBuildingOutline.png";
import BedRoom from "./../assets/images/BedRoom.png"
import Bungalow1 from "./../assets/images/Bungalow1.png"
import foryou1 from "./../assets/ForYou/ForYou1.png"
import foryou2 from "./../assets/ForYou/ForYou2.png"
import foryou3 from "./../assets/ForYou/ForYou3.png"
import foryou4 from "./../assets/ForYou/ForYou4.png"
import foryou5 from "./../assets/ForYou/ForYou5.png"
import foryou6 from "./../assets/ForYou/ForYou6.png"
import foryou7 from "./../assets/ForYou/ForYou7.png"
import foryou8 from "./../assets/ForYou/ForYou8.png"
import foryou9 from "./../assets/ForYou/ForYou9.png"

const ForYou = () => {
  return (
    <div className='flex flex-col items-center mt-10 mx-auto w-full'>
        <div className='flex justify-between flex-col text-left items-start mt-0 mx-auto sm:container px-3 md:px-20 mt-20 mb-32'>
        <h1 className='text-2xl md:text-4xl text-center md:text-left w-4/5'>For You</h1>
        <p className='text-[#A4A4A4] w-full mx-auto flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left mb-4 md:mb-6'>We offer the best deals in property buying,Homly we secures
your property before and after purchase.</p>
</div>
<div className='grid  grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm md:text-base w-full p-3 md:p-10 items-center'>
<div className='bg-white flex p-2 rounded-lg text-sm gap-2 shadow-2xl'>
    <div className=''>
        <img src={foryou1} alt='' className=''/>
    </div>
    <div className='flex flex-col items-center'>
        <h1>Equisite Detached Bungalow</h1>
        <div className='w-full'>413 Texas,CA 378</div>
        <h1 className='text-[#2320AF] text-lg w-full '>$32,800</h1>
        <div className='grid grid-cols-2'>
            <h1><img src={Bathtub} alt='' /> 4 Bathroom</h1>
            <h1><img src={car} alt='' />2 Garage</h1>
            <h1><img src={OfficeBuildingOutline} alt='' />4.2 Square Feet</h1>
            <h1><img src={BedRoom} alt='' /> 4 Bedroom</h1>
        </div>
        <button className='bg-black py-1 px-2 text-white rounded-lg text-xs '>Buy</button>
    </div>
</div>
<div className='bg-white flex p-2 rounded-lg text-sm gap-2 shadow-2xl'>
    <div className=''>
        <img src={foryou2} alt='' className=''/>
    </div>
    <div className='flex flex-col items-center'>
        <h1>Equisite Detached Bungalow</h1>
        <div className='w-full'>413 Texas,CA 378</div>
        <h1 className='text-[#2320AF] text-lg w-full '>$32,800</h1>
        <div className='grid grid-cols-2'>
            <h1><img src={Bathtub} alt='' /> 4 Bathroom</h1>
            <h1><img src={car} alt='' />2 Garage</h1>
            <h1><img src={OfficeBuildingOutline} alt='' />4.2 Square Feet</h1>
            <h1><img src={BedRoom} alt='' /> 4 Bedroom</h1>
        </div>
        <button className='bg-black py-1 px-2 text-white rounded-lg text-xs '>Buy</button>
    </div>
</div>
<div className='bg-white flex p-2 rounded-lg text-sm gap-2 shadow-2xl'>
    <div className=''>
        <img src={foryou3} alt='' className=''/>
    </div>
    <div className='flex flex-col items-center'>
        <h1>Equisite Detached Bungalow</h1>
        <div className='w-full'>413 Texas,CA 378</div>
        <h1 className='text-[#2320AF] text-lg w-full '>$32,800</h1>
        <div className='grid grid-cols-2'>
            <h1><img src={Bathtub} alt='' /> 4 Bathroom</h1>
            <h1><img src={car} alt='' />2 Garage</h1>
            <h1><img src={OfficeBuildingOutline} alt='' />4.2 Square Feet</h1>
            <h1><img src={BedRoom} alt='' /> 4 Bedroom</h1>
        </div>
        <button className='bg-black py-1 px-2 text-white rounded-lg text-xs '>Buy</button>
    </div>
</div>
<div className='bg-white flex p-2 rounded-lg text-sm gap-2 shadow-2xl'>
    <div className=''>
        <img src={foryou4} alt='' className=''/>
    </div>
    <div className='flex flex-col items-center'>
        <h1>Equisite Detached Bungalow</h1>
        <div className='w-full'>413 Texas,CA 378</div>
        <h1 className='text-[#2320AF] text-lg w-full '>$32,800</h1>
        <div className='grid grid-cols-2'>
            <h1><img src={Bathtub} alt='' /> 4 Bathroom</h1>
            <h1><img src={car} alt='' />2 Garage</h1>
            <h1><img src={OfficeBuildingOutline} alt='' />4.2 Square Feet</h1>
            <h1><img src={BedRoom} alt='' /> 4 Bedroom</h1>
        </div>
        <button className='bg-black py-1 px-2 text-white rounded-lg text-xs '>Buy</button>
    </div>
</div>
<div className='bg-white lg:flex p-2 rounded-lg text-sm gap-2 hidden shadow-2xl'>
    <div className=''>
        <img src={foryou5} alt='' className=''/>
    </div>
    <div className='flex flex-col items-center'>
        <h1>Equisite Detached Bungalow</h1>
        <div className='w-full'>413 Texas,CA 378</div>
        <h1 className='text-[#2320AF] text-lg w-full '>$32,800</h1>
        <div className='grid grid-cols-2'>
            <h1><img src={Bathtub} alt='' /> 4 Bathroom</h1>
            <h1><img src={car} alt='' />2 Garage</h1>
            <h1><img src={OfficeBuildingOutline} alt='' />4.2 Square Feet</h1>
            <h1><img src={BedRoom} alt='' /> 4 Bedroom</h1>
        </div>
        <button className='bg-black py-1 px-2 text-white rounded-lg text-xs '>Buy</button>
    </div>
</div>
<div className='bg-white lg:flex p-2 rounded-lg text-sm gap-2 hidden shadow-2xl'>
    <div className=''>
        <img src={foryou6} alt='' className=''/>
    </div>
    <div className='flex flex-col items-center'>
        <h1>Equisite Detached Bungalow</h1>
        <div className='w-full'>413 Texas,CA 378</div>
        <h1 className='text-[#2320AF] text-lg w-full '>$32,800</h1>
        <div className='grid grid-cols-2'>
            <h1><img src={Bathtub} alt='' /> 4 Bathroom</h1>
            <h1><img src={car} alt='' />2 Garage</h1>
            <h1><img src={OfficeBuildingOutline} alt='' />4.2 Square Feet</h1>
            <h1><img src={BedRoom} alt='' /> 4 Bedroom</h1>
        </div>
        <button className='bg-black py-1 px-2 text-white rounded-lg text-xs '>Buy</button>
    </div>
</div>
<div className='bg-white lg:flex p-2 rounded-lg text-sm gap-2 hidden shadow-2xl'>
    <div className=''>
        <img src={foryou7} alt='' className=''/>
    </div>
    <div className='flex flex-col items-center'>
        <h1>Equisite Detached Bungalow</h1>
        <div className='w-full'>413 Texas,CA 378</div>
        <h1 className='text-[#2320AF] text-lg w-full '>$32,800</h1>
        <div className='grid grid-cols-2'>
            <h1><img src={Bathtub} alt='' /> 4 Bathroom</h1>
            <h1><img src={car} alt='' />2 Garage</h1>
            <h1><img src={OfficeBuildingOutline} alt='' />4.2 Square Feet</h1>
            <h1><img src={BedRoom} alt='' /> 4 Bedroom</h1>
        </div>
        <button className='bg-black py-1 px-2 text-white rounded-lg text-xs '>Buy</button>
    </div>
</div>
<div className='bg-white lg:flex p-2 rounded-lg text-sm gap-2 hidden shadow-2xl'>
    <div className=''>
        <img src={foryou8} alt='' className=''/>
    </div>
    <div className='flex flex-col items-center'>
        <h1>Equisite Detached Bungalow</h1>
        <div className='w-full'>413 Texas,CA 378</div>
        <h1 className='text-[#2320AF] text-lg w-full '>$32,800</h1>
        <div className='grid grid-cols-2'>
            <h1><img src={Bathtub} alt='' /> 4 Bathroom</h1>
            <h1><img src={car} alt='' />2 Garage</h1>
            <h1><img src={OfficeBuildingOutline} alt='' />4.2 Square Feet</h1>
            <h1><img src={BedRoom} alt='' /> 4 Bedroom</h1>
        </div>
        <button className='bg-black py-1 px-2 text-white rounded-lg text-xs '>Buy</button>
    </div>
</div>
<div className='bg-white lg:flex p-2 rounded-lg text-sm gap-2 hidden shadow-2xl'>
    <div className=''>
        <img src={foryou9} alt='' className=''/>
    </div>
    <div className='flex flex-col items-center'>
        <h1>Equisite Detached Bungalow</h1>
        <div className='w-full'>413 Texas,CA 378</div>
        <h1 className='text-[#2320AF] text-lg w-full '>$32,800</h1>
        <div className='grid grid-cols-2'>
            <h1><img src={Bathtub} alt='' /> 4 Bathroom</h1>
            <h1><img src={car} alt='' />2 Garage</h1>
            <h1><img src={OfficeBuildingOutline} alt='' />4.2 Square Feet</h1>
            <h1><img src={BedRoom} alt='' /> 4 Bedroom</h1>
        </div>
        <button className='bg-black py-1 px-2 text-white rounded-lg text-xs '>Buy</button>
    </div>
</div>
</div>
    </div>
  )
}

export default ForYou