import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}
const deleteToggleSlice = createSlice({
    name: 'delete',
    initialState: initialState,
    reducers: {
        deleteToggle: (state, action) => {
            state.value = !state.value;
            state.selectedId = action.payload;
        }
    }
})

export const { deleteToggle } = deleteToggleSlice.actions;
export default deleteToggleSlice.reducer