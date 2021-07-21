export const addNewUser = (event, dispatch, addUser, idList, setInputValue) => {
  event.preventDefault();
  const idValue = createNewId(idList)
  let newUser = {
    id: idValue,
    name: event.target.name.value,
    surname: event.target.surname.value,
  }
  setInputValue({ name: '', surname: ''})
  dispatch(addUser(dispatch, newUser))
}

export const createNewId = (idList) => {
  const lista = idList
  const limitItems = 14
  if(lista.length < lista.length + 1){
    var newId = Math.floor(Math.random() * limitItems) + 1;
    if (lista.includes(newId)) {
      if (limitItems === lista.length) {
        alert('non ci sono più numeri disponibili, aumentare limite')
        return
      }
      return createNewId(idList)
    }
     return newId 
  }
}
