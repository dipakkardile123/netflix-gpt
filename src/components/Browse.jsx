
import Header from "./Header";
import usenowplayingmovies from "../Hooks/Usenowplayingmovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";

const Browse = () => {
  usenowplayingmovies(); 

  return (
    <div className="">
      <Header />
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  );
};

export default Browse;
