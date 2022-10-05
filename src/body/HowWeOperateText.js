import React from 'react'
import ViewMore from  "./../assets/images/ViewMore.png"
const HowWeOperateText = () => {
return(
    <div className='flex justify-between items-end mt-0 mx-auto sm:container px-3 md:px-20 mt-20 mb-32'>        <div>
        <h1 className='text-2xl md:text-4xl text-center md:text-left w-4/5'>How We Operate</h1>
        <p className='text-[#A4A4A4] mx-auto flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left mb-4 md:mb-6'>At homly we offer the best services,ensuring we have our customers
        needs at hand.</p>
        </div>
        <h1 className='flex gap-4 hidden md:flex'>view More <span><img src={ViewMore} alt="" /></span></h1>
    </div>
) 
}
export default HowWeOperateText