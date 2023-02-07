import { GridItemsType } from './GameFieldTypes';
import { ArrayFieldType } from '../../types/types';
import './style.scss';
import '../../assets/img/gameField.webp';

type GameFieldItemProps = {
  item: ArrayFieldType;
  index: number;
  onClick: () => void;
};

export const GameField = ({ item, index, onClick }: GameFieldItemProps) => {
  const attr: GridItemsType = {};
  Object.keys(item).forEach((key) => {
    if (key === 'id') attr.id = `${item[key as keyof typeof item]}`;
    if (key !== 'id') {
      attr[`data-${key}`] = `${item[key as keyof typeof item]}`;
    }
    attr.className = item.availible ? 'grid-item--availible' : 'grid-item';
    attr.key = index.toString();
  });
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <div {...attr} onClick={onClick} />;
};
