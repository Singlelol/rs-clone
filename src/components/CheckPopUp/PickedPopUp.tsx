import './checkUp.scss';

const popUpPhase = 'Do you want to pick up an item?';
const yes = 'Yes';
const no = 'No';

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
