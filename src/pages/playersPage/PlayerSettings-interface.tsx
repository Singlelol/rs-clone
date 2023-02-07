export type PlayerType = {
  id: number;
  name: string;
  isHuman?: boolean;
  hero: string;
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

type ItemType = {
  id: string;
  name: string;
  type: string;
  count: number;
  description: string;
  image: string;
};
