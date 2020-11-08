import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

import {FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaYoutube} from "react-icons/fa";

function Component1(){
    return(
        <ComponentDiv>
            
            <Link className="mediaBtn">
                <FaFacebook className="icon"/>
            </Link>

            <Link className="mediaBtn">
                <FaTwitter className="icon"/>
            </Link>

            <Link className="mediaBtn">
                <FaGoogle className="icon"/>
            </Link>

            <Link className="mediaBtn">
                <FaInstagram className="icon"/>
            </Link>

            <Link className="mediaBtn">
                <FaYoutube className="icon"/>
            </Link>

        </ComponentDiv>
    );
}

export default Component1;

const ComponentDiv = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;

    .mediaBtn{
        display: inline-block;
        width: 90px;
        height: 90px;
        background-color: #f1f1f1;
        margin: 10px;
        border-radius: 30%;
        box-shadow: 0 5px 15px -5px #00000070;
        color: #3498db;
        overflow: hidden;
        position: relative;
    }

    .mediaBtn .icon{
        position: absolute;
        right: 32px;
        top: 32px;
        line-height: 90px;
        font-size: 26px;
        transition: .2s linear;
    }

    .mediaBtn:hover .icon{
        transform: scale(1.3);
        color: #f1f1f1;
    }

    .mediaBtn::before{
        content: "";
        position: absolute;
        width: 120%;
        height: 120%;
        background: #3498db;

        transform: rotate(45deg);
        left: -110%;
        top: 90%;
    }

    .mediaBtn:hover::before{
        animation: aaa 0.7s 1;
        top: -10%;
        left: -10%;
    }

    @keyframes aaa{
        0%{
            left: -110%;
            top: 90%;
        } 50% {
            left: 10%;
            top: -30%;
        } 100% {
            top: -10px;
            left: -10px;
        }
    }
`;