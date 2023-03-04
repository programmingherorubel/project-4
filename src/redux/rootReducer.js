import { combineReducers } from "redux";
import bookReducer from "./book/reducer/bookReducer";

const rootReducer = combineReducers({
  // Add your reducers here
  book: bookReducer,
});

export default rootReducer;
