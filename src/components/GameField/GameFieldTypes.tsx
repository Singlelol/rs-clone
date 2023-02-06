export type GameFieldItem = {
  id: number;
  left?: string;
  top?: string;
  right?: string;
  finish?: string;
  bottom?: string;
  start?: string;
};

export type Type = {
  [index: string]: string;
};

export type GameFieldProps = {
  item: GameFieldItem;
  index: number;
};
