import React, { useEffect, useRef } from 'react';
import { bool } from 'prop-types';
import { gsap } from 'gsap';
import { Transition } from 'react-transition-group';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import styles from './check-animation.module.scss';

const CheckAnimation = ({ formValid }) => {
  let circleRef = useRef(null);
  let checkRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);
  }, []);

  const animateCheck = () => {
    const tl = gsap.timeline();
    tl.to(circleRef, { duration: 0.6, drawSVG: '0% 100%', ease: 'power1.easeIn' }).to(checkRef, {
      duration: 0.4,
      drawSVG: '0% 100%',
      ease: 'power1.easeIn'
    });
  };

  const initCheckAnimation = () => {
    gsap.set(circleRef, { drawSVG: '0%' });
    gsap.set(checkRef, {
      drawSVG: '0%',
      onComplete: () => {
        animateCheck();
      }
    });
  };

  return (
    <Transition
      timeout={500}
      mountOnEnter
      unmountOnExit
      onEntering={initCheckAnimation}
      in={formValid}
      onExit={node => {
        gsap.to(node, { duration: 0.5, autoAlpha: 0 });
      }}
    >
      <div className={styles.animationContainer}>
        <svg viewBox='0 0 797 797'>
          <circle
            ref={el => {
              circleRef = el;
            }}
            className={styles.circle}
            cx='398.5'
            cy='398.5'
            r='381.5'
          />
          <path
            ref={el => {
              checkRef = el;
            }}
            className={styles.check}
            d='M824.59,572.75,939.32,662c3.29,1.35,6.1,1,4.28-.48l194.64-245'
            transform='translate(-591.91 -155.2)'
          />
        </svg>
      </div>
    </Transition>
  );
};

CheckAnimation.propTypes = {
  formValid: bool.isRequired
};
export default CheckAnimation;
