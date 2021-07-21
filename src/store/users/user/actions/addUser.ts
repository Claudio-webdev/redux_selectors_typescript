import jsonUserList from "../../../../utils/api/jsonUserList"
import { Dispatch } from "redux";
import { isFetching } from './isFetching';
import { user } from "../reducers";

export const addUser = (dispatch: Dispatch<any>, newUserData: user) => {
  isFetching(dispatch)
  return async () => {
    await jsonUserList.post('/users', newUserData)
    const newUser = await jsonUserList.get('/users')
    console.log(newUser.data)
    setTimeout(() => {
      dispatch({ type: 'ADD_USER', payload: newUser.data})
    }, 1000);
  }
};