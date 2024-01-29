import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "UserSLICE",
    initialState : {
       username : "",
    },
    reducers :{
          set : (state,action)=>{
             state.username = action.payload;
        }
    }
})

export const {set} = userSlice.actions;
export default userSlice.reducer;