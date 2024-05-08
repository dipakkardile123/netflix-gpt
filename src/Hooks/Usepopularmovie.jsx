import { useDispatch } from "react-redux";
import {addpopularmovies } from "../utils/Moviesslice";
import { useEffect } from "react";
import { Api_options } from "../utils/Constant";

const Usepopularmovie=()=>{
    
    const dispatch=useDispatch();
const getpopularmovies=async()=>{
  const data=await fetch(
    'https://api.themoviedb.org/3/movie/popular?page=1' ,   Api_options   
  );
  const json=await data.json();
    
  dispatch(addpopularmovies(json.results)); 
}
useEffect(()=>{
  getpopularmovies();
},[])
};
export default Usepopularmovie;