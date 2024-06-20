import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/addToggle';
import contactsReducer from './features/contactSlice'
import editReducer from './features/editToggle'
import deleteReducer from "./features/deleteToggle";
import searchReducer from "./features/search"

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        contacts: contactsReducer,
        edit:editReducer,
        delete:deleteReducer,
        search:searchReducer,
    },
})