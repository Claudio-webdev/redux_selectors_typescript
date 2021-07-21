export interface user {
  name: string;
  surname:string;
  id: number;
};

export interface userState {
  fetching : boolean;
  users: user[];
};

const initialState: userState= {
  fetching : false,
  users: [],
};

type Action = {
  type: string,
  payload: user[],
};

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'START_GETTING_USERS' :
      return {
        ...state,
        fetching: true,
      }
    case 'GET_USERS': 
      return {
        ...state,
        fetching: false,
        users: action.payload,
      }
    case 'ADD_USER':
      return {
        ...state,
        fetching: false,
        users: action.payload
      }
    case 'DELETE_USER':
      return {
        ...state,
        fetching:false,
        users: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
