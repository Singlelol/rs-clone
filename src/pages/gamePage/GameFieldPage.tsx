/* eslint-disable import/no-cycle */
import { useContext, useState } from 'react';
import { GameField } from '../../components/GameField/GameField';
import { PlayerCard } from '../../components/PlayersCard/PlayerCard';
import { ArrayFieldType, StateType } from '../../types/types';
import {
  createField,
  checkAvailible,
  startFields,
  findHeroName,
  addItemInBack,
} from '../../utilities/utilities';
import { Context } from '../../App';
import '../../components/PlayersCard/PlayerCard.scss';
import { ItemType } from '../../data/items';

// заглушка, рандомное создание ходов игрока
const count = Math.round(Math.random() * 10);

export const GameFieldPage = () => {
  const { play } = useContext(Context);
  // создание массива игроков для отслеживания номера ячейки, кол-во ходов, статуса активности
  const PlayersStatus: StateType[] = [];
  // eslint-disable-next-line array-callback-return
  play.map((pl, i) => {
    const activeStatus = i === 0;
    PlayersStatus.push({
      id: i,
      numberCell: startFields[i],
      player: pl,
      count,
      isActive: activeStatus,
    });
  });

  const gameField = createField();
  // при первом старте находит героя у которого isActive
  const current = PlayersStatus.find(
    (elem) => elem.isActive === true,
  ) as StateType;

  const [currentPlayer, setCurrentPlayer] = useState(current);

  const [startArr, setStartArr] = useState(startFields);
  const [availibleSteps, setAvailibleSteps] = useState(
    checkAvailible(
      gameField,
      currentPlayer.numberCell,
      currentPlayer.count,
      currentPlayer.player,
    ),
  );

  // картинка героя
  const getHeroImage = (id: number) => {
    const item = PlayersStatus.find((elem) => elem.numberCell === id);
    if (item) {
      const hero = findHeroName(item?.player);
      return hero ? hero.image : '';
    }
    return '';
  };

  // картинкb айтемов
  // const getItemImage = (id: number) => {
  //   const itemImage = ItemArray[0] ? ItemArray[0].image : '';
  //   ItemArray.shift();
  //   console.log(itemImage, ItemArray);
  //   return itemImage;
  // };

  const checkItem = (item: ItemType | undefined) => {
    const itemType = item ? item.type : '';
    if (itemType === 'monster') {
      console.log(`oh noooo, its ${item?.name}`);
    }
    if (itemType === 'weapon' || itemType === 'items') {
      console.log(`yeees, its ${item?.name}`);
      addItemInBack(currentPlayer.player, item);
    }
  };

  // изменения массива стартовых значений
  const changeStartFields = (id: number, index: number) => {
    currentPlayer.numberCell = index;
    startArr[id] = index;
    setStartArr(startArr);
  };

  // проверка состояния счетчика, если 0, то меняем персонажа
  const checkCounter = (counter: number) => {
    if (counter === 0 && PlayersStatus.length === 1) {
      console.log('new round');
      currentPlayer.count = count;
      setCurrentPlayer(currentPlayer);
    } else if (counter === 0 && PlayersStatus.length !== 1) {
      console.log('new person');
      const indexPlayer = PlayersStatus.findIndex(
        (elem) => elem.player.id === currentPlayer.player.id,
      );
      const currentIndex =
        indexPlayer + 1 < PlayersStatus.length ? indexPlayer + 1 : 0;
      PlayersStatus[indexPlayer].isActive = false;
      PlayersStatus[currentIndex].isActive = true;
      // тупой кусок кода
      currentPlayer.id = PlayersStatus[currentIndex].id;
      currentPlayer.count = count;
      currentPlayer.isActive = true;
      currentPlayer.numberCell = PlayersStatus[currentIndex].numberCell;
      currentPlayer.player = PlayersStatus[currentIndex].player;
      setCurrentPlayer(currentPlayer);
    }
    setAvailibleSteps(
      checkAvailible(
        gameField,
        currentPlayer.numberCell,
        currentPlayer.count,
        currentPlayer.player,
      ),
    );
  };

  // слушатель кнопки(создает массив активных ячеек, меняет массив стартовых ячеек и currentPlayer.numberCell)
  const fieldHandler = (index: number, item: ItemType | undefined) => {
    currentPlayer.count -= 1;
    setAvailibleSteps(
      checkAvailible(
        gameField,
        index,
        currentPlayer.count,
        currentPlayer.player,
      ),
    );
    changeStartFields(currentPlayer.id, index);
    checkCounter(currentPlayer.count);
    checkItem(item);
  };

  return (
    <div>
      <div className='players-card-wrapper'>
        {play.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>

      <div className='grid-container'>
        {gameField.map((item: ArrayFieldType, index: number) => {
          return (
            <GameField
              url={startArr.includes(item.id) && getHeroImage(item.id)}
              // itemUrl={
              //   randomItemField.includes(item.id) && getItemImage(item.id)
              // }
              key={item.id}
              item={item}
              index={index}
              availibleSteps={availibleSteps}
              currentField={currentPlayer.numberCell}
              onClick={() => fieldHandler(index, item.item)}
            />
          );
        })}
        {/* {true && <div />} */}
      </div>
    </div>
  );
};
