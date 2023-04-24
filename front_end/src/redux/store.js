import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducer/rootReducer";
import {applyMiddleware, createStore} from "redux";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
