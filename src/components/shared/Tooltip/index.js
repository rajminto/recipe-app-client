import React, { useEffect, useRef } from 'react';
import { bool, shape } from 'prop-types';
import { TweenMax, Back } from 'gsap';
import styles from './Tooltip.module.scss';

const Tooltip = ({ tooltipPositionProps, showTooltip }) => {
  const { tooltipContainer } = styles;
  let tooltipRef = useRef(null);

  useEffect(() => {
    TweenMax.set(tooltipRef, { autoAlpha: 1, top: 0, left: 0, scale: 0.2 });
  }, []);

  useEffect(() => {
    if (showTooltip) {
      const tooltipWidth = tooltipRef.getBoundingClientRect().width;
      TweenMax.set(tooltipRef, { left: tooltipPositionProps.left - tooltipWidth / 2 - 20 });
      TweenMax.to(tooltipRef, 0.3, {
        autoAlpha: 1,
        scale: 1,
        ease: Back.easeInOut,
        delay: 2
      });
    } else {
      TweenMax.killTweensOf(tooltipRef);
      TweenMax.to(tooltipRef, 0.1, {
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
