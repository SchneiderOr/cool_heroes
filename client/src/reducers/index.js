import { combineReducers } from "redux";
import hero from "./hero";
import previousHeros from "./previousHeros";
const rootReducer = combineReducers({
  hero,
  previousHeros,
});

export default rootReducer;
