import React from 'react'
// import about from "./../assets/images/About.png"
const About = () => {
  return (
    <div className='bg-About bg-no-repeat bg-cover bg-center mx-auto relative'>
        <div className=' rounded-2xl p-5 md:p-10 pb-4 mt-16 w-full after:content-[""] after:h-full after:w-full after:absolute after:bg-black after:opacity-10 after:mt-0 after:top-0 after:left-0 after:md:hidden'>
        <h1 className='text-black'>About Us</h1>
        <p className='max-w-lg'>Homly has over 1000+ homes ready and available for 
            sell across the countrywe always make our customers
             demand our major priority.We have been in this line of business for over 10years now,we always ensure that our payment services are always fast and reliable,standby agents and customer services ready to take your demand at any given time,we also offer rentage if considered an option for you.
</p>
<div className='flex gap-4 mt-36'>
    <button className='bg-black text-white font-bold rounded-xl px-3 py-2'>Get Started</button>
    <button className='bg-[#F3F2F2] text-black rounded-2xl font-bold px-3 py-2'>Watch A Video</button>
</div>
</div>
    </div>
  )
}

export default About