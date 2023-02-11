import './counter.scss';
/*
import { Reset } from './Reset';

export const countSteps = (props: string, moveId?: string) => {
  const moveY = Math.floor(Number(props) / 12);
  const moveX = Number(props) - moveY * 12;
  let resultMove = 0;
  if (props !== moveId) {
    const nextY = Math.floor(Number(moveId) / 12);
    resultMove = Math.abs(moveY - nextY);
    resultMove += Math.abs(moveX - Number(moveId) - nextY * 12);
  }
  return resultMove;
};
*/

export const MoveCounter = (
  props: string,
  /*
  moveId?: string,
  */
  step: number,
  count?: number,
) => {
  /*
  const thisId = props;
  const nextId = moveId;
  */
  const moveNow = step;
  /*
  if (isString) {
    MoveCounter(props, { count: 0, moveId, isString: false });
  }
  */

  return <div id='counter'>{`${moveNow} for ${count}`}</div>;
};
