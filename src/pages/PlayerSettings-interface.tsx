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
