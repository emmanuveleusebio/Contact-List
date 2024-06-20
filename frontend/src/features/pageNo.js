import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:1,
}

const changePage = createSlice({
    name:'page',
    initialState,
    reducers:{
        setPage: (state, action) => {
            state.value = action.payload;
        }
    }

})

export const { setPage } = changePage.actions;
export default changePage.reducer;