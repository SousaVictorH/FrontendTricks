import React from 'react';
import styled from 'styled-components';

import image from "../../images/bg.jpg";

import {FaUser, FaLock} from "react-icons/fa";

function Component2(){
    return(
        <MainComponent>

            <form className="container">

                <h1>Login</h1>

                <div className="text-box">
                    <FaUser className="icon"/>
                    <input type="text" placeholder="Username"/>
                </div>
                
                <div className="text-box">
                    <FaLock className="icon"/>
                    <input type="password" placeholder="Password"/>
                </div>

                <button className="button" type="submit">
                    Sign in
                </button>
                
            </form>

        </MainComponent>
    );
}

export default Component2;

const MainComponent = styled.main`
    height: 100vh;
    width: 100vw;
    background-image: url(${image});
    background-size: cover;

    .container{
        width: 280px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }

    .container h1{
        float: left;
        font-size: 40px;
        border-bottom: 6px solid #4caf50;
        margin-bottom: 50px;
        padding: 13px 0;
    }

    .text-box{
        width: 100%;
        overflow: hidden;
        font-size: 20px;
        padding: 8px 0;
        margin: 8px 0;
        border-bottom: 1px solid #4caf50;
    }

    .text-box .icon{
        width: 26px;
        float: left;
        text-align: center;
    }

    .text-box input{
        border: none;
        outline: none;
        background: none;
        font-size: 18px;
        color: white;
        width: 80%;
        float: left;
        margin: 0 10px;
    }

    button{
        width: 100%;
        background: none;
        border: 2px solid #4caf50;
        color: white;
        padding: 5px;
        font-size: 18px;
        cursor: pointer;
        margin: 12px 0;

        transition: .5s ease-in-out;
    }

    button:hover{
        opacity: 0.7;
    }
`