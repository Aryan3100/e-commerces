import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Nav = () => {

    const list = (
        <ul className='flex space-x-10 font-medium text-white text-base '>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/shop'}>Shop</Link>
            </li>
            <li>
                <Link to={'/all'}>All Product</Link>
            </li>
           

            <li>
                <Link to={'/new'}>New Arival</Link>
            </li>
        </ul>
    )

  return (
    <nav className=' bg-[#000000] sticky top-0 z-10'  >
      <div className='lg:flex justify-between items-center py-6 rounded px-6'>
      <div className='left py-2  lg:py-0'>
            <h1 className='text-white text-2xl font-bold' >MY SOTRE</h1>
        </div>
        <div className='xm:display-none'>
            {list} 
        </div>
        <div className='flex space-x-2'>
        <Search ></Search>
        <Link to='/login'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg></Link>
        <Link to='/cart'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
  </svg></Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav