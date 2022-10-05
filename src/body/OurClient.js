import React from 'react'
import client1 from "./../assets/images/client1.png"
import client2 from "./../assets/images/client2.png"
import client3 from "./../assets/images/client3.png"
const OurClient = () => {
  return (
    <div className='flex flex-col container mx-auto items-center w-5/6'>
        <h1>Our Clients Voice</h1>
        <p>Homly uses the review from our clients to better improve on our
management and style.</p>
<div className='flex flex-col md:flex-row mx-auto items-center gap-12'>
<div className='flex flex-col items-center  bg-white rounded-xl'>
    <div>
        <p>Nate Peterson</p>
        <p>Crypto Trader</p>
    </div>
    <div><img src={client1} alt='' /></div>
    <div>
    Homly made me achieve my childhood dreams of owning a property in Dubia.Thanks homly
    </div>
</div>
<div className='flex flex-col items-center bg-white rounded-xl'>
    <div>
        <p>Okon Neo</p>
        <p>Farmer</p>
    </div>
    <div><img src={client2} alt='' /></div>
    <div>
    Homly made me achieve my childhood dreams of owning a property in Dubia.Thanks homly
    </div>
</div>
<div className='flex flex-col items-center bg-white rounded-xl'>
    <div>
        <p>Cindy Evans</p>
        <p>Entreprenuer</p>
    </div>
    <div><img src={client3} alt='' /></div>
    <div>
    Homly made me achieve my childhood dreams of owning a property in Dubia.Thanks homly
    </div>
</div>
</div>
    </div>
  )
}

export default OurClient