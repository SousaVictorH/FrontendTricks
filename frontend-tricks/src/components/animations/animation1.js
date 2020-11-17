import React from 'react';
import styled from 'styled-components';

function Component5(){

    const title = "<AgendaOn/>"

    return(
        <MainComponent>

            <div className="container">
                <span className="text1">Welcome in</span>
                <span className="text2">{title}</span>
            </div>

        </MainComponent>
    );
}

export default Component5;

const MainComponent = styled.div`
background: #000;
height: 100vh;    
width: 100vw;

.container{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
}

.container span{
    text-transform: uppercase;
    display: block;
}

.text1{
    color: white;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 8px;
    margin-bottom: 20px;
    background: black;
    position: relative;
    animation: text 3s 1;
}

.text2{
    font-size: 30px;
    color: #6ab04c;
}

@keyframes text{
    0%{
        color: #000;
        margin-bottom: -40px;
    } 30% {
        letter-spacing: 25px;
        margin-bottom: -40px;
    } 85% {
        letter-spacing: 8px;
        margin-bottom: -40px;
    }
}
`;