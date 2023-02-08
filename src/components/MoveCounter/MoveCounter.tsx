import React from 'react';
import { Reset } from './Reset';

type StateMove = {
  count: number;
  move: number;
  isString: boolean;
}

export const MoveCounter = (props : string, state: StateMove) => {
  const id = props,
  count = state.count;
  let move = state.move;

  if(state.isString) move = 0; //and return id

  return {
    <div>
      {`${move} for ${count}`}
      <Reset />
    </div>
  }
};
