import React, { Component } from 'react'
import styles from './card.module.scss'
import { TweenLite, Back } from 'gsap';

class Card extends Component{
  constructor(props){
    super(props);
    this.container = null
  }
  componentDidMount() {
    TweenLite.from(this.container, .7, { autoAlpha: 0, y: 100, ease: Back.easeInOut })
  }
  
  render(){
    return(
      <div ref={container => this.container = container} className={`${styles.cardContainer} ${this.props.className}`}>
        {this.props.children}
      </div>
    )
  }
}
export default Card


