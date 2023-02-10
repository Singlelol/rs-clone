import { ItemType } from '../data/items';
import { HeroType } from '../pages/playersPage/PlayerSettings-interface';

export type ArrayFieldType = {
  id: number;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
  item?: ItemType;
  availible: boolean;
  pers?: HeroType;
};
