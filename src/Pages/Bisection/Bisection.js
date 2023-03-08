import React from "react";
import Content from "../../Components/Content/Content";
import Memes from "../../../src/Gif/what.gif"
const Bisection = ()=> {
  
    return(
        <Content 
          MethodTopicText={"BISECTION\nMETHOD"} 
          MethodDescripeText={"an approximation method to find the roots of the given equation\nby repeatedly dividing the interval"}
          Memes={Memes}
      />
    )
}
export default Bisection;