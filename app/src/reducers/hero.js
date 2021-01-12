import { handle } from "redux-pack";
import { endpoints } from "../config";
const LOAD_HERO = "LOAD_HERO";
const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_HERO:
      return handle(state, action, {
        start: (prevState) => ({
          ...prevState,
          isLoading: true,
          error: null,
        }),
        finish: (prevState) => ({ ...prevState, isLoading: false }),
        failure: (prevState) => ({ ...prevState, error: payload }),
        success: (prevState) => ({ ...prevState, ...payload }),
        always: (prevState) => prevState, // unnecessary, for the sake of example
      });
    default:
      return state;
  }
}

// can be in seperate redux/hero/actions module
export function loadHero(query) {
  return {
    type: LOAD_HERO,
    promise: fetch(`${endpoints.heroSearch}/${query}`).then((res) =>
      res.json()
    ),
  };
}
