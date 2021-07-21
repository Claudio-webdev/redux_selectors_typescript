import jsonUserList from "../../../../utils/api/jsonUserList"
import { Dispatch } from "redux";


export const deleteUser = (dispatch: Dispatch<any> , id: number) => {
  return async () => {
    await jsonUserList.delete(`/users/${id}`)
    const newResponse = await jsonUserList.get('/users')
    setTimeout(() => {
      dispatch({ type: 'DELETE_USER', payload: newResponse.data})
    }, 1000);
  }
};