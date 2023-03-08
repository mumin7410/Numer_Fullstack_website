import React from "react";
import Content from "../../Components/Content/Content";
import FalsePositionContent from "../../Components/Content/FalsePositionContent"
import Memes from "../../../src/Gif/bot.gif"
const FalsePosition = ()=> {
  
    return(
        <FalsePositionContent 
          MethodTopicText={"FALSE POSITION\nMETHOD"} 
          MethodDescripeText={"the regula falsi, method of false position, or false position method is a very old method for solving an equation with one unknown"}
          Memes={Memes}
      />
    )
}
export default FalsePosition;