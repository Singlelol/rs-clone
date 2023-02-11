/* eslint-disable import/no-cycle */
import { useContext, useState } from 'react';
import { GameField } from '../../components/GameField/GameField';
import { PlayerCard } from '../../components/PlayersCard/PlayerCard';
import { ArrayFieldType, StateType } from '../../types/types';
import {
  createField,
  checkAvailible,
  moveHero,
  startFields,
} from '../../utilities/utilities';
import { Context } from '../../App';
import '../../components/PlayersCard/PlayerCard.scss';
// import { PlayerType } from '../playersPage/PlayerSettings-interface';
// import { Player } from '../../components/Players/Player';

const startField = 133;
let currentField = startField;
let count = 6;

export const GameFieldPage = () => {
  const gameField = createField();
  const [availibleSteps, setAvailibleSteps] = useState(
    checkAvailible(gameField, currentField, count),
  );
  console.log(`currentField: ${currentField}`, `currentField: ${startFields}`);
  const { play } = useContext(Context);

  // create state
  const State: StateType[] = [];
  play.map((pl, i) =>
    State.push({ numberCell: startFields[i], player: pl, count: 6 }),
  );
  console.log('State', State);

  return (
    <div>
      <div className='players-card-wrapper'>
        {play.map((player) => (
          <PlayerCard player={player} />
        ))}
      </div>
      <div className='grid-container'>
        {gameField.map((item: ArrayFieldType, index: number) => {
          return (
            <GameField
              State={State}
              key={item.id}
              item={item}
              index={index}
              availibleSteps={availibleSteps}
              players={play}
              currentField={currentField}
              onClick={() => {
                count -= 1;
                moveHero(gameField, index, play);
                setAvailibleSteps(checkAvailible(gameField, index, count));
                console.log(count);
                currentField = index;
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
