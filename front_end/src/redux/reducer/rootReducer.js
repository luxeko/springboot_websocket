import {combineReducers} from "redux";
import seatReducer from "./seatReducer";
import positionReducer from "./positionReducer.jsx";
const rootReducer = combineReducers({
    seat: seatReducer,
    position: positionReducer
})
export default rootReducer;