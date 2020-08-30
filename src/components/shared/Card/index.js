import React, { Component } from 'react';
import { node, string } from 'prop-types';
import { gsap } from 'gsap';
import styles from './card.module.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.container = null;
  }

  componentDidMount() {
    gsap.from(this.container, {
      duration: 0.7,
      autoAlpha: 0,
      ease: 'back.easeInOut'
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
  children: node,
  className: string
};

Card.defaultProps = {
  children: null,
  className: ''
};

export default Card;
