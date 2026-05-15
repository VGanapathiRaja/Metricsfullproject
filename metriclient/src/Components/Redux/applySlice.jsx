import { createSlice } from "@reduxjs/toolkit";

const Apply = createSlice({
    name:"apply",
    initialState: {data: 10},
    reducers:{
        apply: (state)=>{
            state.data +=1 
        },
        applydrop: (state)=>{
            state.data =0;
        }
    }
});
export const {apply, applydrop} = Apply.actions;
export default Apply.reducer;