import React, { Component } from 'react';
import { bool } from 'prop-types';
import { gsap } from 'gsap';
import { Transition } from 'react-transition-group';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import styles from './check-animation.module.scss';

class CheckAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.circle = null;
    this.check = null;
  }

  componentDidMount() {
    gsap.registerPlugin(DrawSVGPlugin);
  }

  setCheck = () => {
    gsap.set(this.circle, { drawSVG: '0%' });
    gsap.set(this.check, {
      drawSVG: '0%',
      onComplete: () => {
        this.animateCheck();
      }
    });
  };

  animateCheck = () => {
    const tl = gsap.timeline();
    tl.to(this.circle, { duration: 0.6, drawSVG: '0% 100%', ease: 'power1.easeIn' }).to(
      this.check,
      {
        duration: 0.4,
        drawSVG: '0% 100%',
        ease: 'power1.easeIn'
      }
    );
  };

  render() {
    const { animationContainer, circle, check } = styles;
    return (
      <Transition
        timeout={500}
        mountOnEnter
        unmountOnExit
        onEntering={this.setCheck}
        in={this.props.formValid}
        onExit={node => {
          gsap.to(node, { duration: 0.5, autoAlpha: 0 });
        }}
      >
        <div className={animationContainer}>
          <svg viewBox='0 0 797 797'>
            <circle
              ref={circleRef => {
                this.circle = circleRef;
              }}
              className={circle}
              cx='398.5'
              cy='398.5'
              r='381.5'
            />
            <path
              ref={checkRef => {
                this.check = checkRef;
              }}
              className={check}
              d='M824.59,572.75,939.32,662c3.29,1.35,6.1,1,4.28-.48l194.64-245'
              transform='translate(-591.91 -155.2)'
            />
          </svg>
        </div>
      </Transition>
    );
  }
}

CheckAnimation.propTypes = {
  formValid: bool.isRequired
};
export default CheckAnimation;
