import './battleFied.scss';

type BattleCardProps = {
  image: string | undefined;
  name: string;
  win: boolean;
};

export const BattleCard = ({ image, name, win }: BattleCardProps) => {
  return (
    <div className={win ? 'battle_card' : 'battle_card--hide'}>
      <div className='battle_info'>
        <img className='battle-card__img' src={image} alt='card-img' />
        <h3 className='battle-card__name'>{name}</h3>
      </div>
    </div>
  );
};
