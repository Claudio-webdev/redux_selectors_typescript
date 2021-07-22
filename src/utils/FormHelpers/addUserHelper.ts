import { inputsVal } from "../../ui/components/Form";
import {ThunkDispatch as Dispatch} from 'redux-thunk';
import { addUser } from "../../store";

const createNewIdForTheNewUser = (
  usersIdList: number[],
  setNewId: (value: number | ((prevVar: number) => number)) => void
  ) => {
  let largest= 0;
  for (let i=0; i<=largest;i++){
      if (usersIdList[i]>largest) {
          largest=usersIdList[i];
      }
  }
  setNewId(largest +1)
}

export const addNewUser = (
  event: React.FormEvent<HTMLFormElement>,
  setNewId: (value: number | ((prevVar: number) => number)) => void,
  newId: number,
  usersIdList: number[],
  setInputsValue: React.Dispatch<React.SetStateAction<inputsVal>>,
  inputsValue: inputsVal,
  dispatch: Dispatch<any, any, any>,
  ) => {
  event.preventDefault();
  createNewIdForTheNewUser(usersIdList, setNewId)
  let newUser = {
    name: inputsValue.name,
    surname: inputsValue.surname,
    id: newId,
  }
  setInputsValue({ name: '', surname: ''})
  dispatch(addUser(dispatch, newUser))
}