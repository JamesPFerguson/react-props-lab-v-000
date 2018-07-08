// Code The Spaceship Component Here
import "React" from "react"
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
export default Spaceship;
