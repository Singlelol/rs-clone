import { useContext } from 'react';
import { GridItemsType } from './GameFieldTypes';
import { ArrayFieldType } from '../../types/types';
import './GameFieldStyle.scss';
import '../../assets/img/gameField.webp';
import { Context } from '../../App';

type GameFieldItemProps = {
  item: ArrayFieldType;
  index: number;
  availibleSteps: number[];
  onClick: () => void;
};

export const GameField = ({
  item,
  index,
  availibleSteps,
  onClick,
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

  const user = useContext(Context);
  console.log('GAme', user);
  return (
    <div
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...attr}
      onClick={() => availibleSteps.includes(item.id) && onClick()}
    />
  );
};
