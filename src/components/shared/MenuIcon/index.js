import React, { Component } from 'react';
import { TimelineLite, Power1 } from 'gsap';
import styles from './menu-icon.module.scss';
import { Consumer } from '../../../context';
//

class MenuIcon extends Component {
  constructor(props) {
    super(props);
    this.fork = null;
    this.spoon = null;
    this.knife = null;
  }

  componentDidMount() {
    this.tl = new TimelineLite({ paused: true, reversed: true });
    this.tl
      .to(
        this.spoon,
        0.5,
        {
          transformOrigin: '14.385px 70%',
          fill: '#7692FF',
          rotation: 45,
          x: 100,
          y: -50,
          ease: Power1.easeInOut
        },
        'menu'
      )
      .to(
        this.knife,
        0.5,
        {
          transformOrigin: '68.77px 70%',
          fill: '#7692FF',
          rotation: -45,
          x: -100,
          y: -50,
          ease: Power1.easeInOut
        },
        'menu'
      )
      .to(
        this.fork,
        0.4,
        {
          autoAlpha: 0
        },
        'menu'
      );
  }

  burgerToggle = () => {
    this.tl.reversed() ? this.tl.restart() : this.tl.reverse();
  };

  render() {
    return (
      <Consumer>
        {context => (
          <div
            className={styles.container}
            onClick={() => {
              this.burgerToggle();
              context.funcGun(this.burgerToggle);
            }}
          >
            <svg viewBox='0 0 493.168 493.168'>
              <g id='cutlery'>
                <path
                  ref={fork => {
                    this.fork = fork;
                  }}
                  d='M306.734,0c-4.512,0-8.174,3.659-8.174,8.188v100.72c0,4.543-3.677,8.219-8.219,8.219
                  c-4.543,0-8.219-3.676-8.219-8.219V8.188c0-4.529-3.664-8.188-8.174-8.188h-0.096c-4.511,0-8.169,3.659-8.169,8.188v100.72
                  c0,4.543-3.677,8.219-8.224,8.219c-4.543,0-8.219-3.676-8.219-8.219V8.188c0-4.529-3.658-8.188-8.17-8.188h-0.099
                  c-4.511,0-8.169,3.659-8.169,8.188v100.72c0,4.543-3.677,8.219-8.219,8.219c-4.543,0-8.22-3.676-8.22-8.219V8.188
                  c0-4.529-3.663-8.188-8.174-8.188c-4.285,0-7.755,3.464-7.755,7.736c0,25.491,0,105.281,0,108.669
                  c0,33.214,11.129,51.245,27.743,59.689c13.406,6.82,21.255,21.174,19.794,36.137l-23.903,244.128
                  c-0.916,9.424,2.183,18.797,8.539,25.798c6.36,7.015,15.382,11.011,24.851,11.011c9.473,0,18.495-3.997,24.855-11.011
                  c6.355-7.001,9.455-16.375,8.539-25.798l-23.903-244.128c-1.462-14.963,6.405-29.316,19.794-36.137
                  c16.613-8.445,27.738-26.475,27.738-59.689c0-3.388,0-83.177,0-108.669C314.484,3.464,311.019,0,306.734,0z'
                />
                <path
                  ref={spoon => {
                    this.spoon = spoon;
                  }}
                  d='M87.935,0C63.423,0,30.912,66.013,30.912,116.405c0,33.214,11.124,51.245,27.742,59.689
                  c13.402,6.82,21.256,21.174,19.795,36.137L54.545,456.359c-0.916,9.424,2.184,18.797,8.539,25.798
                  c6.356,7.015,15.379,11.011,24.852,11.011c9.473,0,18.494-3.997,24.851-11.011c6.356-7.001,9.454-16.375,8.539-25.798
                  L97.422,212.231c-1.462-14.963,6.405-29.316,19.794-36.137c16.618-8.445,27.742-26.475,27.742-59.689
                  C144.958,66.013,113.752,0,87.935,0z'
                />
                <path
                  ref={knife => {
                    this.knife = knife;
                  }}
                  d='M440.218,232.891c3.098,0,5.602-2.503,5.602-5.603V9.825c0-5.427-4.397-9.825-9.837-9.825
                  c-4.705,0-8.847,3.113-10.145,7.642l-34.054,118.733c-9.951,34.738-3.852,72.13,16.633,101.906c1.993,2.892,5.281,4.61,8.782,4.61
                  l-21.883,223.468c-0.916,9.424,2.184,18.797,8.544,25.798c6.355,7.015,15.378,11.011,24.852,11.011
                  c9.468,0,18.489-3.997,24.85-11.011c6.356-7.001,9.455-16.375,8.538-25.798L440.218,232.891z'
                />
              </g>
            </svg>
          </div>
        )}
      </Consumer>
    );
  }
}
export default MenuIcon;
