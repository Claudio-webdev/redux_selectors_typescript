import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersId } from '../../../store/users';
import { addUser } from '../../../store/users/user/actions/addUser';
import { addNewUser } from '../../../utils/FormHelpers'

function Form() {
  const [inputsValue, setInputValue] = useState({ name: '', surname: ''})
  const dispatch = useDispatch()
  const idList = useSelector(getUsersId)

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setInputValue({...inputsValue, name:event.target.value})
  }
  const handleChangeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setInputValue({...inputsValue, surname:event.target.value})
  }
  console.log(inputsValue)

  return (
    <form className="ui form" onSubmit={(event) => addNewUser(event, dispatch, addUser, idList, setInputValue)}>
      <div className="field">
        <label htmlFor="">Name</label>
        <input type="text" name="name" placeholder="name" value={inputsValue.name} onChange={(event) => handleChangeName(event)}/>
      </div>
      <div className="field">
        <label htmlFor="">Surname</label>
        <input type="text" name="surname" placeholder="Surname" value={inputsValue.surname} onChange={(event) => handleChangeSurname(event)}/>
      </div>
      <button className="ui button primary" type="submit">Submit</button>
    </form>
  );
}

export default Form;