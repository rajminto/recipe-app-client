import React, { Component } from 'react'
import RecipeForm from '../RecipeForm';
import RecipeCreateDetails from '../RecipeCreateDetails';
import { TweenLite, Back, Power4 } from 'gsap';
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
    TweenLite.to(this.container, .8, { className: '+=expanded-display', width: '100%', ease: Power4.easeIn });
    TweenLite.to(target, .5, { autoAlpha: 0 });
    TweenLite.delayedCall(1, () => {
      this.setState({ expanded: !this.state.expanded })
    })
  }
  //
  reverseAnimate = (target) => {
    TweenLite.to(target, .5, { autoAlpha: 0, onComplete: () => {
      TweenLite.to(this.container, .8, { className: '-=expanded-display', width: "40em", ease: Power4.easeIn, onComplete: () => {
        this.setState({ expanded: !this.state.expanded })
      } });
    }});
  }
  render() {
    return (
      <div className="master-form-container" ref={container => this.container = container}>
        {!this.state.expanded ? 
          <CSSTransition
            in={!this.state.expanded}
            appear={true}
            timeout={1000}
            classNames="fade" 
          >
            <RecipeForm 
              enterRecipeDisplay={this.enterRecipeDisplay} 
              expanded={this.state.expanded} 
            />
            </CSSTransition> 
        : 
          <CSSTransition
            in={this.state.expanded}
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
