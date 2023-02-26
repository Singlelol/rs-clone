import './losepopup.scss';

type GameOverProps = {
  isWin: boolean;
};

const winPhraseTitle = 'Вы победили!';
const winPhraseText = `Пришел, увидел, победил! 
Красавчик! `;
const losePhraseTitle = 'Вы проиграли!';
const losePhraseText =
  '«Победители никогда не сдаются, а сдавшиеся никогда не побеждают» Винс Ломбарди';
const btnPhase = 'Попробовать еще раз';

export const GameOverPopUp = ({ isWin }: GameOverProps) => {
  const popUpPhase = isWin ? winPhraseTitle : losePhraseTitle;
  const cite = isWin ? winPhraseText : losePhraseText;
  return (
    <div className='game-over__wrapper'>
      <div className='game-over'>
        <h2 className='game-over__title'>{popUpPhase}</h2>
        <blockquote>
          <p className='game-over__cite'>{cite}</p>
        </blockquote>
        <button type='button' className='game-over__btn'>
          <a href='/' className='btn-link'>
            {btnPhase}
          </a>
        </button>
      </div>
    </div>
  );
};
