import React from 'react'
// import { Link } from 'react-router'

// import TransitionHook from '../mixins/TransitionHook'

// function transitionHook(call) {
//   call.resolve()
// }

// Create About component.
var Home = React.createClass({

  // mixins: [ TransitionHook(transitionHook) ],

  // contextTypes: {
  //   history: React.PropTypes.object.isRequired,
  //   location: React.PropTypes.object.isRequired,
  //   params: React.PropTypes.object.isRequired
  // },

  /**
   * Render the About component.
   * @return {object}
   */
  render() {
    return (
      <div className='home'>
        <h2 className='home__heading'>Home</h2>
        <p>A home page</p>
      </div>
    )
  }

})

export default Home
