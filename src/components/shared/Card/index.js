import React, { useEffect, useRef } from 'react';
import { node, string } from 'prop-types';
import { gsap } from 'gsap';
import styles from './card.module.scss';

const Card = ({ className, children }) => {
  let containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef, {
      duration: 0.7,
      autoAlpha: 0,
      ease: 'back.easeInOut'
    });
  }, []);

  return (
    <div
      ref={container => {
        containerRef = container;
      }}
      className={`${styles.cardContainer} ${className}`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: node,
  className: string
};

Card.defaultProps = {
  children: null,
  className: ''
};

export default Card;
