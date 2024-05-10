import React from "react";
import Gptsearchbar from "./Gptsearchbar";
import Gptsuggestion from "./Gptsuggestion";
import {bgurl} from "../utils/Constant"


const Gptsearch = () => {
  return (
    <>
      <div className="absolute h-72 -z-20">
        <img
          className="h-screen w-screen"
          src={bgurl}
        />
      </div>
      <div>
        <Gptsearchbar />
        <Gptsuggestion />
      </div>
    </>
  );
};

export default Gptsearch;
