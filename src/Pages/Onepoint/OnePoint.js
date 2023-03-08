import React from "react";
import Onepoint from "../../Components/Content/OnePointContent"
import Memes from "../../../src/Gif/duck.gif"
const OnePoint = ()=> {
    return(
        <Onepoint 
          MethodTopicText={"ONEPOINT\nMETHOD"} 
          MethodDescripeText={"In numerical analysis, fixed-point iteration is a method of computing fixed points of a function"}
          Memes={Memes}
      />
    )
}
export default OnePoint;