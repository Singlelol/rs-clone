import './counter.scss';

type Props = {
  step: number;
  count: number;
};

export const MoveCounter = ({ step, count }: Props) => (
  <div id='counter'>{`${step} for ${count}`}</div>
);
