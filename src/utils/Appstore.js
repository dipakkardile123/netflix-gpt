import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./Usersclice"
import moviesreducer from "./Moviesslice";



const Appstore=configureStore({
    reducer:{
        user:userreducer,
        movies:moviesreducer,   
    }
})
export default Appstore;