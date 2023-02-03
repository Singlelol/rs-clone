import './counter.scss';
import { CounterProps } from '../../pages/PlayerSettings-interface';
import arr from '../../images/arror.png';

export default function Counter({ counter, increase, decrease }: CounterProps) {
  return (
    <div className='counter'>
      <div className='btn__container'>
        <button type='button' className='control__btn' onClick={decrease}>
          <img src={arr} className='prev' alt='удалить игрока' />
        </button>
        <span className='counter__output'>{counter}</span>
        <button type='button' className='control__btn' onClick={increase}>
          <img src={arr} className='next' alt='добавить игрока' />
        </button>
      </div>
    </div>
  );
}
