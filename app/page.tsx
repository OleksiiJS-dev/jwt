"use client"

import Button from "./comp/btnComp";
import { WheelOfFortune } from "./comp/wheel/WheelOfFortune"
// import server from './server/server';
import {Player} from './comp/Player'

export default function Home() {
  function wheelStart() {
    console.log("yooo")
  }
  const btnText = 'Props'

  const obj = {
    1: {}, 2: {}, 3: {}, 4: {}
  }
  const players = {
    playerFirst: {
      name: "Adam",
      avatar: "url",
    },
    playerSecond: {
      name: "John",
      avatar: "url",

    },
    playerThird: {
      name: "Marselle",
      avatar: "url",
    }
  }
  console.log(obj)
  return (
    <div>
      {players.forEach((player)=>{
        <p>{player.name}</p>
      })}
      <Player name={players.playerFirst.name} />
      <WheelOfFortune 
      // players={players} 
      // winner={}
      ></WheelOfFortune>
     <Button text = {btnText} ></Button>
    </div>
  );
}
