import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/addToggle';
import contactsReducer from './features/contactSlice'
import editReducer from './features/editToggle'
import deleteReducer from "./features/deleteToggle";
import searchReducer from "./features/search";
import pageLimitReducer from "./features/pageLimit";
import pageCount from "./features/pageNo"


export const store = configureStore({
    reducer:{
        counter:counterReducer,
        contacts: contactsReducer,
        edit:editReducer,
        delete:deleteReducer,
        search:searchReducer,
        pageLimit:pageLimitReducer,
        page:pageCount,
    },
})