/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import './SpinnerPage.scss';
import image from '../../components/background/Snipper.jpg';
import { Script } from './spped';

// export const SpinnerPage = () => {
//   const scriptEl = new Script();
//   return (
//     <div className='deal-wheel'>
//       <ul className='spinner' />
//       <div className='ticker' />
//       <button className='btn-spin' onClick={scriptEl.setupWheel}>
//         Run
//       </button>
//     </div>
//   );
// };

class SpinnerPage extends Component {
  workerScript: Script = new Script();

  render(): React.ReactNode {
    const comp = () => {
      this.workerScript.setupWheel();
    };

    return (
      <div className='deal-wheel'>
        <ul className='spinner'>
          <img src={image} className='image_backround' alt='img' />
        </ul>
        <div className='ticker' />
        <button className='btn-spin' onClick={comp}>
          Run
        </button>
      </div>
    );
  }
}

export default SpinnerPage;
