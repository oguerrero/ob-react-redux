import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        // state name: reducer to control
        todosState: todosReducer,
        filterState: filterReducer,
        // ASYNC EXAMPLE
        userState: userReducer
        // ... add more states and reducers to include in the store
    }
)