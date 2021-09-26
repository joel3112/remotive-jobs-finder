import { useState } from 'react';

export const useForm = (initialState = {}, targetKey = 'value') => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target[targetKey],
    });
  };

  return [values, handleInputChange, reset];
};
