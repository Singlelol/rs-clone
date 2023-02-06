interface GameFieldItem {
  id: number;
  left?: string;
  top?: string;
  right?: string;
  finish?: string;
  bottom?: string;
  start?: string;
}

type Type = {
  [index: string]: string;
};

export type { GameFieldItem, Type };
