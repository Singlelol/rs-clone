import './counter.scss';
import { CounterProps } from '../../pages/PlayerSettings-interface';

export default function Counter({ counter, increase, decrease }: CounterProps) {
  return (
    <div className='counter'>
      <div className='btn__container'>
        <button type='button' className='control__btn' onClick={decrease}>
          Удалить игрока
        </button>
        <span className='counter__output'>{counter}</span>
        <button type='button' className='control__btn' onClick={increase}>
          Добавить игрока
        </button>
      </div>
    </div>
  );
}
