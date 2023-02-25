import { items } from '../../data/items';
import { PlayerType } from '../../pages/playersPage/PlayerSettings-interface';
import './checkUp.scss';

const GO_TEXT = 'Вперед!';

type Ids = {
  persone: PlayerType;
  item: number | undefined;
  setPopup: (arg: boolean) => void;
};

export const ResultPickedPopUp = ({ persone, item, setPopup }: Ids) => {
  const personeName = persone.name;
  const itemName = item ? items[item].name : '';
  const phase = `Персонаж ${personeName} кладет ${itemName} в свой инвентарь`;
  return (
    <div id='pickUpItem'>
      <p>{`${phase}`}</p>
      <button type='button' onClick={() => setPopup(false)}>
        {GO_TEXT}
      </button>
    </div>
  );
};
