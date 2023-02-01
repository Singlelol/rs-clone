export interface IHero {
  id: number;
  name: string;
  health: number;
  description: string;
  image: string;
}

export const heroes: IHero[] = [
  {
    id: 1,
    name: 'Саша',
    health: 3,
    description: '',
    image: '../../../public/alex.png',
  },
  {
    id: 2,
    name: 'Настя',
    health: 3,
    description: '',
    image: '../../public/nastya.png',
  },
  {
    id: 3,
    name: 'Макс',
    health: 3,
    description: '',
    image: '../../',
  },
  {
    id: 4,
    name: 'Надя',
    health: 3,
    description: '',
    image: '../../',
  },
  {
    id: 5,
    name: 'Борис',
    health: 5,
    description: '',
    image: '../../',
  },
];
