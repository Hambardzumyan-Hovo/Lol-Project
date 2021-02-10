import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import championsReducer from "./champions-reducer";
import champInfoReducer from "./championInfo-reducer";

let reducers = combineReducers({
  champs: championsReducer,
  champInfo: champInfoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
