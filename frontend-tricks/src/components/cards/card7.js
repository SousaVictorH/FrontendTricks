import React from 'react';
import styled from 'styled-components';

import {FaUser, FaSearch, FaMapPin} from "react-icons/fa";

function Component1(){
    return(
        <MainComponent>
            
            <div className="container">
                <div className="box">

                    <div className="icon">
                        <FaUser className="i"/>
                    </div>

                    <div className="content">
                        <h3>User</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Maxime repudiandae alias blanditiis obcaecati nam modi! 
                            Omnis ad fugiat animi, quam possimus quo recusandae ipsam 
                            culpa mollitia natus debitis minus magnam.
                        </p>
                    </div>
                </div>


                <div className="box">

                    <div className="icon">
                        <FaSearch className="i"/>
                    </div>

                    <div className="content">
                        <h3>Search</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Maxime repudiandae alias blanditiis obcaecati nam modi! 
                            Omnis ad fugiat animi, quam possimus quo recusandae ipsam 
                            culpa mollitia natus debitis minus magnam.
                        </p>
                    </div>
                </div>

                <div className="box">

                    <div className="icon">
                        <FaMapPin className="i"/>
                    </div>

                    <div className="content">
                        <h3>Localization</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Maxime repudiandae alias blanditiis obcaecati nam modi! 
                            Omnis ad fugiat animi, quam possimus quo recusandae ipsam 
                            culpa mollitia natus debitis minus magnam.
                        </p>
                    </div>
                </div>
            </div>

        </MainComponent>
    );
}

export default Component1;

const MainComponent = styled.div`
height: 100vh;
width: 100vw;
min-height: 100vh;
min-width: 100vw;

.container{
    display: flex;
    position: relative;
    width: 1200px;
    height: 300px;
    margin: 240px auto;
    background: #fff;
}

.box{
    position: relative;
    width: 370px;
    height: 270px;
    background: #000;
    float: left;
    margin: 15px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 10px;
}

.box:nth-child(1){
    background: #d03852;
}
.box:nth-child(1) .icon{
    background: #f54967;
}

.box:nth-child(2){
    background: #4caf50;
}
.box:nth-child(2) .icon{
    background: #319635;
}

.box:nth-child(3){
    background: #23798e;
}
.box:nth-child(3) .icon{
    background: #328fa5;
}

.icon{
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f00;
    transition: .5s linear;
    z-index: 1;
}

.icon .i{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    transition: .5s linear;
    color: #fff;
}

.box:hover .icon{
    top: 20px;
    left: calc(50% - 40px);
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.box:hover .icon .i{
    font-size: 40px;
}

.box .content{
    position: absolute;
    top: 100%;
    height: calc(100% - 100px);
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    transition: .5s linear;
    color: #fff;
}

.box .content h3{
    margin: 0 0 10px;
    color: #fff;
    font-size: 24px;
}

.box:hover .content{
    top: 100px;
    transition-delay: .2s;
}
`;