import { handle } from "redux-pack";
import { endpoints } from "../config";
const LOAD_PREVIOUS_HEROS_HISTORY = "LOAD_PREVIOUS_HEROS_HISTORY";

const initialState = {
  isLoading: false,
  error: null,
  totalCount: null,
  success: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_PREVIOUS_HEROS_HISTORY:
      return handle(state, action, {
        start: (prevState) => ({ ...prevState, isLoading: true, error: null }),
        finish: (prevState) => ({ ...prevState, isLoading: false }),
        failure: (prevState) => ({ ...prevState, error: payload }),
        success: (prevState) => ({ ...prevState, ...payload }),
      });
    default:
      return state;
  }
}

export function loadHeros() {
  return {
    type: LOAD_PREVIOUS_HEROS_HISTORY,
    promise: fetch(
      `${endpoints.previousHeros}?limit=10&reverse=true`
    ).then((res) => res.json()),
  };
}
