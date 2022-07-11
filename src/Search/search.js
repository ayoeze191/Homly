import React from 'react'

const Search = () => {
  return (
    <div className='flex flex-col mx-auto items-center relative md:-mt-20 w-[90%] md:w-fit max-w-xl rounded-4xl   mt-5 pb-52'>
        <div className='m-0 flex order-2 md:order-1 gap-4 md:gap-0 mt-4 md:mt-0 '>
            <button className='bg-black md:bg-white text-white md:text-black px-5 py-2 md:rounded-t-md md:rounded-b-none rounded-md md:shadow-2xl'>Buy</button>
            <button className='bg-white md:bg-black md:text-white px-5 py-2 rounded-t-md md:rounded-t-md md:rounded-b-none rounded-md md:shadow-2xl'>Rent</button>
            <button className='bg-black md:bg-white text-white md:text-black px-5 py-2 rounded-t-md md:rounded-t-md md:rounded-b-none rounded-md md:shadow-2xl'>Sell</button>
        </div>
        <div className='m-0 bg-white w-full px-4 py-4 items-center rounded-lg order-1 md:order-2 md:shadow-2xl'> 
            <div className='mb-10'>Search For your prefered choice</div>
            <div className='flex gap-2 items-center'>
            <div className='rounded border outline-0 lg:w-28 py-2'>
            <input type={'text'} placeholder="Location" className='px-2 outline-0 w-full'/>
            </div>
            <div className='rounded border outline-0 lg:w-28 py-2'>
            <input type={'text'} placeholder="Home Type" className='px-2 outline-0 w-full' />
            </div>
            <div className='rounded border outline-0 lg:w-28 py-2'>
            <input type={'text'} placeholder="Budget" className='px-2 outline-0 w-full'/>
            </div>
            <button className='bg-black text-white px-3 py-2 rounded-lg hidden md:flex '>Explore Now</button>
            </div>
            
        </div>
    </div>
  )
}

export default Search