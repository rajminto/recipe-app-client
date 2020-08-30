import React, { Component } from 'react';
import { bool, func, string } from 'prop-types';
import { gsap } from 'gsap';
import { Transition } from 'react-transition-group';
import styles from './alert.module.scss';
import Button from '../Button';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { showAlert, text, subText, onClose } = this.props;
    const { container, transitionWrap } = styles;
    return (
      <Transition
        timeout={1000}
        mountOnEnter
        unmountOnExit
        in={showAlert}
        addEndListener={(node, done) => {
          gsap.to(node, {
            duration: 0.5,
            y: showAlert ? 0 : 400,
            autoAlpha: showAlert ? 1 : 0,
            ease: showAlert ? 'back.easeOut' : 'back.easeIn',
            onComplete: done
          });
        }}
      >
        <div className={`${container} ${transitionWrap}`}>
          <h1>{text}</h1>
          <p>{subText}</p>
          <Button clickFunc={onClose} />
        </div>
      </Transition>
    );
  }
}

Alert.propTypes = {
  onClose: func.isRequired,
  showAlert: bool.isRequired,
  subText: string.isRequired,
  text: string.isRequired
};

export default Alert;
