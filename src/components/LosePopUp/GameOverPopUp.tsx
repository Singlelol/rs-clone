// import { Link } from 'react-router-dom';
import './losepopup.scss';

type GameOverProps = {
  win: boolean;
};

export const GameOverPopUp = ({ win }: GameOverProps) => {
  const popUpPhase = win ? 'Вы победили!' : 'Вы проиграли!';
  const cite = win
    ? `Пришел, увидел, победил! 
  Красавчик! `
    : '«Победители никогда не сдаются, а сдавшиеся никогда не побеждают» Винс Ломбарди';
  const btnPhase = 'Попробовать еще раз';
  return (
    <div className='lose-popup__wrapper'>
      <div className='lose-popup'>
        <h2 className='lose-popup__title'>{popUpPhase}</h2>
        <blockquote>
          <p className='lose-popup__cite'>{cite}</p>
        </blockquote>
        <button type='button' className='lose-popup__btn'>
          <a href='/' className='btn-link'>
            {btnPhase}
          </a>
        </button>
      </div>
    </div>
  );
};
