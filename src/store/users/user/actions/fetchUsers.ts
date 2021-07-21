import jsonUserList from '../../../../utils/api/jsonUserList';
import { Dispatch } from "redux";
import { isFetching } from './isFetching';

export const fetchUsers = (dispatch: Dispatch<any>) => {
  return async () => {
    isFetching(dispatch)
    try {
      const response = await jsonUserList.get('/users')
      dispatch({ type: 'GET_USERS', payload: response.data });
    } catch (error) {
      throw new Error('Probably the server is down or check the given link')
    }
  }
};

