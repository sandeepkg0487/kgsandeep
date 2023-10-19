import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
  name:'counter',
  initialState:{
    value:0,
  },
  reducers:{
    inicrement:(state)=>{
      state.value +=1;
    },
    decrement:(state)=>{
  state.value -=1;
    },
  },
})
export const {inicrement ,decrement}=counterSlice.actions;
export default counterSlice.reducer;