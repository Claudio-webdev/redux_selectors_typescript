import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersId } from '../../../store/users';
import { addNewUser } from '../../../utils/FormHelpers'

export interface inputsVal {
  name: string,
  surname: string
}
export type idNewUser = number
function Form() {
  const [inputsValue, setInputsValue] = useState<inputsVal>({ name: '', surname: ''})
  const [newId, setNewId] = useState<idNewUser>(0)
  const dispatch = useDispatch()
  const usersIdList = useSelector(getUsersId)

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setInputsValue({...inputsValue, name:event.target.value})
  }
  const handleChangeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setInputsValue({...inputsValue, surname:event.target.value})
  }

  return (
    <form className="ui form" onSubmit={(event) => addNewUser(event, setNewId, newId, usersIdList, setInputsValue,inputsValue, dispatch)}>
      <div className="field">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="name" value={inputsValue.name} onChange={(event) => handleChangeName(event)}/>
      </div>
      <div className="field">
        <label htmlFor="">Surname</label>
        <input type="text" placeholder="Surname" value={inputsValue.surname} onChange={(event) => handleChangeSurname(event)}/>
      </div>
      <button className="ui button primary" type="submit">Submit</button>
    </form>
  );
}

export default Form;