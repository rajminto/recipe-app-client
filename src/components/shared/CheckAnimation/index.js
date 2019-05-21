import React, { Component } from 'react'
import { TimelineLite, TweenMax } from 'gsap'
import { DrawSVGPlugin } from '../../../utils/gsap/DrawSVGPlugin'
import styles from './check-animation.module.scss'
import TweenLite from 'gsap/TweenLite';


class CheckAnimation extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.circle = null
    this.check = null
  }
  componentDidMount(){
    TweenLite.set(this.circle, { drawSVG: "0%" })
    TweenLite.set(this.check, { drawSVG: "0%" })
    this.animateCheck()
  }

  animateCheck = () => {
    let tl = new TimelineLite()
    tl.to(this.circle, .6, { drawSVG: "0% 100%" })
      .to(this.check, .4, { drawSVG: "0% 100%" })
  }

  render() {
    const { animationContainer, circle, check } = styles
    return (
      <div className={animationContainer}>
        <svg viewBox="0 0 797 797">
          <circle ref={circle => this.circle = circle} class={circle} cx="398.5" cy="398.5" r="381.5" />
          <path ref={check => this.check = check} class={check} d="M824.59,572.75,939.32,662c3.29,1.35,6.1,1,4.28-.48l194.64-245" transform="translate(-591.91 -155.2)" />
        </svg>
      </div>
    )
  }
} 
export default CheckAnimation