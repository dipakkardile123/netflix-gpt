import { createSlice } from "@reduxjs/toolkit";

const config=createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        chenglang:(state,action)=>{
            state.lang=action.payload;
        }
    }
})
export const{chenglang} = config.actions;
export default config.reducer;