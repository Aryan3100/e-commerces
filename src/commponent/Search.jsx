import React, { useEffect, useRef, useState } from 'react'
import User from './User';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Search = () => {

    let ref = useRef();
    const [active, notActive] = useState(false)

    return (
        <div className='flex space-x-2 align-middle'>
            {active == false ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="pointer size-6"
                onClick={() => notActive(prv => !prv)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg> :
               <div className='flex'>
                <input className='bg-teal-100 placeholder-black  px-2 rounded-lg outline-none ' placeholder='Search here..'>
                
                </input>
                <button onClick={()=>notActive(!active)} className='font-bold text-xl relative '>x</button>
               </div>
                }
                
                
        </div>
    )
}

export default Search