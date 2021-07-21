import { Dispatch } from "redux";

export const isFetching = (dispatch: Dispatch<any>) => {
  dispatch({ type: 'START_GETTING_USERS'})
}