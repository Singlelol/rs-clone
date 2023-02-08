import React from 'react';
import { Reset } from './Reset';

type StateMove = {
  count: number;
  id: string;
  isString: boolean;
};

export const MoveCounter = (props) => {
  // const id = props;
  const { id, state} = props
  const { count, move, isString } = state as StateMove;

  if (isString) move = 0; // and return id

  return (
    <div>
      {`${move} for ${count}`}
      <Reset />
    </div>
  );
};
