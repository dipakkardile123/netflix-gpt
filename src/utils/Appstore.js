import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./Usersclice"

const Appstore=configureStore({
    reducer:{
        user:userreducer,
    }
})
export default Appstore;