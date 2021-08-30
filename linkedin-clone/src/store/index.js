import { createStore, applyMiddleWare } from "redux";
import thunkMiddleWare from "redux-thunk";
import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleWare(thunkMiddleWare));

export default store;
