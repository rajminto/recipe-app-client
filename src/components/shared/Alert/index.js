import React, { Component } from 'react';
import { TweenMax, Back } from 'gsap';
import { Transition } from 'react-transition-group';
import styles from './alert.module.scss';
import Button from '../Button';
//

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  //
  render() {
    const { alert } = this.props;
    const { container, transitionWrap } = styles;
    return (
      <Transition
        timeout={1000}
        mountOnEnter
        unmountOnExit
        in={alert}
        addEndListener={(node, done) => {
          TweenMax.to(node, 0.5, {
            y: alert ? 0 : 400,
            autoAlpha: alert ? 1 : 0,
            ease: alert ? Back.easeOut : Back.easeIn,
            onComplete: done
          });
        }}
      >
        <div className={`${container} ${transitionWrap}`}>
          <h1>{this.props.text}</h1>
          <p>{this.props.subText}</p>
          <Button
            clickFunc={this.props.onClose}
          />
        </div>
      </Transition>
    )
  }
}
export default Alert;