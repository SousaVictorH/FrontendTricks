import React from 'react';
import styled from 'styled-components';

import img from "../../images/img.jpg";

function Component1(){
    return(
        <MainComponent>
            
            <div className="container">
                <div className="box">
                    <div className="imgBox">
                        <img src={img} alt="img"/>
                    </div>
                    <div className="contentBox">
                        <div className="content">
                            <h2>Image One</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing 
                                elit. Qui nemo quia officia sunt similique, quas 
                                asperiores nisi laborum modi, autem maiores blanditiis
                                am, sed a. Totam itaque autem architecto ipsam!
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </MainComponent>
    );
}

export default Component1;

const MainComponent = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;

.container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
}

.box{
    position: relative;;
    width: 450px;
    height: 320px;
    background: #000;
    margin: 20px;
}

.imgBox img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contentBox{
    position: absolute;
    top: 40px;
    bottom: 40px;
    right: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.95);
    transition: transform .5s;
    transform-origin: right;
    transform: scaleX(0);
}

.box:hover .contentBox{
    transition: transform .5s;
    transform-origin: left;
    transform: scaleX(1);
}

.content{
    position: relative;
    padding: 20px 60px;
    opacity: 0;
    visibility: hidden;
}

.box:hover .content{
    opacity: 1;
    visibility: visible;
    transition: .5s;
    transition-delay: .5s;
}

.content h2{
    color: #fff;
    font-weight: 600;
    margin-bottom: 10px
}

.content p{
    color: #fff;
    font-weight: 400;
}
`;