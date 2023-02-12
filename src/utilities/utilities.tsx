/* eslint-disable no-param-reassign */
import {
  bordersRightIndex,
  bordersLeftIndex,
  bordersTopIndex,
  bordersBottomIndex,
} from '../data/border';
import { items, ItemType } from '../data/items';
import { PlayerType } from '../pages/playersPage/PlayerSettings-interface';
import { ArrayFieldType, StateType } from '../types/types';

// массивы монстров и айтемов
export const ItemsArr: ItemType[][] = [];
items.map((item) => ItemsArr.push(Array(item.count).fill(item)));
// export const AllItems = ItemsArr.flat(2);

export const randomItemField: number[] = [
  103, 90, 107, 129, 71, 60, 92, 113, 53, 114, 38, 79, 58, 2, 52, 50, 29, 128,
  112, 77, 116, 130, 97, 78, 80, 76, 59, 117, 75, 138, 89, 1, 83, 19, 47, 36,
  143, 57, 95, 27, 28, 93, 118, 134, 23, 84, 51, 43, 16, 98,
];
// обьединяет и перемешивает айтемы
export const ShuffleItemsArr = () => {
  const AllItems = ItemsArr.flat(2);
  return AllItems.map((item, i) => {
    return { ...item, field: randomItemField[i] };
  });
};

const ItemArray = ShuffleItemsArr();
// создание ячеек поля
export const createField = () => {
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
): number[] => {
  const availibleSteps: number[] = [];
  if (count === 0) return [];
  if (!gameField[id].left) availibleSteps.push(id - 1);
  if (!gameField[id].right) availibleSteps.push(id + 1);
  if (!gameField[id].bottom) availibleSteps.push(id + 12);
  if (!gameField[id].top) availibleSteps.push(id - 12);

  gameField[id].pers = player.hero;

  return availibleSteps;
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
