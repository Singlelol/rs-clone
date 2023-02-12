import { heroes } from '../../data/heroes';
import { items } from '../../data/items';
import './checkUp.scss';

type Ids = {
  persone: number;
  item: number;
};

export const checkId = (item: number) => {
  if (item > 3) return true;
  return false;
};

export const PickedPopUp = () => {
  return (
    <div id='takeItem' className='hidden'>
      <p>Do you want to pick up an item?</p>
      <button type='button'>Yes</button>
      <button type='button'>No</button>
    </div>
  );
};

export const ResultPickedPopUp = ({ persone, item }: Ids) => {
  const personName = heroes[persone - 1].name;
  const itemName = items[item - 1].name;
  const usedItemPhrase = `The character ${personName} is put ${itemName} in an inventory`;
  const monsterPhrase = `The character ${personName} met the monster ${itemName}. The battle is unavoidable!`;
  const phrase = checkId(item) === true ? usedItemPhrase : monsterPhrase;
  return (
    <div id='pickUpItem' className='hidden'>
      <p>{`${phrase}`}</p>
      <button type='button'>Go!</button>
    </div>
  );
};
