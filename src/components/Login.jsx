import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[sign,setsign]=useState(true);

    const togglesignin=()=>{
        setsign(!sign)
    }
  return (
    <>
    <div className='absolute h-72 bg-red-500'>
        <Header/>
        <img
         
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"alt="" />
   </div>
    <form className='absolute w-3/12 p-5 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg opacity-80'>
        <h1 className='font-bold text-3Xl py-4'>{sign?"sign in":"sign up"}</h1>
        {!sign &&(
        <input type="text"placeholder='fullname'className='p-2 my-2 w-full bg-gray-800'/>
      )}

        <input type="email"placeholder='Enter a mail'className='p-2 my-2 w-full bg-gray-800'/>
        <input type="password"placeholder='Enter a password'className='p-2 my-2 w-full bg-gray-800'/>
        <button className='p-2 my-6 w-full bg-red-600'> {sign?"sign in":"sign up"}</button>
     <p className='py-4 cursor-pointer'onClick={togglesignin}>{sign?"new to netflix ? sign up now":"Already registerd ?sign in now"}
     
     </p>
    </form>    
    </>
    
  )
}

export default Login;