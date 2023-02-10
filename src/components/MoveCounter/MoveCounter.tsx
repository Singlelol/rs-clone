import { Reset } from './Reset';

export const MoveCounter = (
  props: string,
  state: { count?: number; moveId?: string; isString?: boolean },
) => {
  // const id = props;
  const { count, moveId, isString } = state;
  const moveNow = 0;
  if (isString) {
    MoveCounter(props, { count: 0, moveId, isString: false });
  }

  return (
    <div>
      {`${moveNow} for ${count}`}
      <Reset
{onclick(() => MoveCounter(props, {count: 0, moveId: moveId, isString: true}))}

      />
    </div>
  );
};
