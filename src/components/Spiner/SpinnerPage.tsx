import { useSpring, animated } from 'react-spring';
import './SpinnerPage.scss';
import image from '../../images/Wheel.png';
import { getSpinnerCount } from '../../utilities/utilities';

type SpinerType = {
  // eslint-disable-next-line react/require-default-props
  setSpiner: (arg: number) => void;
};

const circle = 360;
const allCountSteps = 6;
const rotation = 30;

export const SpinnerPage = ({ setSpiner }: SpinerType) => {
  const [springs, api] = useSpring(() => ({
    from: { transform: `rotate(${rotation * 0}deg)` },
  }));

  const handleClick = () => {
    const step = Math.floor(Math.random() * allCountSteps);
    api.start({
      from: { transform: `rotate(${rotation * step}deg)` },
      to: { transform: `rotate(${circle * 2 - rotation * 2 * step}deg)` },
      onRest: () => {
        const numberOfSteps: number = getSpinnerCount(step) as number;
        setSpiner(numberOfSteps);
      },
    });
  };

  return (
    <div className='deal-wheel'>
      <animated.div style={springs}>
        <img src={image} className='image_backround' alt='img' />
      </animated.div>
      <div className='ticker' />
      <button type='button' className='btn-spin' onClick={handleClick}>
        Покрутить колесо
      </button>
    </div>
  );
};
