/* eslint-disable array-callback-return */
/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { useCallback, useContext, useEffect, useState } from 'react';
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
  closeWindow,
  endFields,
  checkWin,
  checkAllWin,
} from '../../utilities/utilities';
import { Context } from '../../App';
import { PickedPopUp } from '../../components/CheckPopUp/PickedPopUp';
import { ResultPickedPopUp } from '../../components/CheckPopUp/ResultPickedPopUp';
import { SpinnerPage } from '../../components/Spiner/SpinnerPage';
import { MoveCounter } from '../../components/MoveCounter/MoveCounter';
import { CheckBroadPopup } from '../../components/CheckPopUp/CheckBroadPopup';
import { BattlePopUp } from '../../components/battleField/battleField';
import {
  bordersBottomIndex,
  bordersLeftIndex,
  bordersRightIndex,
  bordersTopIndex,
  bordersWindowBottomIndex,
  bordersWindowLeftIndex,
  bordersWindowRightIndex,
  bordersWindowTopIndex,
} from '../../data/border';
import { GameOverPopUp } from '../../components/LosePopUp/GameOverPopUp';
import '../../components/PlayersCard/PlayerCard.scss';
import './gamePage.scss';

const OPEN_STATUS = 'open';
const CLOSE_STATUS = 'close';
const DELETE_STATUS = 'delete';

