export interface Counter {
  count: number
};

const initialState: Counter = {
  count: 0,
};

type Action = {
  type: string,
};

const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementedCount = state.count +1
      return {
        ...state,
        count: incrementedCount
      }
    case 'DECREMENT':
      const decrementedCount = state.count -1
      return {
        ...state,
        count: decrementedCount
      }
    default:
      return state
  }
};

export default counterReducer;