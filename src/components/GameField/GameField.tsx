import gameField from './gameFieldJSON';
import './style.css';
import '../../assets/img/gameField.webp';

interface GameFieldItem {
  id: number;
  left?: string;
  top?: string;
  right?: string;
  finish?: string;
  bottom?: string;
  start?: string;
}

function GridContainer() {
  return (
    <div className="grid-container">
      {gameField.map((item : GameFieldItem) => {
        return (
          <div
            className="grid-item" id={item.id.toString()}
            {Object.entries(item).filter((key, value) => key !== 'id').map((key) => data-key + "=" + item[key])}
          >
          </div>
        );
      })}
    </div>
  );
}

export default GridContainer;