export const GameFieldPage = () => {
  const { play } = useContext(Context);
  // границы и окна/двери
  const bordersArray = [
    bordersRightIndex,
    bordersLeftIndex,
    bordersBottomIndex,
    bordersTopIndex,
    bordersWindowRightIndex,
    bordersWindowLeftIndex,
    bordersWindowBottomIndex,
    bordersWindowTopIndex,
  ];
  const [borders, setBorders] = useState(bordersArray);

  // спинер
  const [spiner, setSpiner] = useState(0);

  // создание массива игроков для отслеживания номера ячейки, кол-во ходов, статуса активности
  const PlayersStatus: StateType[] = [];

  play.map((pl, i) => {
    const activeStatus = i === 0;
    PlayersStatus.push({
      id: i,
      numberCell: startFields[i],
      player: pl,
      count: spiner,
      isActive: activeStatus,
    });
  });

  const gameField = createField(borders);
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
      spiner,
      currentPlayer.player,
    ),
  );

  // проверка статуса ответа пользователя при попытке воспользоваться досками
  const [startGame, setStartGame] = useState(true);

  // проверка статуса ответа пользователя при попытке воспользоваться досками
  const [applyBoards, setapplyBoards] = useState(false);

  // изменение статусы ответа пользователя при открытии ячейки с карточкой
  const [answer, setAnswer] = useState(false);

  // изменение видимости попапа при подборе айтемов
  const [popup, setPopup] = useState(false);

  // изменение видимости попапа боя с монстром
  const [battlePopup, setBattlePopup] = useState(false);

  const [isHumanWin, setIsHumanWin] = useState(false);

  const [isRunAway, setIsRunAway] = useState(false);

  const [isBattleEnd, setIsBattleEnd] = useState(false);

  // проверка на выйгрыш/проигрыш
  const [gameWin, setGameWin] = useState(false);
  const [gameLose, setGameLose] = useState(false);

  // проверить тип карточки и забрать/начать бой
  const checkItem = (item: ArrayFieldType) => {
    if (item.item && item.item?.id < 4) {
      if (!isBattleEnd) {
        setBattlePopup(true);
      }
    }
    if (item.item && item.item?.id > 3) {
      if (item.item) item.item.itemStatus = DELETE_STATUS;
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

  const checkResultBattle = (item: ArrayFieldType) => {
    if (isHumanWin && !isRunAway) {
      item.item!.itemStatus = DELETE_STATUS;
      setIsHumanWin(false);
      setIsBattleEnd(false);
    } else if (!isHumanWin && !isRunAway && isBattleEnd) {
      item = { ...item, item: currentPlayer.player.hero.inventory[0], pers: undefined};
      setIsBattleEnd(false);
    }
    if (isRunAway) {
      currentPlayer.count = spiner;
      setCurrentPlayer(currentPlayer);
      item.item!.itemStatus = OPEN_STATUS;
      setIsRunAway(false);
      setIsBattleEnd(false);
    }
  };

  const findNextIndex = (indexPlayer: number): number | boolean =>{
    const prevIndexArray = PlayersStatus.slice(0, indexPlayer+1);
    const nextIndexArray = PlayersStatus.slice(indexPlayer+1);

    if (nextIndexArray.find(el => el.player.hero.health)){
      const alivePlayer = nextIndexArray.findIndex(el => el.player.hero.health) as number;
      const index = alivePlayer + prevIndexArray.length;
      return index;
    }
    if(prevIndexArray.find(el => el.player.hero.health)){
      return prevIndexArray.findIndex(el => el.player.hero.health) as number;
    }
    return false; 
  }

  // проверка состояния счетчика, если 0, то меняем персонажа
  const checkCounter = (counter: number) => {
    if (counter === 0 && PlayersStatus.length === 1) {
      currentPlayer.count = spiner;
      setCurrentPlayer(currentPlayer);
    } else if (counter === 0 && PlayersStatus.length > 1) {
      if (!startGame) {
        const indexPlayer = PlayersStatus.findIndex(
          (elem) => elem.player.id === currentPlayer.player.id,
        );
        const index = findNextIndex(indexPlayer);
        const currentIndex: number = (index !== false ? index : setGameLose(true)) as number;
        PlayersStatus[indexPlayer].isActive = false;
        PlayersStatus[currentIndex].isActive = true;
        // TODO: переделать
        currentPlayer.id = PlayersStatus[currentIndex].id;
        currentPlayer.count = spiner;
        currentPlayer.isActive = true;
        currentPlayer.numberCell = PlayersStatus[currentIndex].numberCell;
        currentPlayer.player = PlayersStatus[currentIndex].player;
      } else {
        currentPlayer.count = spiner;
      }
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

  // проверка на победу в игре
  const winCheck = () => {
    if (PlayersStatus.length > 1 && checkAllWin(PlayersStatus)) {
      setGameWin(true);
    }
    if (PlayersStatus.length === 1 && checkWin(currentPlayer)) {
      setGameWin(true);
    }
  };

  // слушатель кнопки(создает массив активных ячеек, меняет массив стартовых ячеек и currentPlayer.numberCell)
  const fieldHandler = (index: number, item: ArrayFieldType) => {
    setPopup(false);
    currentPlayer.count -= 1;
    if (currentPlayer.count === 0) setSpiner(0);
    currentPlayer.numberCell = index;
    PlayersStatus[currentPlayer.id].numberCell = index;
    setAvailibleSteps(
      checkAvailible(
        gameField,
        currentPlayer.numberCell,
        currentPlayer.count,
        currentPlayer.player,
      ),
    );
    changeStartFields(currentPlayer.id, index);
    winCheck();
    if (item.item && item.item.itemStatus === CLOSE_STATUS) {
      setAnswer(true);
    }
    if (item.item && item.item.itemStatus === OPEN_STATUS) {
      setSpiner(0);
      checkItem(gameField[currentPlayer.numberCell]);
      currentPlayer.count = 0;
    }
  };

  const getAnswer = (isYes: boolean) => {
    setAnswer(false);
    if (isYes) {
      setSpiner(0);
      checkItem(gameField[currentPlayer.numberCell]);
      currentPlayer.count = 0;
    }
  };
  const currentField = gameField[currentPlayer.numberCell];

  const changeBorders = useCallback(() => {
    const allBordersChange = closeWindow(
      gameField,
      currentPlayer.numberCell,
      borders,
    );
    setBorders(allBordersChange);
  }, [borders, currentPlayer.numberCell, gameField]);

  useEffect(() => {
    setAvailibleSteps(
      checkAvailible(
        gameField,
        currentPlayer.numberCell,
        currentPlayer.count,
        currentPlayer.player,
      ),
    );
  }, [borders]);

  const getBroadAnswer = (isYes: boolean) => {
    if (isYes) {
      const broadIndex = currentPlayer.player.hero.inventory.findIndex(
        (el) => el.id === 5,
      );
      currentPlayer.player.hero.inventory.splice(broadIndex, 1);
      changeBorders();
    }
    setapplyBoards(false);
  };

  // проверка на поражение
  const loseCheck = () => {
      const Index = PlayersStatus.findIndex((el) => el.id === currentPlayer.id);
      PlayersStatus[Index] = {...currentPlayer}
      if (PlayersStatus.filter(el => el.player.hero.health).length === 0) {
        setGameLose(true);
      }
  };

  const nextStepHandler = () => {
    setPopup(false);
    checkResultBattle(gameField[currentPlayer.numberCell]);
    checkCounter(currentPlayer.count);
    setStartGame(false);
  };

  return (
    <div>
      {/* карточки игроков */}
      <div className='players-card-wrapper'>
        {PlayersStatus.length > 0 &&
          PlayersStatus.map((item) => (
            <PlayerCard
              key={item.id}
              player={item.player}
              setapplyBoards={setapplyBoards}
              windowsField={availibleSteps[1]}
            />
          )
          )}
      </div>

      {/* модалка на открытие карточек */}
      {answer && <PickedPopUp getAnswer={getAnswer} />}

      {/* модалка на заколачивание окна */}
      {availibleSteps[1]?.length && applyBoards && (
        <CheckBroadPopup getBroadAnswer={getBroadAnswer} />
      )}

      {/* модалка на прорубание окна */}
      {availibleSteps[1]?.length && applyBoards && (
        <CheckBroadPopup getBroadAnswer={getBroadAnswer} />
      )}

      {/* модалка какой айтем положили в рюкзак */}
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

      {/* игровое поле */}
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
              availibleSteps={availibleSteps[0]}
              windowsField={availibleSteps[1]}
              endFields={endFields}
              onClick={() => fieldHandler(index, item)}
            />
          );
        })}

        {/* экран перехода хода */}
        {!currentPlayer.count && !answer && (
          <div className='modal-wheel'>
            Нажми кнопку "Покрутить колесо" и "начать ход"
          </div>
        )}
      </div>
      {/* поле битвы */}
      {battlePopup && currentField.item && currentField.item.id < 4 && (
        <BattlePopUp
          player={currentPlayer.player}
          item={gameField[currentPlayer.numberCell].item!}
          setBattlePopup={setBattlePopup}
          setIsHumanWin={setIsHumanWin}
          setIsRunAway={setIsRunAway}
          setIsBattleEnd={setIsBattleEnd}
          loseCheck={loseCheck}
        />
      )}

      {/* кнопка начать ход */}
      {currentPlayer.count === 0 && !answer && spiner && (
        <div className='step-button'>
          <button
            type='button'
            className='btn-spin'
            onClick={() => nextStepHandler()}
          >
            Начать ход
          </button>
        </div>
      )}
      {/* спинер */}
      {currentPlayer.count === 0 && !answer && (
        <div className='spinner-page'>
          <SpinnerPage setSpiner={setSpiner} />
        </div>
      )}
      <MoveCounter step={currentPlayer.count} count={spiner} />

      {/* модалка LOSE GAME */}
      {gameLose && <GameOverPopUp isWin={!gameLose} />}

      {/* модалка LOSE GAME */}
      {gameWin && <GameOverPopUp isWin={gameWin} />}
    </div>
  );
};
