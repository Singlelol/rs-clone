/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
import { GridItemsType } from './GameFieldTypes';
import { ArrayFieldType } from '../../types/types';
import './GameFieldStyle.scss';
import '../../assets/img/gameField.webp';

type GameFieldItemProps = {
  item: ArrayFieldType;
  index: number;
  availibleSteps: number[];
  onClick: () => void;
  url: string | false;
  // itemUrl: string | false;
};

export const GameField = ({
  item,
  index,
  availibleSteps,
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
    attr.className = availibleSteps.includes(item.id)
      ? 'grid-item--availible'
      : 'grid-item';
    attr.key = index.toString();
  });

  return (
    // <div
    //   style={{
    //     backgroundImage: `url(${item.item?.image})`,
    //     backgroundSize: 'cover',
    //     border: '.05rem solid #B95A27',
    //     zIndex: 1,
    //   }}
    //   {...attr}
    //   onClick={() => availibleSteps.includes(item.id) && onClick()}
    // >
    //   {url ? (
    //     <div
    //       style={{
    //         backgroundImage: `url(${url || ''})`,
    //         backgroundSize: 'cover',
    //         height: '-webkit-fill-available',
    //         zIndex: 10,
    //       }}
    //     />
    //   ) : (
    //     <></>
    //   )}
    // </div>

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
      {item.item && !url ? (
        <div
          style={{
            backgroundImage: `url(${item.item.image})`,
            backgroundSize: 'cover',
            height: '-webkit-fill-available',
            zIndex: 1,
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
