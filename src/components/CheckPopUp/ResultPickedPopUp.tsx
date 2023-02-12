import { heroes } from '../../data/heroes';
import { items } from '../../data/items';
import { checkId } from './CheckPopUp';
import './checkUp.scss';

type Ids = {
  persone: number;
  item: number;
};

export const ResultPickedPopUp = ({ persone, item }: Ids) => {
  const goNextTurn = () => {
    goNextTurn();
  };
  const goText = 'Go!';
  const personName = heroes[persone - 1].name;
  const itemName = items[item - 1].name;
  const usedItemPhrase = `The character ${personName} is put ${itemName} in an inventory`;
  const monsterPhrase = `The character ${personName} met the monster ${itemName}. The battle is unavoidable!`;
  const phrase = checkId(item) === true ? usedItemPhrase : monsterPhrase;
  return (
    <div id='pickUpItem' className='hidden'>
      <p>{`${phrase}`}</p>
      <button type='button' onClick={() => goNextTurn()}>
        {goText}
      </button>
    </div>
  );
};
