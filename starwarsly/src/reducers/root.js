import { combineReducers } from "redux";
import films from "./films";
import planets from "./planets";
import people from "./people.js";

/**
 * Exports combined reducer function including
 * films, planets, and people reducer functions
 */
export default combineReducers({
  films,
  planets,
  people,
});
