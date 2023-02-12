import './checkUp.scss';

export const checkId = (item: number) => {
  if (item > 3) return true;
  return false;
};

export const MoveCounter = () => {
  return (
    <div id='takeItem'>
      <p>Do you want to pick up an item?</p>
      <button type='button'>Yes</button>
      <button type='button'>No</button>
    </div>
  );
};
