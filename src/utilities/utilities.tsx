import {
  bordersRightIndex,
  bordersLeftIndex,
  bordersTopIndex,
  bordersBottomIndex,
} from '../data/border';
import { heroes } from '../data/heroes';
import { PlayerType } from '../pages/playersPage/PlayerSettings-interface';
import { ArrayFieldType } from '../types/types';

export const findHeroName = (player: PlayerType) => {
  return heroes.find((elem) => elem.name === player.hero);
};

export const createField = () => {
  const arrField: ArrayFieldType[] = [];

  for (let i = 0; i < 144; i += 1) {
    const field: ArrayFieldType = {
      id: i,
      availible: false,
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

export const checkAvailible = (
  gameField: ArrayFieldType[],
  id: number,
): number[] => {
  const availibleSteps: number[] = [];
  if (!gameField[id].left) availibleSteps.push(id - 1);
  if (!gameField[id].right) availibleSteps.push(id + 1);
  if (!gameField[id].bottom) availibleSteps.push(id + 12);
  if (!gameField[id].top) availibleSteps.push(id - 12);

  return availibleSteps;
};
