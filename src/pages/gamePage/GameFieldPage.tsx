import { useState } from 'react';
import { GameField } from '../../components/GameField/GameField';
import { ArrayFieldType } from '../../types/types';
import { createField, checkAvailible } from '../../utilities/utilities';

export const GameFieldPage = () => {
  const gameField = createField();
  const [availibleSteps, setAvailibleSteps] = useState(
    checkAvailible(gameField, 133),
  );

  return (
    <div className='grid-container'>
      {gameField.map((item: ArrayFieldType, index: number) => {
        return (
          <GameField
            key={item.id}
            item={item}
            index={index}
            availibleSteps={availibleSteps}
            onClick={() => setAvailibleSteps(checkAvailible(gameField, index))}
          />
        );
      })}
    </div>
  );
};
