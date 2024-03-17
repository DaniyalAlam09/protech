import { useState, useEffect } from 'react';

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const reset = () => {
    setValue('');
  }

  const bind = {
    value,
    onChange: event => setValue(event.target.value)
  }

  return [value, bind, reset]
}