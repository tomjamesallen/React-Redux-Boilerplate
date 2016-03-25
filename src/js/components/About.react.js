import React from 'react'
// import { Link } from 'react-router'
import Radium from 'radium'

import TransitionHook from '../mixins/TransitionHook'

function transitionHook(call) {
  call.resolve()
}

// Create About component.
var About = Radium(React.createClass({

  mixins: [ TransitionHook(transitionHook) ],

  /**
   * Render the About component.
   * @return {object}
   */
  render() {
    return (
      <div className='about'>
        <h2 className='about__heading'>About</h2>
        <p>An about page</p>
      </div>
    )
  }

}))

export default About
