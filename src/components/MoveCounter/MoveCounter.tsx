import './counter.scss';
/*
import { Reset } from './Reset';

функция возврата сделанных шагов

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

type Props = {
  step: number;
  count: number;
};

export const MoveCounter = ({ step, count }: Props) => {
  return <div id='counter'>{`${step} for ${count}`}</div>;
};
