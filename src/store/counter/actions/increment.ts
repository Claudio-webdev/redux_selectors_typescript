import { Dispatch } from "react";

export const increment = (dispatch: Dispatch<any>) => {
  dispatch({ type: 'INCREMENT'})
}