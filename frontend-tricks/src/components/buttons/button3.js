import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

function Component1(){
    return(
        <ComponentDiv>
            
            <div className="container">
                <ul>
                    <li><Link className="link">Home</Link></li>  
                    <li><Link className="link">Search</Link></li>  
                    <li><Link className="link">About</Link></li>  
                    <li><Link className="link">Contact</Link></li>    
                </ul>
            </div>

        </ComponentDiv>
    );
}

export default Component1;

const ComponentDiv = styled.div`
background: #000;
height: 100%;
min-height: 100vh;
width: 100%;
min-width: 100vw;

.container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

ul{
    list-style: none;
}

li{
    display: inline-block;
    margin: 0 20px;
}

li .link{
    text-decoration: none;
    display: inline-block;
    color: #fff;
    font-size: 25px;
}

.link::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: .3s;
}

.link:hover::after{
    width: 100%;
    transition: .3s;
}
`;