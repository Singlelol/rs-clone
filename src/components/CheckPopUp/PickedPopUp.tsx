import { POPUP_PHASE, YES, NO } from './PopUpConst';
import './checkUp.scss';

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
      <div>
        <p>{POPUP_PHASE}</p>
        <button type='button' onClick={popUpHandler}>
          {YES}
        </button>
        <button type='button' onClick={popUpClosed}>
          {NO}
        </button>
      </div>
    </div>
  );
};
