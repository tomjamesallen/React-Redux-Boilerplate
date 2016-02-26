import React from 'react';
import Radium from 'radium';
import componentWidthMixin from 'react-component-width-mixin';

import ThemeColors from '../constants/ThemeColors';
import SizingVars from '../constants/SizingVars';

export default Radium(React.createClass({

  mixins: [componentWidthMixin],

  /**
   * Render the App component.
   * @return {object}
   */
  render() {

    var componentBreakpoint = 400;
    var componentSize = this.state.componentWidth;

    var styles = {
      base: [{
        padding: SizingVars.gutter,
        marginTop: SizingVars.gutter,
        border: `3px solid ${ThemeColors.primary}`,
        backgroundColor: ThemeColors.secondary
      }],
      heading: [{
        color: ThemeColors.primary
      }]
    };

    if (componentSize > componentBreakpoint) {
      styles.base.push({
        backgroundColor: ThemeColors.primary
      });
      styles.heading.push({
        color: ThemeColors.secondary
      });
    }

    return (
      <div style={styles.base}>
        <h2 style={styles.heading}>Reactive component</h2>
        <p>I am currently {componentSize}px wide!</p>
        <p>{componentSize > componentBreakpoint ? 'Large format' : 'Small format'}</p>
      </div>
    );
  }

}));
