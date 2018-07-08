import React from 'react';

class Spaceship extends React.component {
  render() {
    return (
      <div className="spaceship">
      {this.props.name}
      {this.props.speed}
      {this.props.hasRockets}
      {this.props.colors}
    )
  }
}

Spaceship.defaultProps = {
  speed = "slow"
  hasRockets = false
  colors = ['black', 'red']
}

export default Spaceship;
