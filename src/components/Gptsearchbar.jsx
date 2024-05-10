import React from 'react'
import lang from '../utils/Language'
import { useDispatch, useSelector } from 'react-redux'

const Gptsearchbar = () => {
  const langkye=useSelector((store)=>store.config.lang)
    const dispatch=useDispatch();
  return (
    <div className='pt-[15%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12 rounded-sm'>
        <input type="text"className='p-1 m-3 mx-1  col-span-9' placeholder= {lang[langkye].gptsearchplaceholder}/>
        <button className='m-1 bg-red-500 col-span-3 text-white rounded-lg'>{lang[langkye].search}</button>

      </form>
    </div>
  )
}

export default Gptsearchbar
