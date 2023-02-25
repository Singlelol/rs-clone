import './counter.scss';

type Props = {
  step: number;
  count: number;
};

export const MoveCounter = ({ step, count }: Props) => {
  return <div id='counter'>{`${step} for ${count}`}</div>;
};
