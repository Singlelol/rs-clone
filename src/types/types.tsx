import { ItemType } from '../data/items';

export type ArrayFieldType = {
  id: number;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
  item?: ItemType;
  availible: boolean;
};
