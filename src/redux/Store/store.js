import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";

// const rootReducer = (state = initialState, action ) => {
//     return state;
// }

export const store = configureStore({
    reducer: {
        contacts: [],
        filter: null,
    }
});