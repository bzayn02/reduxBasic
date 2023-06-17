import React from 'react';
import { useSelector } from 'react-redux';

const DisplayComponent = () => {
  const { counter } = useSelector((state) => state.counterData);
  const { form } = useSelector((state) => state.formData);
  return (
    <div>
      {counter}
      {form.map((item) => (
        <ul>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
};

export default DisplayComponent;
