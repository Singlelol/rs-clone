/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
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
  // itemUrl: string | false;
};

export const GameField = ({
  item,
  index,
  availibleSteps,
  windowsField,
  onClick,
  url,
}: // itemUrl,
GameFieldItemProps) => {
  const attr: GridItemsType = {};
  Object.keys(item).forEach((key) => {
    if (key === 'id') attr.id = `${item[key as keyof typeof item]}`;
    if (key !== 'id') {
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

  const checkItemStatus = () => {
    if (item.item && item.item?.itemStatus === 'open') {
      return item.item?.image;
    }
    if (item.item && item.item?.itemStatus === 'close') {
      return CoverImage;
    }
    return '';
  };

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
    >
      {item.item?.itemStatus !== 'delete' ? (
        !url ? (
          <div
            className='item-style'
            style={{
              backgroundImage: `url(${checkItemStatus()})`,
              backgroundSize: 'cover',
              height: '-webkit-fill-available',
              zIndex: 1,
            }}
          />
        ) : (
          <div
            style={{
              backgroundImage: "url($'')",
            }}
          />
        )
      ) : (
        <></>
      )}
    </div>
  );
};
