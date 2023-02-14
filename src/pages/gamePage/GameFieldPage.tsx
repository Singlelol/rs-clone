/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { useContext, useState } from 'react';
import { GameField } from '../../components/GameField/GameField';
import { PlayerCard } from '../../components/PlayersCard/PlayerCard';
import { ArrayFieldType, StateType } from '../../types/types';
import {
  createField,
  checkAvailible,
  startFields,
  addItemInBack,
  addHeroHelth,
  getHeroImage,
} from '../../utilities/utilities';
import { Context } from '../../App';
import '../../components/PlayersCard/PlayerCard.scss';
import { PickedPopUp } from '../../components/CheckPopUp/PickedPopUp';
import { ResultPickedPopUp } from '../../components/CheckPopUp/ResultPickedPopUp';
import { SpinnerPage } from '../controlPanelPage/SpinnerPage';

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

  // изменение текущего игрока
  const [currentPlayer, setCurrentPlayer] = useState(current);
  // изменения массива стартовых значений
  const [startArr, setStartArr] = useState(startFields);
  // изменение массива текущих шагов
  const [availibleSteps, setAvailibleSteps] = useState(
    checkAvailible(
      gameField,
      currentPlayer.numberCell,
      currentPlayer.count,
      currentPlayer.player,
    ),
  );
  // изменение статусы ответа пользователя при открытии ячейки с карточкой
  // const [spiner, setSpiner] = useState(0);
  // изменение статусы ответа пользователя при открытии ячейки с карточкой
  const [answer, setAnswer] = useState(false);
  // изменение видимости попапа при подборе айтемов
  const [popup, setPopup] = useState(false);
  // изменение видимости попапа боя с монстром
  // const [battlePopup, setBattlePopup] = useState(false);

  // const [isHumanWin, setIsHumanWin] = useState(false);

  // проверить тип карточки и забрать/начать бой
  const checkItem = (item: ArrayFieldType) => {
    if (item.item && item.item?.id < 4) {
      console.log(`oh noooo, its ${item.item?.name}`);
      if (item.item) item.item.itemStatus = 'open';
      // setBattlePopup(true);
    }
    if (item.item && item.item?.id > 3) {
      console.log(`yeees, its ${item.item?.name}`);
      if (item.item) item.item.itemStatus = 'delete';
      if (item.item && item.item.id === 4) {
        addHeroHelth(currentPlayer.player);
      } else {
        addItemInBack(currentPlayer.player, item.item);
      }
      setPopup(true);
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
      // TODO: переделать
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

  const fieldHandler = (index: number, item: ArrayFieldType) => {
    console.log(currentPlayer.count);
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
    // checkCounter(currentPlayer.count);
    if (item.item) {
      setAnswer(true);
    }
  };

  const getAnswer = (isYes: boolean) => {
    console.log(currentPlayer.numberCell);
    setAnswer(false);

    if (isYes) {
      checkItem(gameField[currentPlayer.numberCell]);
      currentPlayer.count = 0;
      checkCounter(currentPlayer.count);
    }
    // currentPlayer.count -= 1;
    // fieldHandler(currentPlayer.numberCell);
  };

  // слушатель кнопки(создает массив активных ячеек, меняет массив стартовых ячеек и currentPlayer.numberCell)

  // const change = () => {
  //   currentPlayer.count -= 1;
  //   setAvailibleSteps(
  //     checkAvailible(
  //       gameField,
  //       index,
  //       currentPlayer.count,
  //       currentPlayer.player,
  //     ),
  //   );
  //   changeStartFields(currentPlayer.id, index);
  //   checkCounter(currentPlayer.count);
  // };

  const currentField = gameField[currentPlayer.numberCell];
  return (
    <div>
      <div className='players-card-wrapper'>
        {play.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
      {answer && <PickedPopUp getAnswer={getAnswer} />}

      {popup && (
        <ResultPickedPopUp
          persone={currentPlayer.player}
          item={
            currentField.item && currentField.item.id > 3
              ? gameField[currentPlayer.numberCell].item?.id
              : undefined
          }
          setPopup={setPopup}
        />
      )}

      <div className='grid-container'>
        {gameField.map((item: ArrayFieldType, index: number) => {
          return (
            <GameField
              url={
                startArr.includes(item.id) &&
                getHeroImage(item.id, PlayersStatus)
              }
              key={item.id}
              item={item}
              index={index}
              availibleSteps={availibleSteps}
              onClick={() => fieldHandler(index, item)}
            />
          );
        })}

        {/* {battlePopup && (
          <BattlePopUp
            player={currentPlayer.player}
            item={
              currentField.item && currentField.item.id < 4
                ? gameField[currentPlayer.numberCell].item
                : undefined
            }
            setBattlePopup={setBattlePopup}
            setIsHumanWin={setIsHumanWin}
          />
        )} */}
      </div>
      {currentPlayer.count === 1 && (
        <div className='spinner-page'>
          <SpinnerPage />
        </div>
      )}
    </div>
  );
};
