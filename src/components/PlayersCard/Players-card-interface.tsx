import { PlayerType } from '../../pages/playersPage/PlayerSettings-interface';

export type PlayerProps = {
  player: PlayerType;
};

export type PlayerCardProps = {
  player: PlayerType;
  setapplyBoards: (arg: boolean) => void;
  windowsField: number[];
};
