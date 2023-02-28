export type GameFieldItemType = {
  id: number;
  left?: string;
  top?: string;
  right?: string;
  finish?: string;
  bottom?: string;
  start?: string;
};

export type GridItemsType = {
  [index: string]: string;
};

export type GameFieldProps = {
  item: GameFieldItemType;
  index: number;
};
