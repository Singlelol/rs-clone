/* eslint-disable no-nested-ternary */
import { GridItemsType } from './GameFieldTypes';
import { ArrayFieldType } from '../../types/types';
import './GameFieldStyle.scss';
import '../../assets/img/gameField.webp';
import CoverImage from '../../images/cardСover.png';

type GameFieldItemProps = {
  item: ArrayFieldType;
  index: number;
  availibleSteps: number[];
  onClick: () => void;
  url: string | false;
  windowsField: number[];
  endFields: number[];
};

const OPEN_STATUS = 'open';
const CLOSE_STATUS = 'close';
const DELETE_STATUS = 'delete';

export const GameField = ({
  item,
  index,
  availibleSteps,
  windowsField,
  endFields,
  onClick,
  url,
}: GameFieldItemProps) => {
  const attr: GridItemsType = {};

  Object.keys(item).forEach((key) => {
    if (key === 'id') attr.id = `${item[key as keyof typeof item]}`;
    if (key !== 'id' && key !== 'item') {
      attr[`data-${key}`] = `${item[key as keyof typeof item]}`;
    }

    attr.key = index.toString();
  });

  if (windowsField && windowsField.includes(item.id)) {
    attr.className = 'grid-item--window';
  } else if (availibleSteps && availibleSteps.includes(item.id)) {
    attr.className = 'grid-item--availible';
  } else {
    attr.className = 'grid-item';
  }

  if (endFields.includes(item.id)) {
    attr.className = 'grid-item--end';
  }

  const checkItemStatus = () => {
    if (item.item && item.item?.itemStatus === OPEN_STATUS) {
      return item.item?.image;
    }
    if (item.item && item.item?.itemStatus === CLOSE_STATUS) {
      return CoverImage;
    }
    return '';
  };

  return (
    <div
      style={{
        backgroundImage: `url(${url || ''})`,
      }}
      {...attr}
      onClick={() => availibleSteps.includes(item.id) && onClick()}
    >
      {item.item?.itemStatus !== DELETE_STATUS ? (
        !url ? (
          <div
            className='item-style'
            style={{
              backgroundImage: `url(${checkItemStatus()})`,
            }}
          />
        ) : (
          <div />
        )
      ) : (
        <> </>
      )}
    </div>
  );
};
