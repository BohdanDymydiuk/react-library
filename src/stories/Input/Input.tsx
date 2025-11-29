import React from 'react';

export interface InputProps {
  /** Input type */
  type: 'text' | 'password' | 'number';
  /** Is the input clearable */
  clearable: boolean;
}

export const Input: React.FC<InputProps> = ({ type = 'text', clearable }) => {
  const [value, setValue] = React.useState('');

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const clearHandler = () => {
    setValue('');
  }

  return (
    <div>
      <input
        type={type} 
        value={value} 
        onChange={onChangeHandler}
      />
      {clearable && <button onClick={clearHandler}>Clear</button>}
    </div>
  );
};
