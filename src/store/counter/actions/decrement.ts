import { Dispatch } from "react";

export const decrement = (dispatch: Dispatch<any>) => {
  dispatch({ type: 'DECREMENT'})
};
