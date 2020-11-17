import React from 'react';
import styled from 'styled-components';

import {Link} from "react-router-dom";
import imagem from "../../images/running_shoes.png";

function Component4(){
    return(
        <MainComponent>

            <div className="container">
                <div className="card">

                    <div className="imgBx">
                        <img src={imagem} alt="nike shoe" width="220px"/>
                    </div>

                    <div className="contentBx">
                        <h2>Nike Shoes</h2>

                        <div className="size">
                            <h3>Size: </h3>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>

                        <div className="color">
                            <h3>Color: </h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <Link className="link">Buy Now</Link>
                    </div>

                </div>
            </div>

        </MainComponent>
    );
}

export default Component4;

const MainComponent = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131313;

    .container{
        position: relative;
    }

    .container .card{
        position: relative;
        width: 320px;
        height: 450px;
        background: #232323;
        border-radius: 20px;
        overflow: hidden;
    }

    .container .card:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #9bdc28;
        clip-path: circle(150px at 80% 20%);
        transition: .5s ease-in-out;
    }

    .container .card:hover:before{
        clip-path: circle(300px at 80% -20%);
    }

    .container .card:after{
        content: "Nike";
        position: absolute;
        top: 30%;
        left: -5%;
        color: rgba(255, 255, 255, 0.04);
        font-size: 12em;
        font-weight: 800;
        font-style: italic;
    }

    .container .card .imgBx{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10000;
        width: 100%;
        height: 220px;
        transition: .5s;
    }

    .container .card:hover .imgBx{
        top: 0%;
        transform: translateY(0%);
    }

    .container .card .imgBx img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-25deg);
        width: 270px;
    }

    .container .card .contentBx{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        text-align: center;
        transition: 1s;
        z-index: 10;
    }

    .container .card:hover .contentBx{
        height: 210px;
    }

    .container .card .contentBx h2{
        position: relative;
        font-weight: 600;
        letter-spacing: 1px;
        color: #fff;
    }

    .container .card .contentBx .size, .container .card .contentBx .color{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 20px;
        transition: .5s;
        opacity: 0;
        visibility: hidden;
    }

    .container .card:hover .contentBx .size{
        opacity: 1;
        visibility: visible;
        transition-delay: .5s;
    }

    .container .card:hover .contentBx .color{
        opacity: 1;
        visibility: visible;
        transition-delay: .6s;
    }

    .container .card .contentBx .size h3, .container .card .contentBx .color h3{
        color: #fff;
        fonr-weight: 300;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-right: 10px;
    }

    .container .card .contentBx .size span{
        width: 26px;
        height: 26px;
        text-align: center;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #111;
        background: #fff;
        margin: 0 5px;
        transition: .5s;
        color: #111;
        border-radius: 4px;
        cursor: pointer;
    }

    .container .card .contentBx .size span:hover{
        background: #9bdc28;
    }

    .container .card .contentBx .color span{
        width: 20px;
        height: 20px;
        background: #ff0;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;
    }

    .container .card .contentBx .color span:nth-child(2){
        background: #9bdc28;
    }

    .container .card .contentBx .color span:nth-child(3){
        background: #03a9f4;
    }

    .container .card .contentBx .color span:nth-child(4){
        background: #e91e63;
    }

    .container .card .contentBx .link{
        display: inline-block;
        padding: 10px 20px;
        background: #fff;
        border-radius: 4px;
        margin-top: 10px;
        text-decoration: none;
        font-weight: 600;
        color: #111;
        opacity: 0;
        transform: translateY(50px);
        transition: .5s;
    }

    .container .card:hover .contentBx .link{
        opacity: 1;
        transform: translateY(0px);
        transition-delay: .75s;
    }
`;