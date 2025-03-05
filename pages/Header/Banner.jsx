import React from 'react'

const Banner = () => {
  return (
    <>
      <section className='h-[90vh] max-w-[92%] object-cover banner overflow-hidden rounded-3xl relative'>
      <video autoPlay loop muted playsInline className='w-full h-full object-cover z-0 p-0'> 
         <source src='/video/Header.mp4' type='video/mp4'/>
      </video> 
     
      <div className='absolute z-30 top-auto bottom-4 left-6 header-content block'>
        {/* <div className='w-[800px]'> */}
        <div className='w-[700px]'>
        {/* <h1 className='text-white font-bold text-6xl'>Your Gateway to Immersive 3D & XR Solutions for Industrial Products</h1> */}
        <h1 className='text-white font-bold text-4xl'>Your Gateway to Immersive 3D & XR Solutions for Industrial Products</h1>
         <p className='text-white font-thin text-xl opacity-65'>Simplifying Complex Products with Interactive 3D Animation, AR, VR, and XR Solutions</p>
         <button className='demo-btn'>Book a Demo</button>
         <button className='demo-btn1'>Explore Services</button>
        </div>
      </div>
      </section>

   
    </>
  )
}

export default Banner
