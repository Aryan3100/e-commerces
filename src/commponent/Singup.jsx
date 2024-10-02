import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Singup = () => {

    const [input , setInput] = useState({
        name:'',
        email:'',
        pass:'',
    })

    const handleChange = (e) =>{
           const {name , value} = e.target;
           setInput({...input,[name]:value})
         
    }

    const handleSumbit = (e) =>{
        e.preventDefault();
        console.log(input)
        setInput({name:'',email:'',pass:''})
    }

  return (
    <div className='flex justify-center align-center '>
        <form onSubmit={handleSumbit} className="login_Form bg-pink-50 mt-20 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">
        <div className='mb-5'>
         <input onChange={handleChange} className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200 ' type="text" value={input.name} name='name' placeholder='Name'/>
         </div >
         <div className='mb-5'>
         <input onChange={handleChange} className='bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200 ' type="email" value={input.email} name='email' placeholder='E-mail'/>
         </div >
           <div className='mb-5'>
           <input onChange={handleChange} className='rounded-md border outline-none px-2 py-2 w-96 bg-pink-50 border-pink-200 placeholder-pink-200' type='password' value={input.pass} name='pass' placeholder='Password'/>
           </div>
            <div className='mb-5' >
            <button  type='sumbit' className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md'  >login</button>
            </div>
            <div>
                    <h2 className='text-black'>Have an account <Link className=' text-pink-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

        </form>
    </div>
  )
}

export default Singup