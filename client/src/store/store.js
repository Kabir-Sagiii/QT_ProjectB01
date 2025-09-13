import { legacy_createStore } from "redux";
import userReducer from "../reducers/userReducer";

const store = legacy_createStore(userReducer);

export default store;
