import React from 'react';
import styled from 'styled-components';

function Component1(){
    return(
        <MainComponent>
            
            <div className="container">

                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>01</h2>
                            <h3>Card one</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Harum at deserunt beatae recusandae ipsum perferendis temporibus 
                                aliquam similique eum accusantium? Deleniti, dolorum! Dolor voluptatem 
                                illo explicabo inventore? Illum, harum dolorem!
                            </p>
                            <a href="/9">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>02</h2>
                            <h3>Card two</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Harum at deserunt beatae recusandae ipsum perferendis temporibus 
                                aliquam similique eum accusantium? Deleniti, dolorum! Dolor voluptatem 
                                illo explicabo inventore? Illum, harum dolorem!
                            </p>
                            <a href="/9">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>03</h2>
                            <h3>Card three</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Harum at deserunt beatae recusandae ipsum perferendis temporibus 
                                aliquam similique eum accusantium? Deleniti, dolorum! Dolor voluptatem 
                                illo explicabo inventore? Illum, harum dolorem!
                            </p>
                            <a href="/9">Read More</a>
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
background: #ebf5fc;
height: 100%;
min-height: 100vh;
width: 100%;
min-width: 100vw;

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 0;
}

.card{
    margin: 35px;
    position: relative;
    width: 320px;
    height: 440px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05),
        inset -5px -5px 5px rgba(255, 255, 255, 0.5),
        5px 5px 5px rgba(0, 0, 0, 0.05),
        -5px -5px 5px rgba(255, 255, 255, 0.5);
    border-radius: 30px;
}

.box{
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
    background: #ebf5fc;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
}

.card:hover .box{
    transform: translateY(-50px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.content{
    padding: 20px;
    text-align: center;
}

.content h2{
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8em;
    color: rgba(0, 0, 0, 0.02);
    transition: .5s;
    pointer-events: none;
}

.card:hover .content h2{
    color: rgba(0, 0, 0, 0.05);
}

.content h3{
    font-size: 1.8em;
    color: #777;
    z-index: 1;
    transition: .5s;
}

.content p{
    font-size: 1em;
    font-weight: 300;
    color: #777;
    z-index: 1;
    transition: .5s;
}

.content a{
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    background: #03a9f4;
    margin-top: 45px;
    border-radius: 20px;
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.content a:hover{
    background: #fff;
    color: #03a9f4;
    transition: .5s;
}
`;