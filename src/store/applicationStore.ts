import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./applicationState";


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    composeEnhancers && composeEnhancers(),
  )
);
  