import React from 'react';

//import './AccountForm.scss';

export const Input = ({
  // eslint-disable-next-line react/prop-types
  id,
  // eslint-disable-next-line react/prop-types
  inputClassName,
  // eslint-disable-next-line react/prop-types
  labelClassName,
  // eslint-disable-next-line react/prop-types
  type,
  // eslint-disable-next-line react/prop-types
  name,
  // eslint-disable-next-line react/prop-types
  labelId,
  // eslint-disable-next-line react/prop-types
  content,
}) => (
  <>
    <label htmlFor={labelId} className={labelClassName}>
      {content}
    </label>
    <input id={id} name={name} type={type} className={inputClassName} />
  </>
);
