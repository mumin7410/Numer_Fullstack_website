import React from "react";
import Secant from "../../Components/Content/SecantContent"
import Memes from "../../../src/Gif/cat.gif"
const SeCant = ()=> {
    return(
        <Secant 
          MethodTopicText={"SECANT\nMETHOD"} 
          MethodDescripeText={"In numerical analysis, fixed-point iteration is a method of computing fixed points of a function"}
          Memes={Memes}
      />
    )
}
export default SeCant;