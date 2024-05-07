import React from 'react'
import { useSelector } from 'react-redux'
import Videobackground from './Videobackground'
import Videotitle from './Videotitle'

const Maincontainer = () => {
const movies=useSelector(store=>store.movies?.nowplayingmovies)
if(!movies)return;
const mainmovie=movies[0];

const {original_title,overview,id}=mainmovie;

  return (
    <div>
        <Videotitle title={original_title}overview={overview}/>
        <Videobackground movieid={id}/>

    </div>
  )
}

export default Maincontainer