import React from 'react'
import ViewMore from  "./../assets/images/ViewMore.png"

const RecentlyBuiltText = () => {
    return(
<div className='flex justify-between items-end mt-0 mx-auto sm:container px-3 md:px-20 mb-32'>
            <div>
        <h1 className='text-black text-center font-bold text-2xl md:text-4xl md:text-left'>Recently Built</h1>
        <p className='text-[#A4A4A4] text-center max-w-lg md:text-left'>Explore to find and acquire your desired property for your comfort
all available at homly.</p>
</div>
<h1 className='gap-4 hidden md:flex'>view More <span><img src={ViewMore} alt="" /></span></h1>
</div>
    )
}

export default RecentlyBuiltText