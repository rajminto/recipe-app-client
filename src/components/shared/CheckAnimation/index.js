import React, { Component } from 'react';
import { TimelineMax, TweenMax, Power1 } from 'gsap';
import { DrawSVGPlugin } from '../../../utils/gsap/DrawSVGPlugin';
import styles from './check-animation.module.scss';
import { Transition } from 'react-transition-group';

class CheckAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.circle = null;
    this.check = null;
  }

  setCheck = () => {
    TweenMax.set(this.circle, { drawSVG: '0%' });
    TweenMax.set(this.check, {
      drawSVG: '0%',
      onComplete: () => {
        this.animateCheck();
      }
    });
  };

  animateCheck = () => {
    const tl = new TimelineMax();
    tl.to(this.circle, 0.6, { drawSVG: '0% 100%', ease: Power1.easeIn }).to(
      this.check,
      0.4,
      { drawSVG: '0% 100%', ease: Power1.easeIn }
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
          TweenMax.to(node, 0.5, { autoAlpha: 0 });
        }}
      >
        <div className={animationContainer}>
          <svg viewBox="0 0 797 797">
            <circle
              ref={circle => (this.circle = circle)}
              className={circle}
              cx="398.5"
              cy="398.5"
              r="381.5"
            />
            <path
              ref={check => (this.check = check)}
              className={check}
              d="M824.59,572.75,939.32,662c3.29,1.35,6.1,1,4.28-.48l194.64-245"
              transform="translate(-591.91 -155.2)"
            />
          </svg>
        </div>
      </Transition>
    );
  }
}
export default CheckAnimation;
