import React, { useEffect, useRef } from 'react';
import { bool, shape } from 'prop-types';
import { gsap } from 'gsap';
import styles from './Tooltip.module.scss';

const Tooltip = ({ tooltipPositionProps, showTooltip }) => {
  const { tooltipContainer } = styles;
  let tooltipRef = useRef(null);

  useEffect(() => {
    gsap.set(tooltipRef, { autoAlpha: 1, top: 0, left: 0, scale: 0.2 });
  }, []);

  useEffect(() => {
    if (showTooltip) {
      const tooltipWidth = tooltipRef.getBoundingClientRect().width;
      gsap.set(tooltipRef, { left: tooltipPositionProps.left - tooltipWidth / 2 - 20 });
      gsap.to(tooltipRef, {
        duration: 0.3,
        autoAlpha: 1,
        scale: 1,
        ease: 'back.easeInOut',
        delay: 2
      });
    } else {
      gsap.killTweensOf(tooltipRef);
      gsap.to(tooltipRef, {
        duration: 0.1,
        autoAlpha: 0,
        scale: 0.2
      });
    }
  }, [showTooltip, tooltipPositionProps]);

  return (
    // eslint-disable-next-line no-return-assign
    <div className={tooltipContainer} ref={el => (tooltipRef = el)}>
      <p>{tooltipPositionProps?.label}</p>
    </div>
  );
};

Tooltip.propTypes = {
  showTooltip: bool.isRequired,
  tooltipPositionProps: shape({}).isRequired
};

export default Tooltip;
