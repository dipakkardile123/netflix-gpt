import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import GptSearch from "./GptSearch";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usenowplayingmovies from "../Hooks/Usenowplayingmovies";
import Usepopularmovie from "../Hooks/Usepopularmovie";

const Browse = () => {
  
  const showgptsearch = useSelector(store => store.gpt.showgptsearch);

  
  usenowplayingmovies(); 
  Usepopularmovie();

  return (
    <div className="">
      <Header />
      
      {showgptsearch ? (
      <GptSearch/>
      ) : (
        <>
          <Maincontainer />
          <Secondarycontainer />
        </>
      )}
      
    </div>
  );
};

export default Browse;
