import React, { useState } from 'react';
import RealTime from './RealTime';
import { useDispatch } from 'react-redux';
import { addListData } from '../../userSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [textData, setTextData] = useState('');

  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setTextData(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addListData(textData));
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="realtimedata" onChange={handleOnChange} />
        <button type="submit">Submit</button>
      </form>

      <RealTime textData={textData} />
    </div>
  );
};

export default Form;
