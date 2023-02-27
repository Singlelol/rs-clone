import React, { useEffect, useState } from 'react';
import { BattleCard } from './BattleCard';
import { SpinnerPage } from '../Spiner/SpinnerPage';
import { PlayerType } from '../../pages/playersPage/PlayerSettings-interface';
import { doSpinnerAction } from '../../utilities/utilitiesBattle';
import { ItemType } from '../../data/items';
import imageSwords from '../../images/oriental.png';
import playerWinSound from '../../sounds/PlayerWin.mp3';
import monsterWinSound from '../../sounds/ZombiWin.mp3';
import './battleField.scss';

type BattlePopUpType = {
  player: PlayerType;
  item: ItemType;
  setBattlePopup: (arg: boolean) => void;
  setIsHumanWin: (arg: boolean) => void;
  setIsRunAway: (arg: boolean) => void;
  setIsBattleEnd: (arg: boolean) => void;
  loseCheck: () => void;
};
const state = 8;
const spinerBlock = 'spiner_block';
const spinerNone = 'spinerNone';
export const BattlePopUp = ({
  player,
  item,
  setIsHumanWin,
  setBattlePopup,
  setIsRunAway,
  setIsBattleEnd,
  loseCheck,
}: BattlePopUpType) => {
  const [spiner, setSpiner] = useState(state);
  const [audioPlayerWin] = useState(new Audio(playerWinSound));
  const [audioMonsterWin] = useState(new Audio(monsterWinSound));
  const [isHeroe, setIsHeroeWin] = useState(true);
  const [isMonster, setIsMonsterWin] = useState(true);
  const [isBattle, setIsBattle] = useState(true);
  const [spinnerBattleText, setSpinerBattleText] = useState('');
  const BlockSpiner = isBattle ? spinerBlock : spinerNone;
  const AudioPlayerWin = () => {
    audioPlayerWin.currentTime = 0;
    audioPlayerWin.volume = 0.2;
    audioPlayerWin.play();
  };
  const AudioMonsterWin = () => {
    audioMonsterWin.currentTime = 0;
    audioMonsterWin.volume = 0.2;
    audioMonsterWin.play();
  };

  useEffect(() => {
    if (item) {
      doSpinnerAction(
        spiner,
        player,
        item,
        setIsHumanWin,
        setBattlePopup,
        setIsHeroeWin,
        setIsMonsterWin,
        setIsRunAway,
        setIsBattleEnd,
        loseCheck,
        setIsBattle,
        setSpinerBattleText,
        AudioPlayerWin,
        AudioMonsterWin,
      );
      setSpiner(8);
    }
  }, [spiner]);
  return (
    <div className='battleField'>
      <div id='div' className='player_cards cards'>
        <BattleCard
          name={player.name}
          image={player.hero?.image}
          win={isHeroe}
        />
      </div>
      <div className='block_Spinner-Swords'>
        <div className={BlockSpiner}>
          <SpinnerPage setSpiner={setSpiner} />
        </div>
        <img src={imageSwords} className='swords' alt='Swords' />
        <p className='text_swords'>{spinnerBattleText}</p>
      </div>
      <div className='monster_cards cards'>
        <BattleCard name={item!.name} image={item!.image} win={isMonster} />
      </div>
    </div>
  );
};
