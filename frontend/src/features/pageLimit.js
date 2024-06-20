import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 5,
}

const limitSlice = createSlice({
    name:'dataPerPage',
    initialState,
    reducers : {
        pageLimit:(state, action) => {
            state.value = action.payload;
        }
    } 
})


export const { pageLimit } = limitSlice.actions;
export default limitSlice.reducer;