import './rules.scss';

const phrase = [
  'Цель игры - найти среди карт спрятанные ключи и бензин и переместиться с ними в зону выхода (красная машина в верхнем правом углу карты).',
  'Игроки ходят по очереди. На количество шагов указанное выпавшим числом.',
  'Ходить можно только по вертикали или горизонтали. Нельзя проходить сквозь стены, игроков и монстров. Доступные ходы будут подсвечиваться зеленым цветом.',
  'В свой ход игрок может открыть карточку или заколотить окно/дверь (при наличии досок в инвентаре). Если будет возможность заколотить дверь, ячейка подсветится желтым и вам нужно будет кликнуть на доски в рюкзаке. Как только игрок открывает карточку он берет предмет или вступает в бой с монстром, при этом его ход заканчивается. Карточку можно не открывать.',
  'Среди спрятанных предметов скрываются зомби и опасные монстры, а так же босс игры - Болотный ужас.',
  'Если игроку встречается монстр - то игрок вращает стрелку.',
  'Перекрещенные шпаги: если у вас есть холодное оружие (нож, топор, арбалет или граната), вы убиваете монстра.',
  'Прицел: если у вас есть огнестрельное оружие (пистолет, автомат, дробовик или граната), вы убиваете монстра.',
  'Зубы: вас укусили ― вы теряете одну жизнь (сердечко).',
  'Бегущий человечек: вы смогли сбежать. В этом случае вы крутите спинер и сбегаете на выпавшее число ходов.',
  'Игрок вращает стрелку до тех пор, пока не убъет монстра, не сбежит или не закончаться жизни. Убить Болотного ужаса можно только гранатометом.',
];

const buttonText = 'Назад';
const returnBack = '/';

export const Rules = () => {
  return (
    <div className='rules_modal'>
      {phrase.map((text) => (
        <div className='rules_text'>{text}</div>
      ))}
      <button type='button' className='button'>
        <a href={returnBack}>{buttonText}</a>
      </button>
    </div>
  );
};
