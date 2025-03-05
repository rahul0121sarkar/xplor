import React from 'react'

const Header = () => {
  return (
    <>
        <nav className='flex justify-between items-center'>
                <div>
                    <img src="/banner.png" className='h-[65px]' alt="" />
                </div>

                <div className='inline-flex list-none text-xl at'>
                    <li className='hover:text-sky-700 cursor-pointer'>Services</li>
                    <li className='hover:text-sky-700 cursor-pointer'>Portfolio</li>
                    <li className='hover:text-sky-700 cursor-pointer'>About</li>
                    <li className='hover:text-sky-700 cursor-pointer'>Contact us</li>
                </div>
        </nav>
    </>
  )
}

export default Header
