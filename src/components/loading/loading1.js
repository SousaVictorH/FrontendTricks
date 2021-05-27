import React from 'react';
import styled from 'styled-components';

function Component1(){
    return(
        <MainComponent>
            
            <h2 data-text="Loading...">Loading...</h2>

        </MainComponent>
    );
}

export default Component1;

const MainComponent = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
background: #252849;

h2{
    position: relative;
    font-size: 14vw;
    color: #252849;
    -webkit-text-stroke: 0.3vw #383d52;
    text-transform: uppercase;
}

h2::before{
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    color: #01fe87;
    -webkit-text-stroke: 0.3vw #383d52;
    border-right: 2px solid #01fe87;
    overflow: hidden;
    animation: animate 6s linear infinite;
}

@keyframes animate{
    0%, 10%, 100%{
        width: 0;
    } 70%, 90% {
        width: 100%;
    } 
}
`;