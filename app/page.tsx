"use client"

import Button from "./comp/btnComp";

// import server from './server/server';

export default function Home() {
  function wheelStart() {
    console.log("yooo")
  }
  const btnText = 'btn text'

  const obj = {
    1: {}, 2: {}, 3: {}, 4:{}
  }
  return (
    <>
      <WheelOfFortune></>
      <Button  ></ Button>
    </>
  );
}
