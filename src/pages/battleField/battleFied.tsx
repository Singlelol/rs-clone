import React from 'react';
import { BattleCard } from './BattleCard';
// import { heroes } from '../../data/heroes';
import { PlayerType, ItemType } from '../playersPage/PlayerSettings-interface';
import { SpinnerPage } from '../controlPanelPage/SpinnerPage';
import './battleFied.scss';
import Alex from '../../images/Pers/Alex.png';

type BattlePopUpType = {
  player: PlayerType;
  item: ItemType;
  // eslint-disable-next-line react/require-default-props
  // setBattlePopup?: (arg: boolean) => void;
  // setIsHumanWin: (arg: boolean) => void;
};

export const BattleField = ({ player, item }: BattlePopUpType) => {
  // const hero = heroes.find((el) => el.name === player.hero);
  return (
    <div className='battleField'>
      <div className='player_cards'>
        {/* hero?.image */}
        <BattleCard name={player.name} image={Alex} />
      </div>
      <SpinnerPage />
      <div className='monster_cards'>
        <BattleCard name={item.name} image={item.image} />
      </div>
    </div>
  );
};
