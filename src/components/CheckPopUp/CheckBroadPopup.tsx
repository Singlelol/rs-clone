import { POPUP_BROAD_PHASE, YES, NO } from './PopUpConst';
import './checkUp.scss';

type BroadPopupType = {
  getBroadAnswer: (arg: boolean) => void;
};

export const CheckBroadPopup = ({ getBroadAnswer }: BroadPopupType) => {
  return (
    <div id='takeItem'>
      <div>
        <p>{POPUP_BROAD_PHASE}</p>
        <button type='button' onClick={() => getBroadAnswer(true)}>
          {YES}
        </button>
        <button type='button' onClick={() => getBroadAnswer(false)}>
          {NO}
        </button>
      </div>
    </div>
  );
};
