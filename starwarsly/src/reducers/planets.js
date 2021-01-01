import { LOAD_PLANET, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

/**
 * Planets reducer
 *
 * @param {{}} state
 * @param {{ type, payload }} action
 */
function planets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_PLANET:
      return {
        ...state,
        [action.payload.id]: { ...action.payload },
      };

    default:
      return state;
  }
}

export default planets;
