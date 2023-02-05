/* eslint-disable react/jsx-props-no-spreading */
import gameField from './gameFieldJSON';
import { GameFieldItem, Type } from './GameFieldTypes';
import './style.css';
import '../../assets/img/gameField.webp';

function GridContainer() {
  return (
    <div className='grid-container'>
      {gameField.map((item: GameFieldItem) => {
        const attr: Type = {};
        Object.keys(item).forEach((key) => {
          if (key !== 'id') {
            attr[`data-${key}`] = `${item[key as keyof typeof item]}`;
          }
        });
        return <div className='grid-item' id={item.id.toString()} {...attr} />;
      })}
    </div>
  );
}

export default GridContainer;
