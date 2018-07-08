// Code The Spaceship Component Here
class Spaceship extends React.component {
  render() {
    return (
      <div className="spaceship">
      {this.props.name}
      {this.props.speed}
    )
  }
}
