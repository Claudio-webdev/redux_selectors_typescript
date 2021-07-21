import { createSelector } from "reselect";
import { RootState } from "../../../applicationState";

export const getUserState = (state: RootState) => state.data

export const getUsers = createSelector(
  getUserState,
  (userState) => userState.users
);

export const getUsersId =  createSelector(
  getUsers,
  (usersId) => usersId.map(({id}) => id)
)