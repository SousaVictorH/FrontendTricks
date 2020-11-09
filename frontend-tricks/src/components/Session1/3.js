import React from 'react';
import styled from 'styled-components';

import {Link} from "react-router-dom";
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaBehance} from "react-icons/fa";

function Component3(){
    return(
        <MainComponent>

            <Link className="link">
                <i><FaFacebook/></i>
            </Link>

            <Link className="link">
                <i><FaTwitter/></i>
            </Link>

            <Link className="link">
                <i><FaInstagram/></i>
            </Link>

            <Link className="link">
                <i><FaYoutube/></i>
            </Link>

            <Link className="link">
                <i><FaLinkedin/></i>
            </Link>

            <Link className="link">
                <i><FaBehance/></i>
            </Link>

        </MainComponent>
    );
}

export default Component3;

const MainComponent = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2c3a47;

    .link{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        width: 100px;
        height: 100px;
        color: #6ab04c;
        position: relative;
        transition: .4s linear;
    }

    .link::before, .link::after{
        content: "";
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        transition: .4s linear;
    }

    .link:hover{
        transform: scale(.8);
    }

    .link:hover::before{
        border-left: 4px solid;
        border-right: 4px solid;
        transform skewX(20deg);
    }

    .link:hover::after{
        border-top: 4px solid;
        border-bottom: 4px solid;
        transform skewY(-20deg);
    }
`;