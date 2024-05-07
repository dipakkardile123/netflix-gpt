
import {  useSelector } from "react-redux";
import Usemovietrailer from "../Hooks/Usemovietrailer";


const Videobackground = ({movieid}) => {
  const trailervideo=useSelector(store=>store.movies?.trailervideo)
  Usemovietrailer(movieid)


  
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailervideo?.key +"?&autoplay=1"+"&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Videobackground;
