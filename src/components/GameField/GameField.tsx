import './style.css';
import '../../assets/img/gameField.webp';
import { GameFieldItemType, GridItemsType } from './GameFieldTypes';

type GameFieldItemProps = {
  item: GameFieldItemType;
  index: number;
};

export const GameField = ({ item, index }: GameFieldItemProps) => {
  const attr: GridItemsType = {};
  Object.keys(item).forEach((key) => {
    if (key === 'id') attr.id = `${item[key as keyof typeof item]}`;
    if (key !== 'id') {
      attr[`data-${key}`] = `${item[key as keyof typeof item]}`;
    }
    attr.className = 'grid-item';
    attr.key = index.toString();
  });
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <div {...attr} />;
};
