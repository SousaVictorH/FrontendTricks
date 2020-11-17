import React from 'react';
import styled from 'styled-components';

function Component1(){
    return(
        <MainComponent>
            
            <div className="loading">
                <div className="obj"></div>
                <div className="obj"></div>
                <div className="obj"></div>
                <div className="obj"></div>
                <div className="obj"></div>
                <div className="obj"></div>
                <div className="obj"></div>
                <div className="obj"></div>
            </div>

        </MainComponent>
    );
}

export default Component1;

const MainComponent = styled.div`
width: 100vw;
height: 100vh;
background: #2980b9;

.loading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40px;
    display: flex;
    align-items: center;
}

.obj{
    height: 100%;
    width: 6px;
    background: #fff;
    margin: 0 3px;
    border-radius: 10px;
    animation: loading .8s infinite;
}

.obj:nth-child(2){
    animation-delay: .1s;
}

.obj:nth-child(3){
    animation-delay: .2s;
}

.obj:nth-child(4){
    animation-delay: .3s;
}

.obj:nth-child(5){
    animation-delay: .4s;
}

.obj:nth-child(6){
    animation-delay: .5s;
}

.obj:nth-child(7){
    animation-delay: .6s;
}

.obj:nth-child(8){
    animation-delay: .7s;
}

@keyframes loading{
    0%{
        height: 0;
    }
    50% {
        height: 100%;
    }
    100% {
        height: 0;
    }
}
`;