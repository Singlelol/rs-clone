import img1 from '../images/alex.png';
import img2 from '../images/nastya.png';
import img3 from '../images/max.png';
import img4 from '../images/nadya.png';
import img5 from '../images/boris.png';

export interface IHero {
  id: number;
  name: string;
  health: number;
  description: string;
  image: string;
  inventory: [];
  skill: number;
  profession: string;
}

export const heroes: IHero[] = [
  {
    id: 1,
    name: 'Саша',
    health: 3,
    description:
      'специалист по боевым искусствам. Вне зависимости от того, какие предметы выпадут в процессе игры, у него всегда есть в запасе нож, которым он может воспользоваться при необходимости.',
    image: img1,
    inventory: [],
    skill: 1,
    profession: 'кунгфу мастер',
  },
  {
    id: 2,
    name: 'Настя',
    health: 3,
    description:
      'девушка-полицейский. С самого начала игры у нее в запасе есть пистолет. И какое бы ей далее оружие не выпало, своим законным она может пользоваться неограниченное количество раз.',
    image: img2,
    inventory: [],
    skill: 1,
    profession: 'полицейский',
  },
  {
    id: 3,
    name: 'Макс',
    health: 3,
    description:
      'самый быстрый персонаж, потому что самый младший. Его суперспособность – добавлять +1 шаг к ходу, если ему так будет нужно.',
    image: img3,
    inventory: [],
    skill: 1,
    profession: '',
  },
  {
    id: 4,
    name: 'Надя',
    health: 3,
    description:
      'медсестра, а значит, что ее аптечка дает не 1 дополнительную жизнь, а сразу две.',
    image: img4,
    inventory: [],
    skill: 1,
    profession: 'медсестра',
  },
  {
    id: 5,
    name: 'Борис',
    health: 5,
    description: 'обладатель 5 сердечек. Отличается силой и выносливостью.',
    image: img5,
    inventory: [],
    skill: 1,
    profession: '',
  },
];
