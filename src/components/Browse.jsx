
import Header from "./Header";
import usenowplayingmovies from "../Hooks/Usenowplayingmovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import Usepopularmovie from "../Hooks/Usepopularmovie";

const Browse = () => {
  usenowplayingmovies(); 
Usepopularmovie();
  return (
    <div className="">
      <Header />
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  );
};

export default Browse;
