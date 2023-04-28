import React from 'react';

//import './AccountForm.scss';

export const Input = ({
  id,
  inputClassName,
  labelClassName,
  type,
  name,
  labelId,
  content,
}) => (
  <>
    <label htmlFor={labelId} className={labelClassName}>
      {content}
    </label>
    <input id={id} name={name} type={type} className={inputClassName} />
  </>
);
