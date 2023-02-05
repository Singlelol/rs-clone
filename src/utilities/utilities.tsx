import { heroes } from '../data/heroes';
import { PlayerType } from '../pages/PlayerSettings-interface';

export const findHeroName = (player: PlayerType) => {
  return heroes.find((elem) => elem.name === player.hero);
};
