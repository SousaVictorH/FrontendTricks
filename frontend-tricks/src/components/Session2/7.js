import React from 'react';
import styled from 'styled-components';

import img from "../../images/bg.jpg";

function Component1(){
    return(
        <MainComponent>
            
            <div className="container">
                <div className="card">

                    <div className="imgBox">
                        <img src={img} alt="img"/>
                    </div>
                    
                    <div className="content">
                        <h2>Card One</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, laudantium iure! 
                            Iste suscipit corporis sit nemo temporibus illo 
                            cupiditate impedit ad velit voluptates, esse neque 
                            nihil facere vitae maxime accusantium?</p>
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
display: flex;
justify-content: center;
align-items: center;
background: #16384c;

.container{
    position: relative;
    width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
}

.container .card{
    position: relative;
    max-width: 300px;
    height: 215px;
    background: #fff;
    margin: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0.5px 20px rgba(0,0,0,0.5);
    transition: 0.3s ease-in-out;
}

.container .card:hover{
    height: 420px;
}

.container .card .imgBox{
    position: relative;
    width: 260px;
    height: 260px;
    top: -60px;
    box-shadow: 0 0.5px 20px rgba(0,0,0,0.2);
}

.container .card .imgBox img{
    max-width: 100%;
    border-radius: 4px;
}

.container .card .content{
    position: relative;
    margin: -140px;
    padding: 10px 15px;
}
`;