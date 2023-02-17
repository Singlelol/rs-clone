import './checkUp.scss';

const popUpPhase =
  ' Вы можете забить этот проход(дверь/окно). Хотите использовать доски?';
const yes = 'Yes';
const no = 'No';

type BroadPopupType = {
  getBroadAnswer: (arg: boolean) => void;
};

export const CheckBroadPopup = ({ getBroadAnswer }: BroadPopupType) => {
  return (
    <div id='takeItem'>
      <p>{popUpPhase}</p>
      <button type='button' onClick={() => getBroadAnswer(true)}>
        {yes}
      </button>
      <button type='button' onClick={() => getBroadAnswer(false)}>
        {no}
      </button>
    </div>
  );
};
