import { createSlice } from "@reduxjs/toolkit";

const Moviesslice=createSlice({
    name:'movies',
    initialState:{
        nowplayingmovies:null,
        trailervideo:null,
    },
    reducers:{
        addnowplayingmovies:(state,action)=>{
            state.nowplayingmovies=action.payload;
        },
        addtrailervideo:(state,action)=>{
            state.trailervideo=action.payload;
        },
        addpopularmovies:(state,action)=>{
            state.addpopularmovies=action.payload;
        }
    }

})
export const{addnowplayingmovies,addtrailervideo,addpopularmovies}=Moviesslice.actions;
export default Moviesslice.reducer;