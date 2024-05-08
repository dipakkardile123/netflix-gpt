import React from 'react'
import { img_url } from '../utils/Constant'

const Moviecard = ({posterpath}) => {
  return (
    <div className='w-36 pr-2'>
      <img src={img_url+posterpath} alt="img card" />
    </div>
  )
}

export default Moviecard
