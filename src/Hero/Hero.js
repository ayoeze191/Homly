import React from 'react'
import Play from "./../assets/images/Play.png"
import building from "./../assets/images/building.png"
const Hero = () => {
  return (
    <div className='bg-[#C0CAD3] md:rounded-lg'>
    <div className='flex flex-col md:flex-row  md:px-20 mx-auto sm:container mt-4 mx-auto'>
    <div className='px-3 mx-auto flex flex-col gap-5 py-24  w-full'>
        <h1 className='font-bold text-4xl leading-relaxed text-left'>Acquire The Home You Always Wanted</h1>
        <h3 className='text-black text-base text-left'>The home of your dream is all we offer at homly. Our pride is to please you</h3>
        <div className='flex gap-4 items-center w-fit'>
        <button className='px-3 py-3 bg-black text-white rounded-lg'>View A Home</button>
        <div className='w-fit px-0 py-0 flex items-center pt-3'><img src={Play} alt="" className=''/></div>
        </div>
        <div className='flex w-full max-w-xs mx-auto md:mx-[initial] justify-between items-start'>
          <p>
            <h1 className='text-2xl font-bold'>50<span className='text-[#2320AF]'>+</span></h1>
            <h3 className=''>Awards</h3>
          </p>
          <p>
            <h1 className='text-2xl font-bold'>1500<span className='text-[#2320AF]'>+</span></h1>
            <h3>Recently Sold</h3>
          </p>
          <p>
            <h1 className='text-2xl font-bold'>2500<span className='text-[#2320AF]'>+</span></h1>
            <h3>New homes</h3>
          </p>

        </div>
    </div>
      <div>
        <img src={building} alt="" className='w-full h-full'/>
      </div>

    </div>
    </div>
  )
}

export default Hero