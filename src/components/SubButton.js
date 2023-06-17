import React from 'react';
import { decrease } from '../counterSlice';
import { useDispatch } from 'react-redux';

const SubButtonComponent = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        <button onClick={() => dispatch(decrease())}>-</button>
      </p>
    </div>
  );
};

export default SubButtonComponent;
