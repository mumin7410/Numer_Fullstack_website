import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { MenuButton } from './Button.element';
import { BG, ButtonSec, Line } from './Menubar.element';

const Menubar = () => {
    return(
        <>
        <BG>
            <ButtonSec>
                <Link to='/'><MenuButton>Bisection</MenuButton></Link>
                <Link to='/falsePosition'><MenuButton>False position</MenuButton></Link>
                <Link to='/Onepoint'><MenuButton>One-point</MenuButton></Link>
                <Link to='Newton'><MenuButton>Newton-raphson</MenuButton></Link>
                <Link to='SeCant'><MenuButton>Secant</MenuButton></Link>
                <Link to='#'><MenuButton>Taylor series</MenuButton></Link>
                <Link to='Cramer'><MenuButton>Cramer's rule</MenuButton></Link>
                <Link to='#'><MenuButton>Gauss elimination</MenuButton></Link>
                <Link to='#'><MenuButton>Inverse Matrix</MenuButton></Link>
            </ButtonSec>
            <div style={{ justifyContent:'center',display:'flex', border:'none',width:'65%', height:'5px',background:'#2D3943',boxShadow:'1px 3px #1C242B',borderRadius:'5px'}}></div>
        </BG>
        </>
    );
}

export default Menubar;