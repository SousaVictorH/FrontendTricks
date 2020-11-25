import React from 'react';
import styled from 'styled-components';

function Component1(){
    return(
        <MainComponent>
            <div className="spinner"></div>
        </MainComponent>
    );
}

export default Component1;

const MainComponent = styled.div`
width: 100vw;
height: 100vh;
background: #fff;
display: flex;
justify-content: center;
align-items: center;

.spinner{
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: blue;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    animation: spin 1s linear infinite;
}

@keyframes spin{
    to {
        transform: rotate(360deg);
    }
}
`;