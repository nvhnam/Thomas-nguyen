import React from "react";
import { LiveContainer, LiveBanner } from "./LiveContainElement";
import Live from "../Live";
import {
  homeObjFive,
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../Live/Data";

const LiveContain = () => {
  return (
    <>
      <LiveContainer id='live'>
        <LiveBanner>LIVE</LiveBanner>
        <Live {...homeObjOne} />
        <Live {...homeObjTwo} />
        <Live {...homeObjThree} />
        <Live {...homeObjFour} />
        <Live {...homeObjFive} />
      </LiveContainer>
    </>
  );
};

export default LiveContain;
