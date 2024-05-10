import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./Usersclice"
import moviesreducer from "./Moviesslice";
import gptreducer from "../utils/Gptsclice"

import configreducer from "./Configfile"

const Appstore=configureStore({
    reducer:{
        user:userreducer,
        movies:moviesreducer,  
        gpt:gptreducer ,
        config:configreducer
    }
})
export default Appstore;