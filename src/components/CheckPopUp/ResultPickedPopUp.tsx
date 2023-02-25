import { items } from '../../data/items';
import { PlayerType } from '../../pages/playersPage/PlayerSettings-interface';
import './checkUp.scss';

const GOTEXT = 'Вперед!';

type Ids = {
  persone: PlayerType;
  item: number | undefined;
  setPopup: (arg: boolean) => void;
};

export const ResultPickedPopUp = ({ persone, item, setPopup }: Ids) => {
  const PERSONNAME = persone.name;
  const ITEMNAME = item ? items[item].name : '';
  const PHASE = `Персонаж ${PERSONNAME} кладет ${ITEMNAME} в свой инвентарь`;
  return (
    <div id='pickUpItem'>
      <p>{`${PHASE}`}</p>
      <button type='button' onClick={() => setPopup(false)}>
        {GOTEXT}
      </button>
    </div>
  );
};
