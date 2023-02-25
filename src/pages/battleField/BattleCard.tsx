import './battleField.scss';

type BattleCardProps = {
  image: string | undefined;
  name: string;
  win: boolean;
};

export const BattleCard = ({ image, name, win }: BattleCardProps) => {
  const battleWin = win ? 'battle_card' : 'battle_card--hide';
  return (
    <div className={battleWin}>
      <div className='battle_info'>
        <img className='battle-card__img' src={image} alt='card-img' />
        <h3 className='battle-card__name'>{name}</h3>
      </div>
    </div>
  );
};
