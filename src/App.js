import React, { useEffect, useState } from 'react';

const useLogger = (value) => {
  useEffect(() => {
    console.log('Value changed:', value);
  }, [value]);
};

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const clear = () => setValue('');
  
  return {
    bind: { value, onChange },
    value,
    clear
  }
}

const App = () => {
  const firstName = useInput('');
  const lastName = useInput('');

  useLogger(firstName.value)

  return (
    <div className="container d-flex flex-column align-items-center pt-3">
      <input className="mb-1" type="text" {...firstName.bind} />
      <input className="mb-3" type="text" {...lastName.bind} />
      <button className="btn btn-warning mb-3" onClick={() => { firstName.clear(); lastName.clear();}}>Clear</button>
      <h2>{firstName.value} {lastName.value}</h2>
    </div>
  );
};

export default App;
