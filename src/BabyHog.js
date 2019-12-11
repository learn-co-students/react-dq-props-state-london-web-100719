import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import normalBaby from "./assets/unadulterated-hoglette.png";
import SunBaby from "./assets/sun-eyes.png";
import BlueBaby from "./assets/blue-eyes.png";
import GlowingBaby from "./assets/glowing-eyes.png";

const BabyHog = props => {
  const [weight, setWeight] = useState(100);
  const [height, setHeight] = useState(200);

  const changeWeight = e => {
    let newWeight = weight;
    let newHeight = height;
    if (e.target.name === "+") {
      newWeight += 10;
      newHeight += 10;
    } else {
      newWeight -= 10;
      newHeight -= 10;
    }

    setWeight(newWeight);
    setHeight(newHeight);
  };

  const colorMap = {
    normal: normalBaby,
    sun: SunBaby,
    glowing: GlowingBaby,
    blue: BlueBaby
  };

  const chooseImage = colorMap => {
    return colorMap[props.eyeColor];
  };

  return (
    <li className="hogbabies">
      <h1>Name {props.name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby:{props.hobby}</h3>
      <h4>Eye Color:{props.eyeColor}</h4>

      <Button onClick={changeWeight} name="+">
        Increase Weight
      </Button>
      <Button onClick={changeWeight} name="-">
        Decrease Weight
      </Button>

      <div className="hb-wrap">
        <img
          src={chooseImage(colorMap)}
          style={{ height: `${height}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
};

export default BabyHog;
