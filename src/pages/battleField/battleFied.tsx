import React, { useEffect, useState } from 'react';
import { BattleCard } from './BattleCard';
import { PlayerType } from '../playersPage/PlayerSettings-interface';
import { SpinnerPage } from '../../components/Spiner/SpinnerPage';
import { doSpinnerAction } from '../../utilities/utilitiesBattle';
import './battleFied.scss';
import { ItemType } from '../../data/items';
import imageSwords from '../../images/oriental.png';

type BattlePopUpType = {
  player: PlayerType;
  item: ItemType;
  setBattlePopup: (arg: boolean) => void;
  setIsHumanWin: (arg: boolean) => void;
  setIsRunAway: (arg: boolean) => void;
  setIsBattleEnd: (arg: boolean) => void;
};
const state = 8;

export const BattlePopUp = ({
  player,
  item,
  setIsHumanWin,
  setBattlePopup,
  setIsRunAway,
  setIsBattleEnd,
}: BattlePopUpType) => {
  const [spiner, setSpiner] = useState(state);

  const [isHeroe, setIsHeroeWin] = useState(true);
  const [isMonster, setIsMonsterWin] = useState(true);
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
      );
      setSpiner(8);
    }
  }, [spiner]);

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
        <SpinnerPage setSpiner={setSpiner} />
        <img src={imageSwords} className='swords' alt='Swords' />
      </div>
      <div className='monster_cards'>
        <BattleCard name={item!.name} image={item!.image} win={isMonster} />
      </div>
    </div>
  );
};
