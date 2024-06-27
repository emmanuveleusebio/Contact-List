import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './features/contactSlice';
import combineToggle from "./features/combineToggle";

export const store = configureStore({
    reducer:{
        contacts: contactsReducer, 
        combine:combineToggle,
    },
})