export type IPlayer = {
  id: number;
  name: string;
  isHuman?: boolean;
};

export type PlayerProps = {
  player: IPlayer;
  decrease: () => void;
};

export type CounterProps = {
  counter: number;
  increase: () => void;
  decrease: () => void;
};

export type PopupProps = {
  hero: IHero;
};

export type IHero = {
  id: number;
  name: string;
  health: number;
  description: string;
  image: string;
  inventory: [];
  skill: number;
  profession: string;
};
