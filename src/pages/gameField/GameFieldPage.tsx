// import { GameField } from '../../components/GameField/GameField';
import { GameField } from '../../components/GameField/GameField';
import { gameField } from '../../components/GameField/gameFieldJSON';
import { GameFieldItem } from '../../components/GameField/GameFieldTypes';

export const GameFieldPage = () => {
  return (
    <div className='grid-container'>
      {gameField.map((item: GameFieldItem, index: number) => {
        return <GameField item={item} index={index} />;
      })}
    </div>
  );
};
