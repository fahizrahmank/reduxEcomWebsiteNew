import { createSlice } from "@reduxjs/toolkit";

 const UserSlice = createSlice({
    name:'users',
    initialState:[],
    reducers:{
        addUser :(state,action)=>{
            state.push(action.payload)
        }


    }
})

export const {addUser} = UserSlice.actions;
export default UserSlice.reducer;

