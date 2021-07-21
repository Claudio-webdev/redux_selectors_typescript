import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../store/counter/actions';
import { getCount } from '../../../store/counter/selectors';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  return (
    <div className="ui menu">
      <div className="ui container ">
        <button className="ui button green" onClick={() => increment(dispatch)}><i className="plus icon"></i>ADD</button>
        <button className="ui button negative" onClick={() => decrement(dispatch)}><i className="minus icon"></i>REMOVE</button>
        <span>{count}</span>
      </div>
    </div>
  );
}

export default Counter;