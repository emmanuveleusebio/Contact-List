import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        toggleButton: (state) => {
            state.value = !state.value;
        }
    }
})

export const { toggleButton } = counterSlice.actions;
export default counterSlice.reducer;