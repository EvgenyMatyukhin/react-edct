import { combineReducers, legacy_createStore } from "redux";
import dialogReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer
});

let store = legacy_createStore(reducers);

export default store;