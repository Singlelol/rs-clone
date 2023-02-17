import './checkUp.scss';

type PopupType = {
  getAnswer: (isYes: boolean) => void;
};

export const PickedPopUp = ({ getAnswer }: PopupType) => {
  const popUpHandler = () => {
    getAnswer(true);
    console.log('popup');
  };
  const popUpPhase = 'Do you want to pick up an item?';
  const yes = 'Yes';
  const no = 'No';
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
