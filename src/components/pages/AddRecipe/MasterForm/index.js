import React, { Component } from 'react'
import RecipeForm from '../RecipeForm';
import RecipeCreateDetails from '../RecipeCreateDetails';
import { TweenLite, Back, Power4, Power2 } from 'gsap';
import { CSSTransition } from 'react-transition-group';
//

class MasterForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false
    }
  }
  //
  componentDidMount() {
    TweenLite.from(this.container, 0.7, { autoAlpha: 0, y: 100, ease: Back.easeInOut });
  }
  //
  enterRecipeDisplay = (target) => {
    TweenLite.to(this.container, .8, { className: '+=expanded-display', width: '100vw', height: '100vh', ease: Power4.easeIn });
    TweenLite.to(target, .5, { autoAlpha: 0 });
    TweenLite.delayedCall(1, () => {
      this.setState({ expanded: !this.state.expanded })
    })
  }
  //
  reverseAnimate = (target) => {
    TweenLite.to(target, .1, { autoAlpha: 0, onComplete: () => {
      TweenLite.to(this.container, { minHeight: 'calc(100vh - 6em)' });
      TweenLite.to(this.container, .5, { className: '-=expanded-display', width: "40%", height: '45em', ease: Power2.easeOut, onComplete: () => {
        this.setState({ expanded: !this.state.expanded })
      } });
    }});
  }
  render() {
    const { expanded } = this.state;
    return (
      <div className="master-form-container" ref={container => this.container = container}>
        {!expanded 
          ? <CSSTransition
              in={!expanded}
              appear={true}
              timeout={1000}
              classNames="fade" 
            >
              <RecipeForm 
                enterRecipeDisplay={this.enterRecipeDisplay} 
                expanded={expanded} 
              />
            </CSSTransition>
          : <CSSTransition
              in={expanded}
              appear={true}
              timeout={1000}
              classNames="fade" 
            >
              <RecipeCreateDetails 
                exitRecipeDisplay={this.reverseAnimate} 
              />
            </CSSTransition>}
      </div>    
    )
  }
}
export default MasterForm;
