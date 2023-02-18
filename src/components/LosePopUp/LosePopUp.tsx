// import { Link } from 'react-router-dom';
import './losepopup.scss';

const popUpPhase = 'Вы проиграли!';
const cite =
  '«Победители никогда не сдаются, а сдавшиеся никогда не побеждают» Винс Ломбарди';
const btnPhase = 'Попробовать еще раз';

export const LosePopUp = () => {
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
