import './battleFied.scss';

type BattleCardProps = {
  image: string | undefined;
  name: string;
};

export const BattleCard = ({ image, name }: BattleCardProps) => {
  return (
    <div className='battle_card'>
      <div className='battle_info'>
        <img className='battle-card__img' src={image} alt='card-img' />
        <h3 className='battle-card__name'>{name}</h3>
      </div>
    </div>
  );
};
