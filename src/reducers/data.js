import produce from "immer";
import { createRoutine } from "redux-saga-routines";

export const fetchDataRoutine = createRoutine("DATA_FETCH");

export const initialState = {
  data: [],
  isLoading: false,
  isLoaded: false,
  error: null
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case fetchDataRoutine.REQUEST: {
        draft.isLoading = true;
        draft.isLoaded = false;
        break;
      }
      case fetchDataRoutine.SUCCESS: {
        draft.isLoaded = true;
        draft.data = action.payload;
        break;
      }
      case fetchDataRoutine.FAILURE: {
        draft.isLoaded = false;
        draft.error = action.payload;
        break;
      }
      case fetchDataRoutine.FULFILL: {
        draft.isLoading = false;
        break;
      }
      default:
        break;
    }
  });
};
