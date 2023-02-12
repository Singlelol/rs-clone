import './checkUp.scss';

type PopupType = {
  changePopup: () => void;
};

export const PickedPopUp = ({ changePopup }: PopupType) => {
  const popUpHandler = () => {
    changePopup();
  };
  const popUpPhase = 'Do you want to pick up an item?';
  const yes = 'Yes';
  const no = 'No';
  const popUpClosed = () => {
    closePopUp();
  };
  return (
    <div id='takeItem' className='hidden'>
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
