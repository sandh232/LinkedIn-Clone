/*
author: Manpreet Sandhu
File: index.js
*/
import { combineReducers } from "redux";

import userReducer from "./userReducer";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});

export default rootReducer;
