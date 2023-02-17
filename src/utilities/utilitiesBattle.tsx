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
) => {
  switch (action) {
    case 1:
      setBattlePopup(false);
      break;
    case 2:
      // eslint-disable-next-line no-param-reassign
      player.hero.health -= 1;
      if (player.hero.health <= 0) setBattlePopup(false);
      break;

    case 3:
      if (
        player.hero.inventory.find((el) => coldWeapon.includes(el.id)) &&
        item?.id !== 3
      ) {
        setIsHumanWin(true);
        setBattlePopup(false);
      } else if (
        item?.id === 3 &&
        player.hero.inventory.find((el) => el.id === shooterBoss)
      ) {
        setIsHumanWin(true);
        setBattlePopup(false);
      }
      break;

    case 4:
      if (
        player.hero.inventory.find((el) => shooter.includes(el.id)) &&
        item?.id !== 3
      ) {
        setIsHumanWin(true);
        setBattlePopup(false);
      } else if (
        item?.id === 3 &&
        player.hero.inventory.find((el) => el.id === shooterBoss)
      ) {
        setIsHumanWin(true);
        setBattlePopup(false);
      }
      break;

    default:
      break;
  }
};
