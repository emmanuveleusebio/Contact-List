import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    add: {
        value: false,
    },
    edit: {
        value: false,
        selectedId: null,
    },
    delete: {
        value: false,
        selectedId: null
    },
    pageNo: {
        value: 1,
    },
    search: {
        value: "",
    }
}

const combinedSlice = createSlice({
    name: 'combineToggle',
    initialState,
    reducers: {

        addToggle: (state) => {
            state.add.value = !state.add.value;
        },
        editToggle: (state, action) => {
            state.edit.value = !state.edit.value;
            state.edit.selectedId = action.payload || null;
        },
        deleteToggle: (state, action) => {
            state.delete.value = !state.delete.value;
            state.delete.selectedId = action.payload || null;
        },
        pageCount: (state, action) => {
            state.pageNo.value = action.payload;
        },
        searchValue: (state, action) => {
            state.search.value = action.payload;
        }
    }
})

export const { addToggle, editToggle, deleteToggle, pageCount, searchValue } = combinedSlice.actions;
export default combinedSlice.reducer;