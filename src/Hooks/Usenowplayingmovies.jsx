import { useDispatch } from "react-redux";
import { addnowplayingmovies } from "../utils/Moviesslice";
import { useEffect } from "react";
import { Api_options } from "../utils/Constant";

const Usenowplayingmovies=()=>{
    
    const dispatch=useDispatch();
const getnowplayingmovies=async()=>{
  const data=await fetch(
    'https://api.themoviedb.org/3/movie/now_playing?page=1', 
    Api_options   
  );
  const json=await data.json();
    
  dispatch(addnowplayingmovies(json.results)); 
}
useEffect(()=>{
  getnowplayingmovies();
},[])
};
export default Usenowplayingmovies;