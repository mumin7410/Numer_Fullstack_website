import styled from "styled-components";

export const BG = styled.div`
    display:'flex';
    height:165vh;
    background-color:#232E37;
    padding: 50px 150px 0;
`

export const ContentSec = styled.div`
    display:flex;
    // flex-direction:row;
    width:100%;
    // text-align:center;
    // align-items:center;
    justify-content:center;
    height: 74vh;
`

export const Meme = styled.div`
    display:flex;
    flex-direction:column;
    width: 70%;
    text-align:center;
    align-items:center;
    justify-content:center;
    padding: 0 10px 0 10px;
    // background-color:white;
`

export const Method = styled.div`
    display:flex;
    flex-direction:column;
    width: 30%;
    background-color:#313E4A;
    padding: 30px;
    border-radius:20px;
    box-shadow: 9px 12px #1C242B;
    font-family: 'Lato', sans-serif;
`

export const MethodTopic = styled.div`
    color:#E4E4E4;
    font-size:50px;
`
export const MethodDescripe = styled.div`
color:#E4E4E4;
opacity:0.7;
`

export const InputSec = styled.div`
    display = flex;
    margin-top: 65px;
`

export const InputGroup = styled.div`
    display: flex;
    // background-color:red;
    align-items: center;
    font-family: 'Lato', sans-serif;
    margin-bottom:15px;
`

export const InputTitle = styled.div`
    color: #E4E4E4;
    font-family: 'Lato', sans-serif;
    margin-right:10px;
    width:30px;
    text-align: center;
`

export const InputValue = styled.input`
    border: none;
    outline: none;
    border-color: none;
    color:#E4E4E4;
    border-radius: 10px;
    height:35px;
    background-color:#232E37;
    box-shadow: inset 10px 10px 10px #1C242B;
`