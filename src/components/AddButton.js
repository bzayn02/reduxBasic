import React from 'react';
import { increase } from '../counterSlice';
import { useDispatch } from 'react-redux';

const AddButtonComponent = () => {
  const dispatch = useDispatch();

  const handleOnIncrement = () => {
    dispatch(increase());
  };
  return (
    <div>
      <p>
        <button onClick={handleOnIncrement}>+</button>
      </p>
    </div>
  );
};

export default AddButtonComponent;
