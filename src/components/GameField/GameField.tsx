import { GridItemsType } from './GameFieldTypes';
import { ArrayFieldType } from '../../types/types';
import './GameFieldStyle.scss';
import '../../assets/img/gameField.webp';

type GameFieldItemProps = {
  item: ArrayFieldType;
  index: number;
  availibleSteps: number[];
  onClick: () => void;
  currentField: number;
  url: string | false;
};

export const GameField = ({
  item,
  index,
  availibleSteps,
  onClick,
  url,
}: GameFieldItemProps) => {
  const attr: GridItemsType = {};
  Object.keys(item).forEach((key) => {
    if (key === 'id') attr.id = `${item[key as keyof typeof item]}`;
    if (key !== 'id') {
      attr[`data-${key}`] = `${item[key as keyof typeof item]}`;
    }
    attr.className = availibleSteps.includes(item.id)
      ? 'grid-item--availible'
      : 'grid-item';
    attr.key = index.toString();
  });

  return (
    <div
      style={{
        backgroundImage: `url(${url || ''})`,
        backgroundSize: 'cover',
        border: '.05rem solid #B95A27',
        zIndex: 10,
      }}
      {...attr}
      onClick={() => availibleSteps.includes(item.id) && onClick()}
    />
  );
};
