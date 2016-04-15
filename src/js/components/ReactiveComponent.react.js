import React from 'react'
import componentWidthMixin from 'react-component-width-mixin'
import classNames from 'classnames'

export default React.createClass({

  mixins: [componentWidthMixin],

  /**
   * Render the App component.
   * @return {object}
   */
  render() {
    const { componentWidth } = this.state
    const componentBreakpoint = 500

    let classes = classNames(
      this.constructor.displayName,
      'reactive-component',
      componentWidth > componentBreakpoint && 'reactive-component--lrg'
    )

    return (
      <div className={classes}>
        <h2>Reactive component</h2>
        <p>Using <code>react-component-width-mixin</code> and <code>Radium</code> to change styles based on the current width of the component.</p>
        <p>I am currently {componentWidth}px wide.</p>
        <p><code>{componentWidth > componentBreakpoint ? 'Component > Breakpoint' : 'Component <= Breakpoint'}</code></p>
      </div>
    )
  }

})
