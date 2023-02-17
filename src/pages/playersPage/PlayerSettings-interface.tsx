import { ItemType } from '../../data/items';

export type PlayerType = {
  // [x: string]: any;
  id: number;
  name: string;
  isHuman?: boolean;
  hero: HeroType;
};

export type PlayerProps = {
  player: PlayerType;
  decrease: () => void;
};

export type CounterProps = {
  counter: number;
  increase: () => void;
  decrease: () => void;
};

export type PopupProps = {
  hero: HeroType;
};

export type HeroType = {
  id: number;
  name: string;
  health: number;
  description: string;
  image: string;
  inventory: ItemType[];
  skill: number;
  profession: string;
};

// export type ItemType = {
//   id: number;
//   name: string;
//   type: string;
//   count: number;
//   description: string;
//   image: string;
// };
