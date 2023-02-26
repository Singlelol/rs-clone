import { Howl } from 'howler';

export const Sound = new Howl({
  src: ['../../sounds/Iron_Maiden-Fear_of_the_Dark.mp3'],
  preload: true,
  loop: true,
  volume: 0.5,
  onplayerror: () => {
    Sound.once('unlock', () => {
      Sound.play();
    });
  },
});
