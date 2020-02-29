import React, { useRef, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { useField } from '@unform/core';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const {
    fieldName, registerField, defaultValue, error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);


  return (
    <TextField inputRef={inputRef} defaultValue={defaultValue} {...rest} />
  );
}
