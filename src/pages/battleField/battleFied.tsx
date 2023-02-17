import React, { useEffect, useState } from 'react';
import { BattleCard } from './BattleCard';
// import { heroes } from '../../data/heroes';
import { PlayerType } from '../playersPage/PlayerSettings-interface';
import { SpinnerPage } from '../../components/Spiner/SpinnerPage';
import { doSpinnerAction } from '../../utilities/utilitiesBattle';
import './battleFied.scss';
import { ItemType } from '../../data/items';
// import Alex from '../../images/Pers/Alex.png';

type BattlePopUpType = {
  player: PlayerType;
  item: ItemType;
  setBattlePopup: (arg: boolean) => void;
  setIsHumanWin: (arg: boolean) => void;
};

export const BattlePopUp = ({
  player,
  item,
  setIsHumanWin,
  setBattlePopup,
}: BattlePopUpType) => {
  const [spiner, setSpiner] = useState(8);
  console.log(`Spinner state in BattlePopUp ${spiner}`);

  useEffect(() => {
    if (item) {
      const result = doSpinnerAction(
        spiner,
        player,
        item,
        setIsHumanWin,
        setBattlePopup,
      );
      console.log(result);
      setSpiner(8);
    }
  }, [spiner]);

  return (
    <div className='battleField'>
      <div className='player_cards'>
        <BattleCard name={player.name} image={player.hero?.image} />
      </div>
      <div>
        <SpinnerPage setSpiner={setSpiner} />
        <p>{spiner}</p>
      </div>
      <div className='monster_cards'>
        <BattleCard name={item!.name} image={item!.image} />
      </div>
    </div>
  );
};
