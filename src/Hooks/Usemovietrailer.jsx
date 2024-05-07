import { useDispatch } from "react-redux";
import { Api_options } from "../utils/Constant";
import { addtrailervideo } from "../utils/Moviesslice";
import { useEffect } from "react";


const Usemovietrailer=(movieid)=>{
    const dispatch=useDispatch();
    const getmoviesvideo = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+ movieid+"/videos?language=en-US",
          Api_options
        );
        const json = await data.json();
        
        const filterdata = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterdata.length ? filterdata[0] : json.results[0];
        
        
        dispatch(addtrailervideo(trailer))
      };
      useEffect(() => {
        getmoviesvideo();
      }, []);
};
export default Usemovietrailer;