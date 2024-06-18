import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

const editToggleSlice = createSlice({
    name: 'edit',
    initialState: initialState,
    reducers: {
        edittoggle: (state, action) => {
            state.value = !state.value;
            state.selectedId = action.payload;
        }
    }
})


export const { edittoggle } = editToggleSlice.actions;
export default editToggleSlice.reducer;