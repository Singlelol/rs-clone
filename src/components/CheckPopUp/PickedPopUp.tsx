import './checkUp.scss';

const popUpPhase = 'Выхотите поднять предмет?';
const yes = 'Да';
const no = 'Нет';

type PopupType = {
  getAnswer: (isYes: boolean) => void;
};

export const PickedPopUp = ({ getAnswer }: PopupType) => {
  const popUpHandler = () => {
    getAnswer(true);
  };
  const popUpClosed = () => {
    getAnswer(false);
  };
  return (
    <div id='takeItem'>
      <p>{popUpPhase}</p>
      <button type='button' onClick={() => popUpHandler()}>
        {yes}
      </button>
      <button type='button' onClick={() => popUpClosed()}>
        {no}
      </button>
    </div>
  );
};
