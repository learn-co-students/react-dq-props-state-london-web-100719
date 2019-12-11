import React, { useState } from "react";
import Master from "./assets/master-hog.png";
import BabyHog from "./BabyHog";
import offspring from "./db.js";

const MasterHog = () => {
  const [eyeColor, setEyeColor] = useState("blue");

  const changeEyeColor = e => {
    setEyeColor(e.target.value);
  };

  const generateBabies = () => {
    return offspring.map(baby => {
      return (
        <BabyHog
          key={baby.id}
          id={baby.id}
          name={baby.name}
          hobby={baby.hobby}
          eyeColor={eyeColor}
        />
      );
    });
  };

  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        onChange={changeEyeColor}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        onChange={changeEyeColor}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        onChange={changeEyeColor}
      />
      Glowing<br></br>
      <h2>Name: Master Blaster</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="masters-domicile">
        <img id="master-blaster" src={Master} alt="" />
      </div>
      <ul className="hoglist">{generateBabies()}</ul>
    </div>
  );
};

export default MasterHog;
