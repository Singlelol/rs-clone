import { ItemType } from '../data/items';
import {
  HeroType,
  PlayerType,
} from '../pages/playersPage/PlayerSettings-interface';

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

export type StateType = {
  id: number;
  numberCell: number;
  player: PlayerType;
  count: number;
  isActive: boolean;
};
