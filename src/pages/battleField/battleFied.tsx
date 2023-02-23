import React, { useEffect, useState } from 'react';
import { BattleCard } from './BattleCard';
import { PlayerType } from '../playersPage/PlayerSettings-interface';
import { SpinnerPage } from '../../components/Spiner/SpinnerPage';
import { doSpinnerAction } from '../../utilities/utilitiesBattle';
import './battleFied.scss';
import { ItemType } from '../../data/items';
import imageSwords from '../../images/oriental.png';

const playerWinSound = require('../../sounds/PlayerWin.mp3');
const monsterWinSound = require('../../sounds/ZombieWin.wav');

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
  const [audio] = useState(new Audio(playerWinSound));
  const [audio2] = useState(new Audio(monsterWinSound));
  const [isHeroe, setIsHeroeWin] = useState(true);
  const [isMonster, setIsMonsterWin] = useState(true);
  const [isBattle, setIsBattle] = useState(true);
  const [istext, setIsText] = useState('');

  const setAudio = () => {
    audio.currentTime = 0;
    audio.play();
  };
  const setAudio2 = () => {
    audio2.currentTime = 0;
    audio2.play();
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
        setIsText,
        setAudio,
        setAudio2,
      );
      setSpiner(8);
    }
  }, [spiner]);
  const spinerNone = isBattle ? 'spiner_block' : 'spinerNone';
  return (
    <div className='battleField'>
      <div id='div' className='player_cards'>
        <BattleCard
          name={player.name}
          image={player.hero?.image}
          win={isHeroe}
        />
      </div>
      <div className='block_Spinner-Swords'>
        <div className={spinerNone}>
          <SpinnerPage setSpiner={setSpiner} />
        </div>
        <img src={imageSwords} className='swords' alt='Swords' />
        <p className='text_swords'>{istext}</p>
      </div>
      <div className='monster_cards'>
        <BattleCard name={item!.name} image={item!.image} win={isMonster} />
      </div>
    </div>
  );
};
