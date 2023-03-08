import React from "react";
import CramerRule from "../../Components/Content/CramerContent";
import Memes from "../../../src/Gif/orb.gif"

const Cramer = () => {
    return(
        <CramerRule 
          MethodTopicText={"CRAMER\nMETHOD"} 
          MethodDescripeText={"an approximation method to find the roots of the given equation\nby repeatedly dividing the interval"}
          Memes={Memes}
      />
    )
}
export default Cramer;