import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
export const searchRepositories = (term: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });
    try {
      const { data } = await axios.get(
        "http://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: data.objects,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_FAIL,
        payload: err,
      });
    }
  };
};
