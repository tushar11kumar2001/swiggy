import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
      name:"cart",//name of the slice
      initialState:{
        restaurantName : "",
        items:[],
      },
      reducers :{
        //it provides the action for add , read , delete which function want to preform;
        addRestaurantName : (state,action)=>{
              state.restaurantName =  action.payload;
        },
        add : (state,action)=>{
            state.items.push(action.payload);
        },
        removeItems : (state,action)=>{
           state.items = state.items.filter((e)=>e?.card?.info?.name!=action.payload?.card?.info?.name)
        },
        clearCart : (state)=>{
            state.items.length = 0;
        }
    }
})


export const {add,removeItems,clearCart , addRestaurantName} = cartSlice.actions;
export default cartSlice.reducer;