import { heroes } from '../data/heroes';
import { PlayerType } from '../pages/playersPage/PlayerSettings-interface';

export const findHeroName = (player: PlayerType) => {
  return heroes.find((elem) => elem.name === player.hero);
};
