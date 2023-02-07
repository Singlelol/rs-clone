import { useState } from 'react';
import { GameField } from '../../components/GameField/GameField';
import { ArrayFieldType } from '../../types/types';
// import { gameField } from '../../components/GameField/gameFieldJSON';
import { createField, checkAvailible } from '../../utilities/utilities';

export const GameFieldPage = () => {
  const [gameField, setGameField] = useState(createField());

  // checkAvailible(gameField, 43).forEach((item) => {
  //   gameField[item].availible = true;
  // });
  console.log(gameField);

  return (
    <div className='grid-container'>
      {gameField.map((item: ArrayFieldType, index: number) => {
        return (
          <GameField
            key={item.id}
            item={item}
            index={index}
            onClick={() => setGameField(checkAvailible(gameField, index))}
          />
        );
      })}
    </div>
  );
};
