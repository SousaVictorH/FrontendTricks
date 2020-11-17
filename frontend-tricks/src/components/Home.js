import React from 'react';
import styled from 'styled-components';

function Home(){

    const menorIgual = "<=";

    return(
        <HomeComponent>
            <div className="header">
                <h1>Welcome</h1>
                <sup>
                    Please selec a ID
                </sup>
            </div>
            
            <div className="container">
                <div className="box">
                    <h2>For buttons</h2>
                    <p>
                        <h3>buttons/id</h3>
                        <span> 1 {menorIgual} id {menorIgual} 2</span>
                    </p>
                </div>

                <div className="box">
                    <h2>For login</h2>
                    <p>
                        <h3>login/id</h3>
                        <span> 1 {menorIgual} id {menorIgual} 1</span>
                    </p>
                </div>

                <div className="box">
                    <h2>For cards</h2>
                    <p>
                        <h3>cards/id</h3>
                        <span> 1 {menorIgual} id {menorIgual} 6</span>
                    </p>
                </div>

                <div className="box">
                    <h2>For animations</h2>
                    <p>
                        <h3>animations/id</h3>
                        <span> 1 {menorIgual} id {menorIgual} 1</span>
                    </p>
                </div>

                <div className="box">
                    <h2>For loading</h2>
                    <p>
                        <h3>loading/id</h3>
                        <span> 1 {menorIgual} id {menorIgual} 2</span>
                    </p>
                </div>
            </div>

        </HomeComponent>
    );
}

export default Home;

const HomeComponent = styled.div`
width: 100%;
height: 100%;
background: #2c3a47;
color: #111;

display: flex;
align-items: center;
flex-direction: column; 

min-height: 1050px;

.header{
    display: flex;
    align-items: center;
    flex-direction: column; 
}

.header h1{
    font-size: 95px;
    margin: 25px;
    letter-spacing: 7px;
}

.header sup{
    font-size: 42px;
    margin-bottom: 65px;
}

.container{
    width: 80%;

    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 24px;
}

.box{
    margin: 15px 20px;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 10px;
}

.box h2{
    font-size: 55px;
}

.box h3, .box p{
    margin-top: 35px;
    font-size: 25px;
}
`;