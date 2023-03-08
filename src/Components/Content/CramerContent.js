import React, { useEffect, useState } from "react";
import { BG, ContentSec, InputGroup, InputSec, InputTitle, InputValue, Meme, Method, MethodDescripe, MethodTopic } from "./CramerContent.element";
import { MenuButton } from "../Menu/Button.element"
const math = require('mathjs');

//Input Part--------------------------------------------------------------------------------------------------------------------------------
const Content = ({MethodTopicText,MethodDescripeText,Memes}) =>{
    const [arr,setArr] = useState([]);
    let tempArr = [];
      //calculation
      const [a,seta] = useState(0);
      const ahandleChange = (e) => {
        seta(e.target.value);
    }
    useEffect(() => {
        BisectionCal();
      }, [a]);
      //Calculator:   
    const BisectionCal = () => {
        let xn = 1;
        let x_of = 1;
        for(let i = 1; i <=((parseInt(a)+1)*(parseInt(a)+1)) - (parseInt(a)+1) ; i++){
            if(xn%(parseInt(a)+1) == 0){
                tempArr.push({id:`T${x_of}`,xOf:x_of})
                xn=1;
                x_of++;
            }
            else{
                tempArr.push({id:`X${xn}`,xOf:x_of})
                xn++;
            }
        }
        setArr(tempArr);
        console.log(arr);
    }
    
//End Input Part--------------------------------------------------------------------------------------------------------------------------------
    return(
        <>
            <BG>
                <ContentSec>
                    <Meme>
                        <div style={{display:'grid',gridTemplateColumns: `repeat(${parseInt(a)+1}, 1fr)`,gap: '0px',width:'100%',gap:'15px',justifyItems:'center'}}>
                            {arr.map((i) => {
                                return(
                                    <>
                                    <div>
                                        <div style={{color:'#E4E4E4'}}>{i.id}</div>
                                        <InputValue 
                                        style={{boxShadow:'inset 10px 10px 10px 5px #1C242B'}}
                                        />
                                    </div>
                                    </>
                                )
                            })}
                        </div>
                    </Meme>
                    <Method>
                        <MethodTopic>
                        {MethodTopicText}
                        </MethodTopic>
                        <MethodDescripe>
                            {MethodDescripeText}
                        </MethodDescripe>
                        <InputSec>
                            <InputGroup>
                                <InputTitle>Dimension:</InputTitle><InputValue onChange={ahandleChange} />
                            </InputGroup>
                            <InputGroup>
                            <MenuButton style={{background:'#0A1929'}} onClick={BisectionCal}>SOLVE</MenuButton>
                            <MenuButton style={{background:'#0A1929'}}>RANDOM</MenuButton>
                            </InputGroup>
                        </InputSec>
                    </Method>
                </ContentSec>
                {/* --------------------------------------------------------------------------------------------------------------------------- */}
            </BG>
        </>
      )
}

export default Content;