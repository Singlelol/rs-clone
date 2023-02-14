import { items } from '../../data/items';
import { PlayerType } from '../../pages/playersPage/PlayerSettings-interface';
import './checkUp.scss';

const goText = 'Ok!';

type Ids = {
  persone: PlayerType;
  item: number | undefined;
  setPopup: (arg: boolean) => void;
};

export const ResultPickedPopUp = ({ persone, item, setPopup }: Ids) => {
  const personName = persone.name;
  const itemName = item ? items[item].name : '';
  const phrase = `The character ${personName} is put ${itemName} in an inventory`;
  return (
    <div id='pickUpItem'>
      <p>{`${phrase}`}</p>
      <button type='button' onClick={() => setPopup(false)}>
        {goText}
      </button>
    </div>
  );
};
