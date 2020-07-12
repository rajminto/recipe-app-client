import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenLite, Back } from 'gsap';
import styles from './card.module.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.container = null;
  }

  componentDidMount() {
    TweenLite.from(this.container, 0.7, {
      autoAlpha: 0,
      ease: Back.easeInOut
    });
  }

  render() {
    return (
      <div
        ref={container => {
          this.container = container;
        }}
        className={`${styles.cardContainer} ${this.props.className}`}
      >
        {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Card.defaultProps = {
  children: null,
  className: ''
};

export default Card;
