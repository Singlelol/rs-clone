import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(1);

  const increase = () => {
    if (counter >= 1 && counter < 5) setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 1 && counter <= 5) setCounter((count) => count - 1);
  };

  return (
    <div className='counter'>
      <div className='btn__container'>
        <button type='button' className='control__btn' onClick={decrease}>
          -
        </button>
        <span className='counter__output'>{counter}</span>
        <button type='button' className='control__btn' onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}
