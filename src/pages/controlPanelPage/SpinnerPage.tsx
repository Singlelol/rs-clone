/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import { ScriptSpinner } from './ScriptSpinner';
import './SpinnerPage.scss';
import image from '../../images/Snipper.jpg';

export class SpinnerPage extends Component {
  rotateSpinner: ScriptSpinner = new ScriptSpinner();

  render(): React.ReactNode {
    const launchSpinner = () => {
      this.rotateSpinner.setupWheel();
    };
    console.log(this.rotateSpinner.stopRotateAndSelect());

    return (
      <div className='deal-wheel'>
        <ul className='spinner'>
          <img src={image} className='image_backround' alt='img' />
        </ul>
        <div className='ticker' />
        <button className='btn-spin' onClick={launchSpinner}>
          Run
        </button>
      </div>
    );
  }
}
