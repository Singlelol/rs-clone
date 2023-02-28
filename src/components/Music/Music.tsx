import track from '../../sounds/Iron_Maiden-Fear_of_the_Dark.mp3';

export const Music = () => {
  return (
    <div>
      <audio id='sound' autoPlay loop src={track} preload='auto'>
        <track kind='captions' />
      </audio>
    </div>
  );
};
