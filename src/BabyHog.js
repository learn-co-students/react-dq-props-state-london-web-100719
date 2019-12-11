import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import normalBaby from "./assets/unadulterated-hoglette.png";
import SunBaby from "./assets/sun-eyes.png";
import BlueBaby from "./assets/blue-eyes.png";
import GlowingBaby from "./assets/glowing-eyes.png";

export default class BabyHog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 100,
      image: normalBaby,
      height: 200
    };
  }

  changeWeight = e => {
    let newWeight = this.state.weight;
    let newHeight = this.state.height;
    if (e.target.name === "+") {
      newWeight += 10;
      newHeight += 10;
    } else {
      newWeight -= 10;
      newHeight -= 10;
    }
    this.setState({
      weight: newWeight,
      height: newHeight
    });
  };

  colorMap = {
    normal: normalBaby,
    sun: SunBaby,
    glowing: GlowingBaby,
    blue: BlueBaby
  };

  chooseImage = () => {
    return this.colorMap[this.props.eyeColor];
  };

  render() {
    return (
      <li className="hogbabies">
        <h1>Name {this.props.name}</h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby:{this.props.hobby}</h3>
        <h4>Eye Color:{this.props.eyeColor}</h4>

        <Button onClick={this.changeWeight} name="+">
          Increase Weight
        </Button>
        <Button onClick={this.changeWeight} name="-">
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img
            src={this.chooseImage()}
            style={{ height: `${this.state.height}px` }}
            alt="MasterBlasterJrJr"
          />
        </div>
      </li>
    );
  }
}
