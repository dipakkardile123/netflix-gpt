import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[15%] px-15 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold '>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div>
            <button className='bg-white text-black p-2 px-9  hover:bg-opacity-80 text-lg rounded-sm'>▶️ Play</button>
            <button className='mx-2  bg-gray-500 text-black p-2 px-9 bg-opacity-50 text-lg rounded-sm'>More info</button>
        </div>
    
    </div>
    
  )
}

export default Videotitle