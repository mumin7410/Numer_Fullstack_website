import React from "react";
import NewTon from "../../Components/Content/NewtonContent"
import Memes from "../../../src/Gif/walk.gif"
const Newton = ()=> {
    return(
        <NewTon 
          MethodTopicText={"NEWTON\nMETHOD"} 
          MethodDescripeText={"In numerical analysis, fixed-point iteration is a method of computing fixed points of a function"}
          Memes={Memes}
      />
    )
}
export default Newton;