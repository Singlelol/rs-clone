/* eslint-disable no-param-reassign */
import { ItemType } from '../data/items';
import { PlayerType } from '../pages/playersPage/PlayerSettings-interface';

const coldWeapon = [11, 12, 13, 14];
const shooter = [8, 9, 10, 14];
const shooterBoss = 15;
const TextRunPlayer = 'Вы можете убежать. Бегите';
const TextLoseHealth = '-1 жизнь. Крути рулетку еще раз!';
const TextSpinerAgain = 'Крути рулетку ещё раз!';
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
  loseCheck: () => void,
  setIsBattle: (arg: boolean) => void,
  setSpinerBattleText: (arg: string) => void,
  AudioPlayerWin: () => void,
  AudioMonsterWin: () => void,
) => {
  switch (action) {
    case 1:
      setIsRunAway(true);
      setSpinerBattleText(TextRunPlayer);
      setIsBattle(false);
      setTimeout(() => setBattlePopup(false), 1500);
      setIsMonsterWin(true);
      setIsHeroeWin(true);
      setIsBattleEnd(true);
      break;
    case 2:
      player.hero.health -= 1;
      setSpinerBattleText(TextLoseHealth);
      if (player.hero.health <= 0) {
        setIsHumanWin(false);
        setIsMonsterWin(true);
        setIsHeroeWin(false);
        setSpinerBattleText(`${player.name} был повержен!`);
        AudioMonsterWin();
        setIsBattle(false);
        setTimeout(() => setBattlePopup(false), 3000);
        setIsBattleEnd(true);
        loseCheck();
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
        setSpinerBattleText(`${player.name} победил!`);
        AudioPlayerWin();
        setIsBattle(false);
        setTimeout(() => setBattlePopup(false), 3000);
        setIsBattleEnd(true);
      } else {
        setSpinerBattleText(TextSpinerAgain);
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
        setSpinerBattleText(`${player.name} победил!`);
        AudioPlayerWin();
        setIsBattle(false);
        setTimeout(() => setBattlePopup(false), 3000);
        setIsBattleEnd(true);
      } else {
        setSpinerBattleText(TextSpinerAgain);
      }
      break;
    default:
      break;
  }
};
