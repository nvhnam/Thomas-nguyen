import React from "react";
import {
  LiveWrapper,
  LiveRow,
  LiveCol1,
  LiveCol2,
  LiveHeading,
  LiveDate,
  LiveText,
  LiveImgWrapper,
} from "./LiveElement";
import "./Live.css";

const Live = ({ title, date, description, livePic, alt }) => {
  return (
    <>
      <LiveWrapper>
        <LiveRow>
          <LiveCol1>
            <LiveHeading>{title}</LiveHeading>
            <LiveDate>{date}</LiveDate>
            <LiveText>{description}</LiveText>
          </LiveCol1>
          <LiveCol2>
            <LiveImgWrapper>
              <img className="LiveImg" src={livePic} alt={alt} />
            </LiveImgWrapper>
          </LiveCol2>
        </LiveRow>
      </LiveWrapper>
    </>
  );
};

export default Live;
