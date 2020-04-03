import { compose, applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        tracklimit: 25
      })
    : null || compose; // if window doesn't have redux extension

const middlewares = [];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default createStore(rootReducer, enhancer);
