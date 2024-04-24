import { createSlice } from "@reduxjs/toolkit";

const Usersclice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        adduser:(state,action)=>{
            return action.payload;
        },
        removeuser:(state,action)=>{
            return null;
        }
    }
})
export const{adduser,removeuser}=Usersclice.actions;
export default Usersclice.reducer