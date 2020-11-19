import React from 'react';
import styled from 'styled-components';

function Component1(){
    return(
        <MainComponent>
            
            <div className="pricing-table">

                <div className="pricing-card">
                    <h3>Personal</h3>

                    <div className="price">
                        <sup>$</sup>15<span>/MO</span>
                    </div>

                    <ul>
                        <li><strong>3</strong>Website</li>
                        <li><strong>20 GB</strong>SSD</li>
                        <li><strong>1</strong>Domain Name</li>
                        <li><strong>5</strong>Email</li>
                        <li><strong>1X</strong>CPU & RAM</li>
                    </ul>
                    <a href="/10">Order Now</a>
                </div>

                <div className="pricing-card">
                    <h3>Professional</h3>

                    <div className="price">
                        <sup>$</sup>30<span>/MO</span>
                    </div>

                    <ul>
                        <li><strong>10</strong>Website</li>
                        <li><strong>50 GB</strong>SSD</li>
                        <li><strong>1</strong>Domain Name</li>
                        <li><strong>20</strong>Email</li>
                        <li><strong>1.5X</strong>CPU & RAM</li>
                    </ul>
                    <a href="/10">Order Now</a>
                </div>

                <div className="pricing-card">
                    <h3>Premium</h3>

                    <div className="price">
                        <sup>$</sup>40<span>/MO</span>
                    </div>

                    <ul>
                        <li><strong>3</strong>Website</li>
                        <li><strong>150 GB</strong>SSD</li>
                        <li><strong>1</strong>Domain Name</li>
                        <li><strong>40</strong>Email</li>
                        <li><strong>2X</strong>CPU & RAM</li>
                    </ul>
                    <a href="/10">Order Now</a>
                </div>

                <div className="pricing-card">
                    <h3>Ultimate</h3>

                    <div className="price">
                        <sup>$</sup>80<span>/MO</span>
                    </div>

                    <ul>
                        <li><strong>100</strong>Website</li>
                        <li><strong>500 GB</strong>SSD</li>
                        <li><strong>1</strong>Domain Name</li>
                        <li><strong>100</strong>Email</li>
                        <li><strong>4X</strong>CPU & RAM</li>
                    </ul>

                    <a href="/10">Order Now</a>
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
background: #30336b;

height: 100%;
min-height: 100vh;
width: 100%;
min-width: 100vw;

.pricing-table{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: min(1600px, 100%);
    margin: auto;
}
  
.pricing-card{
    flex: 1;
    max-width: 360px;
    background-color: #fff;
    margin: 20px 10px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    color: #2d2d2d;
    transition: .3s linear;
}
  
h3{
    background-color: #0fbcf9;
    display: inline-block;
    color: #fff;
    padding: 12px 30px;
    border-radius: 0 0 20px 20px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    transition: .4s linear;
}
  
.pricing-card:hover h3{
    box-shadow: 0 0 0 26em #0fbcf9;
}
  
.price{
    font-size: 70px;
    color: #0fbcf9;
    margin: 40px 0;
    transition: .2s linear;
}
  
.price sup, .price span{
    font-size: 22px;
    font-weight: 700;
}
  
.pricing-card:hover ,.pricing-card:hover .price{
    color: #fff;
}
  
.pricing-card li{
    font-size: 16px;
    padding: 10px 0;
    text-transform: uppercase;
}
  
a{
    display: inline-block;
    margin-bottom: 40px;
    margin-top: 80px;
    border: 2px solid #0fbcf9;
    color: #0fbcf9;
    padding: 18px 40px;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 500;
    transition: .3s linear;
    text-decoration: none;
}
  
a:hover{
    background-color: #0fbcf9;
    color: #fff;
}
  
@media screen and (max-width:1100px){
    .pricing-card{
      flex: 50%;
    }
}
`;