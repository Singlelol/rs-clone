/* eslint-disable no-param-reassign */
import { ItemType } from '../data/items';
import { PlayerType } from '../pages/playersPage/PlayerSettings-interface';

const coldWeapon = [11, 12, 13, 14];
const shooter = [8, 9, 10, 14];
const shooterBoss = 15;
// eslint-disable-next-line consistent-return
export const doSpinnerAction = (
  action: number,
  player: PlayerType,
  item: ItemType | undefined,
  setIsHumanWin: (arg: boolean) => void,
  setBattlePopup: (arg: boolean) => void,
  setIsHeroeWin: (arg: boolean) => void,
  setIsMonsterWin: (arg: boolean) => void,
  setIsRunAway: (arg: boolean) => void,
  setIsBattleEnd: (arg: boolean) => void,
) => {
  switch (action) {
    case 1:
      setIsRunAway(true);
      setBattlePopup(false);
      setIsMonsterWin(true);
      setIsHeroeWin(true);
      setIsBattleEnd(true);
      break;
    case 2:
      player.hero.health -= 1;
      if (player.hero.health <= 0) {
        setIsHumanWin(false);
        setIsMonsterWin(true);
        setIsHeroeWin(false);
        setTimeout(() => setBattlePopup(false), 3000);
        setIsBattleEnd(true);
      }
      break;

    case 3:
      if (
        (player.hero.inventory.find((el) => coldWeapon.includes(el.id)) &&
          item?.id !== 3) ||
        (item?.id === 3 &&
          player.hero.inventory.find((el) => el.id === shooterBoss))
      ) {
        setIsHumanWin(true);
        setIsHeroeWin(true);
        setIsMonsterWin(false);
        setTimeout(() => setBattlePopup(false), 3000);
        setIsBattleEnd(true);
      }
      break;

    case 4:
      if (
        (player.hero.inventory.find((el) => shooter.includes(el.id)) &&
          item?.id !== 3) ||
        (item?.id === 3 &&
          player.hero.inventory.find((el) => el.id === shooterBoss))
      ) {
        setIsHumanWin(true);
        setIsHeroeWin(true);
        setIsMonsterWin(false);
        setTimeout(() => setBattlePopup(false), 3000);
        setIsBattleEnd(true);
      }
      break;
    default:
      break;
  }
};
