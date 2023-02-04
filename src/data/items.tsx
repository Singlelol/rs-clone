import machineGun from '../images/machineGun.png';
import Gun from '../images/Gun.png';
import Shotgun from '../images/Shotgun.png';
import Knife from '../images/Knife.png';
import Axe from '../images/Axe.png';
import Crossbow from '../images/Crossbow.png';
import Grenade from '../images/Grenade.png';
import Bazooka from '../images/Bazooka.png';
import Midicament from '../images/Midicament.png';
import Boards from '../images/Boards.png';
import Canister from '../images/Canister.png';
import Keys from '../images/Keys.png';
import Zombi from '../images/Zombi.png';
import Spider from '../images/Spider.png';
import Dog from '../images/Dog.png';
import Horror from '../images/Horror.png';

export type ItemType = {
  id: string;
  name: string;
  type: string;
  count: number;
  description: string;
  image: string;
};

export const items: ItemType[] = [
  {
    id: 'Zombi',
    name: 'Зомби',
    type: 'monster',
    count: 17,
    description: 'Нападает на игрока и кусает, если вертушка показывает -зубы.',
    image: Zombi,
  },
  {
    id: 'Spider',
    name: 'Паук - мутант',
    type: 'monster',
    count: 5,
    description: 'Нападает на игрока и кусает, если вертушка показывает -зубы.',
    image: Spider,
  },
  {
    id: 'Dog',
    name: 'Дьявольский пёс',
    type: 'monster',
    count: 5,
    description: 'Нападает на игрока и кусает, если вертушка показывает -зубы.',
    image: Dog,
  },
  {
    id: 'Boss',
    name: 'Босс - Болотный ужас',
    type: 'monster',
    count: 1,
    description:
      'Нападает на игрока и кусает, если вертушка показывает -зубы. Это босс. Его можно убить только с помощью гранотомёта.',
    image: Horror,
  },
  {
    id: 'Midicament',
    name: 'Аптечка',
    type: 'items',
    count: 6,
    description: 'Восполняет одну жизнь (а при применении Настей - сразу две).',
    image: Midicament,
  },
  {
    id: 'Boards',
    name: 'Доски',
    type: 'items',
    count: 8,
    description:
      'С их помощью можно забить окно или дверь. Для этого пройдя через окно или дверь, игрок кладет карточку досок на клетку с изображением окна или двери.',
    image: Boards,
  },
  {
    id: 'Canister',
    name: 'Канистра с бензином',
    type: 'items',
    count: 1,
    description: 'Нужна чтобы заправить и завести машину.',
    image: Canister,
  },
  {
    id: 'Keys',
    name: 'Ключ',
    type: 'items',
    count: 1,
    description: 'Нужен чтобы завести машину',
    image: Keys,
  },
  {
    id: 'machineGun',
    name: 'Автомат',
    type: 'weapon',
    count: 1,
    description:
      'Огнестрельное оружие: может убить одного монстра, если вертушка показывает прицел.',
    image: machineGun,
  },
  {
    id: 'Gun',
    name: 'Пистолет',
    type: 'weapon',
    count: 1,
    description:
      'Огнестрельное оружие: может убить одного монстра, если вертушка показывает прицел.',
    image: Gun,
  },
  {
    id: 'Shotgun',
    name: 'Дробовик',
    type: 'weapon',
    count: 1,
    description:
      'Огнестрельное оружие: может убить одного монстра, если вертушка показывает прицел.',
    image: Shotgun,
  },
  {
    id: 'Knife',
    name: 'Нож',
    type: 'weapon',
    count: 1,
    description:
      'Холодное оружие: может убить одного монстра, если вертушка показывает прицел.',
    image: Knife,
  },
  {
    id: 'Axe',
    name: 'Топор',
    type: 'weapon',
    count: 1,
    description:
      'Холодное оружие: может убить одного монстра, если вертушка показывает прицел.',
    image: Axe,
  },
  {
    id: 'Crossbow',
    name: 'Арбалет',
    type: 'weapon',
    count: 1,
    description:
      'Холодное оружие: может убить одного монстра, если вертушка показывает прицел.',
    image: Crossbow,
  },
  {
    id: 'Grenade',
    name: 'Граната',
    type: 'weapon',
    count: 1,
    description:
      'Может сразу взорвать любого монстра, кроме босса - Болотного ужаса.',
    image: Grenade,
  },
  {
    id: 'Bazooka',
    name: 'Гранатомет',
    type: 'weapon',
    count: 1,
    description:
      'Единственный способ избавиться от босса - Болотного ужаса. Нельзя использовать на других врагов.',
    image: Bazooka,
  },
];
