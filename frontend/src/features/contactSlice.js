import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { deleteToggle } from './combineToggle';
import { addToggle } from './combineToggle';

export const updateContact = createAsyncThunk('contact/updateContact', async (updatedContact) => {
    const response = await axios.put(`http://localhost:3001/contacts/${updatedContact.id}`, updatedContact);
    return response.data;
});
export const addContact = createAsyncThunk('contact/addContact', async (newContact, { dispatch }) => {
    const response = await axios.post('http://localhost:3001', newContact)
    await dispatch(searchPagination({ search: '', currentPage: 1 }));
    dispatch(addToggle());
    return response.data;
})
export const deleteContact = createAsyncThunk('contact/delete', async (delContact, { dispatch }) => {
    await axios.delete(`http://localhost:3001/${delContact}`, delContact)
    await dispatch(searchPagination({ search: '', currentPage: 1 }));
    dispatch(deleteToggle());
    return delContact;
})
export const searchPagination = createAsyncThunk('contact/searchPagination', async ({ search, currentPage }) => {
    const response = await axios(`http://localhost:3001?search=${encodeURIComponent(search)}&page=${currentPage}`)
    return response.data;
})
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        totalCount: 0,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchPagination.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchPagination.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.contacts = action.payload.contacts;
                state.totalCount = action.payload.totalUsers;
            })
            .addCase(searchPagination.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                const updatedContact = action.payload;
                const existingContact = state.contacts.find(contact => contact._id === updatedContact._id);
                if (existingContact) {
                    existingContact.name = updatedContact.name;
                    existingContact.number = updatedContact.number;
                    existingContact.gender = updatedContact.gender;
                    existingContact.email = updatedContact.email;
                }
            })
            .addCase(addContact.fulfilled, (state, action) => {
            })

            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts = state.contacts.filter(contact => contact._id !== action.payload);

            })
    }
})

export default contactsSlice.reducer;