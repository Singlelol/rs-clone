import { CounterProps } from '../../pages/PlayerSettings-interface';
import arrowImage from '../../images/arror.png';
import './counter.scss';

export const Counter = ({ counter, increase, decrease }: CounterProps) => {
  return (
    <div className='counter'>
      <div className='btn__container'>
        <button type='button' className='control__btn' onClick={decrease}>
          <img
            src={arrowImage}
            className='control__btn-prev'
            alt='delete-player'
          />
        </button>
        <span className='counter__output'>{counter}</span>
        <button type='button' className='control__btn' onClick={increase}>
          <img
            src={arrowImage}
            className='control__btn-next'
            alt='added-player'
          />
        </button>
      </div>
    </div>
  );
};
