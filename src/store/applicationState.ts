import { combineReducers } from "redux"
import counterReducer from "./counter/reducers";
import userReducer from "./users/user/reducers";

const rootReducer = combineReducers({
  data: userReducer,
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer