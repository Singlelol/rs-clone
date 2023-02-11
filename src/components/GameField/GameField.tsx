/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
import { GridItemsType } from './GameFieldTypes';
import { ArrayFieldType, StateType } from '../../types/types';
import './GameFieldStyle.scss';
import '../../assets/img/gameField.webp';
import { PlayerType } from '../../pages/playersPage/PlayerSettings-interface';
import { findHeroName } from '../../utilities/utilities';
// import { heroes } from '../../data/heroes';

type GameFieldItemProps = {
  item: ArrayFieldType;
  index: number;
  availibleSteps: number[];
  onClick: () => void;
  players: PlayerType[];
  currentField: number;
  State: StateType[];
};

export const GameField = ({
  item,
  index,
  availibleSteps,
  onClick,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  players,
  State,
  currentField,
}: // State,
GameFieldItemProps) => {
  // console.log(players);
  const attr: GridItemsType = {};
  Object.keys(item).forEach((key) => {
    if (key === 'id') attr.id = `${item[key as keyof typeof item]}`;
    if (key !== 'id') {
      attr[`data-${key}`] = `${item[key as keyof typeof item]}`;
    }
    attr.className = availibleSteps.includes(item.id)
      ? 'grid-item--availible'
      : 'grid-item';
    attr.key = index.toString();
  });

  State.map((elem) => {
    if (elem.numberCell === item.id) {
      const hero = findHeroName(elem.player);
      item.pers = hero;
      return (
        <div
          style={{
            backgroundImage: `url(${item.pers?.image})`,
            backgroundSize: 'cover',
            zIndex: 10,
          }}
          {...attr}
          onClick={() => availibleSteps.includes(item.id) && onClick()}
        >
          {/* {item.id === 133 && <img src={heroes[0].image} alt='123' />} */}
          {/* {item.pers ? console.log(item.pers) : console.log('null')} */}
        </div>
      );
    }
    return (
      <div
        {...attr}
        onClick={() => availibleSteps.includes(item.id) && onClick()}
      />
    );
  });
};
