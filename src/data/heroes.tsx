import img1 from '../images/Pers/Alex.png';
import img2 from '../images/Pers/Nastya.png';
import img3 from '../images/Pers/Max.png';
import img4 from '../images/Pers/Nadya.png';
import img5 from '../images/Pers/Boris.png';
import { HeroType } from '../pages/playersPage/PlayerSettings-interface';
import { items } from './items';

export const heroes: HeroType[] = [
  {
    id: 1,
    name: 'Саша',
    health: 1,
    description:
      'Увлекается боевыми искусствами. Вне зависимости от того, какие предметы выпадут в процессе игры, у него всегда есть в запасе нож, которым он может воспользоваться при необходимости.',
    image: img1,
    inventory: [items[11]],
    skill: 1,
    profession: 'Кунг-фу мастер',
  },
  {
    id: 2,
    name: 'Настя',
    health: 3,
    description:
      'Работает медсестрой, а значит, что ее аптечка дает не 1 дополнительную жизнь, а сразу две.',
    image: img2,
    inventory: [items[4]],
    skill: 1,
    profession: 'Медсестра',
  },
  {
    id: 3,
    name: 'Макс',
    health: 3,
    description:
      'Самый младший игрок, зато самый быстрый. Его суперспособность – добавлять +1 шаг к ходу, если ему так будет нужно.',
    image: img3,
    inventory: [],
    skill: 1,
    profession: 'Студент',
  },
  {
    id: 4,
    name: 'Надя',
    health: 3,
    description:
      'Работает в полиции. С самого начала игры у нее в запасе есть пистолет. И какое бы ей далее оружие не выпало, своим законным она может пользоваться неограниченное количество раз.',
    image: img4,
    inventory: [items[9]],
    skill: 1,
    profession: 'Полицейский',
  },
  {
    id: 5,
    name: 'Борис',
    health: 5,
    description:
      'Невероятно здоровый и выносливый. В начале игры у него на две жизни большеб чем у остальных',
    image: img5,
    inventory: [],
    skill: 1,
    profession: 'Вышибала',
  },
];
