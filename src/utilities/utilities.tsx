/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { randomItemField } from '../data/border';
import { items, ItemType } from '../data/items';
import { PlayerType } from '../pages/playersPage/PlayerSettings-interface';
import { ArrayFieldType, StateType } from '../types/types';

const BroadID = 5;
const includeBroads = (player: PlayerType) => {
  return player.hero.inventory.find((el) => el.id === BroadID);
};
// массивы монстров и айтемов
export const ItemsArr: ItemType[][] = [];
items
  .map((item) => ItemsArr.push(Array(item.count).fill(item)))
  .sort(() => Math.round(Math.random() * 100) - 50);
// export const AllItems = ItemsArr.flat(2);

// обьединяет и перемешивает айтемы
export const ShuffleItemsArr = () => {
  const AllItems = ItemsArr.flat(2);
  return AllItems.map((item, i) => {
    return { ...item, field: randomItemField[i] };
  });
};

const ItemArray = ShuffleItemsArr();
// создание ячеек поля
export const createField = (borders: number[][]) => {
  const [
    bordersRightIndex,
    bordersLeftIndex,
    bordersBottomIndex,
    bordersTopIndex,
    bordersWindowRightIndex,
    bordersWindowLeftIndex,
    bordersWindowBottomIndex,
    bordersWindowTopIndex,
  ] = borders;
  const arrField: ArrayFieldType[] = [];
  const arr = [...ItemArray];
  for (let i = 0; i < 144; i += 1) {
    const field: ArrayFieldType = {
      id: i,
      availible: false,
      item: randomItemField.includes(i) ? arr.shift() : undefined,
    };
    // границы поля
    if (i % 12 === 11) field.right = true;
    if (i % 12 === 0) field.left = true;
    if (bordersRightIndex.includes(i)) field.right = true;
    if (bordersLeftIndex.includes(i)) field.left = true;
    if (bordersWindowRightIndex.includes(i)) field.windowright = true;
    if (bordersWindowLeftIndex.includes(i)) field.windowleft = true;
    if (bordersWindowBottomIndex.includes(i)) field.windowbottom = true;
    if (bordersWindowTopIndex.includes(i)) field.windowtop = true;
    if (bordersBottomIndex.includes(i)) field.bottom = true;
    if (bordersTopIndex.includes(i)) field.top = true;
    arrField.push(field);
  }
  return arrField;
};

// проверка доступных ячеек для хода
export const checkAvailible = (
  gameField: ArrayFieldType[],
  id: number,
  count: number,
  player: PlayerType,
): number[][] => {
  const availibleSteps: number[] = [];
  const windowId: number[] = [];
  const allsteps: number[][] = [];
  if (count === 0) return [];

  // проверка окн с левой стороны на возможность забить
  if (!gameField[id].left) {
    availibleSteps.push(id - 1);
  }
  if (gameField[id].windowleft && includeBroads(player)) {
    windowId.push(id - 1);
  }
  // проверка окн с правой стороны на возможность забить
  if (!gameField[id].right) {
    availibleSteps.push(id + 1);
  }
  if (gameField[id].windowright && includeBroads(player)) {
    windowId.push(id + 1);
  }
  // проверка окн снизу  на возможность забить
  if (!gameField[id].bottom) {
    availibleSteps.push(id + 12);
  }
  if (gameField[id].windowbottom && includeBroads(player)) {
    windowId.push(id + 12);
  }
  // проверка окн сверху  на возможность забить
  if (!gameField[id].top) {
    availibleSteps.push(id - 12);
  }
  if (gameField[id].windowtop && includeBroads(player)) {
    windowId.push(id - 12);
  }

  gameField[id].pers = player.hero;
  allsteps.push(availibleSteps);
  allsteps.push(windowId);
  console.log(allsteps);
  return allsteps;
};

export const closeWindow = (
  gameField: ArrayFieldType[],
  id: number,
  borders: number[][],
): number[][] => {
  const [
    bordersRightIndex,
    bordersLeftIndex,
    bordersBottomIndex,
    bordersTopIndex,
    bordersWindowRightIndex,
    bordersWindowLeftIndex,
    bordersWindowBottomIndex,
    bordersWindowTopIndex,
  ] = borders;
  const allBorders: number[][] = [];
  if (gameField[id].windowright) {
    console.log('граница справа');
    bordersRightIndex.push(id);
    bordersLeftIndex.push(id + 1);
    const rightIndex = bordersWindowRightIndex.indexOf(id);
    bordersWindowRightIndex.splice(rightIndex, 1);
    const leftIndex = bordersWindowLeftIndex.indexOf(id + 1);
    bordersWindowLeftIndex.splice(leftIndex, 1);
  }
  if (gameField[id].windowleft) {
    console.log('граница слева');
    bordersRightIndex.push(id - 1);
    bordersLeftIndex.push(id);
    const rightIndex = bordersWindowRightIndex.indexOf(id - 1);
    bordersWindowRightIndex.splice(rightIndex, 1);
    const leftIndex = bordersWindowLeftIndex.indexOf(id);
    bordersWindowLeftIndex.splice(leftIndex, 1);
  }
  if (gameField[id].windowtop) {
    console.log('граница сверху');
    bordersTopIndex.push(id);
    bordersBottomIndex.push(id - 12);
    const bottomIndex = bordersWindowBottomIndex.indexOf(id - 12);
    bordersWindowBottomIndex.splice(bottomIndex, 1);
    const topIndex = bordersWindowTopIndex.indexOf(id);
    bordersWindowTopIndex.splice(topIndex, 1);
  }
  if (gameField[id].windowbottom) {
    console.log('граница снизу');
    bordersBottomIndex.push(id);
    bordersTopIndex.push(id + 12);
    const bottomIndex = bordersWindowBottomIndex.indexOf(id);
    bordersWindowBottomIndex.splice(bottomIndex, 1);
    const topIndex = bordersWindowTopIndex.indexOf(id + 12);
    bordersWindowTopIndex.splice(topIndex, 1);
  }
  allBorders.push(
    bordersRightIndex,
    bordersLeftIndex,
    bordersBottomIndex,
    bordersTopIndex,
    bordersWindowRightIndex,
    bordersWindowLeftIndex,
    bordersWindowBottomIndex,
    bordersWindowTopIndex,
  );
  console.log(allBorders);
  return allBorders;
};

// create start field for hero
export const startFields = [133, 120, 121, 132];

// подбор предметов в рюкзак
export const addItemInBack = (
  player: PlayerType,
  item: ItemType | undefined,
) => {
  if (
    item &&
    player.hero.inventory.find(
      (it) => item.type === 'weapon' && it.name === item.name,
    ) === undefined
  )
    player.hero.inventory.push(item);
};

// добавления очков здоровья если игрок поднял аптечку
export const addHeroHelth = (player: PlayerType) => {
  player.hero.health += player.hero.id === 2 ? 2 : 1;
};

// картинка героя
export const getHeroImage = (id: number, PlayersStatus: StateType[]) => {
  const item = PlayersStatus.find((elem) => elem.numberCell === id);
  if (item) {
    return item.player.hero ? item.player.hero.image : '';
  }
  return '';
};

export const getSpinnerCount = (count: number) => {
  switch (count) {
    case 0:
    case 1:
      return 1;
      break;
    case 2:
    case 3:
      return 2;
      break;
    case 4:
      return 3;
      break;
    case 5:
      return 4;
      break;
    default:
      break;
  }
};
