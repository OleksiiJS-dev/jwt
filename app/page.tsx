"use client"

import Button from "./comp/btnComp";
import { WheelOfFortune } from "./comp/wheel/WheelOfFortune"
// import server from './server/server';

export default function Home() {
  function wheelStart() {
    console.log("yooo")
  }
  const btnText = 'Props'

  const obj = {
    1: {}, 2: {}, 3: {}, 4: {}
  }
  console.log(obj)
  return (
    <div>
      <p>Adam <input type="checkbox" name="Adam" id="Adam" /> </p>
      <p>Jonh <input type="checkbox" name="Jonh" id="John " /></p>
      <p>Marselle <input type="checkbox" name="" id="" /> </p>
      <p>Vinisi <input type="checkbox" name="" id="" /></p>
      <WheelOfFortune></WheelOfFortune>
     <Button text = {btnText} ></Button>
    </div>
  );
}
