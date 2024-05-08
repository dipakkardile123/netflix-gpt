import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
  const movies=useSelector((store)=>store.movies)
  return (
    <div className='bg-black'>
      <div className='-mt-32 relative z-10 text-white pl-2'>
      <Movielist title={"now playing"}movies={movies.nowplayingmovies}/>
      <Movielist title={"trending"}movies={movies.nowplayingmovies}/>
      <Movielist title={"popular"}movies={movies.addpopularmovies}/>
      <Movielist title={"Upcoming Movies"}movies={movies.nowplayingmovies}/>
      <Movielist title={"Horror"}movies={movies.nowplayingmovies}/>
      </div>
    </div>
  )
}

export default Secondarycontainer