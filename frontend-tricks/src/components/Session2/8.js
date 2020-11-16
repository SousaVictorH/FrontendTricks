import React from 'react';
import styled from 'styled-components';

import img from "../../images/img.jpg";

function Component1() {
    return (
        <MainComponent>

            <div className="container">

                <img src={img} alt="img" className="image" />

                <div className="accordition-menu">

                    <div className="item" id="item1">
                        <a href="#item1" className="title">
                            <span>Lorem ipsum dolor sit amet?</span>
                            <i className="icon"></i>
                        </a>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero facere iusto quidem? Soluta dolor consequuntur cumque
                            voluptate beatae laborum eius accusantium necessitatibus assumenda
                            exercitationem molestiae, temporibus et architecto deleniti facere?
                        </p>
                    </div>

                    <div className="item" id="item2">
                        <a href="#item2" className="title">
                            <span>Lorem ipsum dolor sit amet?</span>
                            <i className="icon"></i>
                        </a>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero facere iusto quidem? Soluta dolor consequuntur cumque
                            voluptate beatae laborum eius accusantium necessitatibus assumenda
                            exercitationem molestiae, temporibus et architecto deleniti facere?
                        </p>
                    </div>

                    <div className="item" id="item3">
                        <a href="#item3" className="title">
                            <span>Lorem ipsum dolor sit amet?</span>
                            <i className="icon"></i>
                        </a>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero facere iusto quidem? Soluta dolor consequuntur cumque
                            voluptate beatae laborum eius accusantium necessitatibus assumenda
                            exercitationem molestiae, temporibus et architecto deleniti facere?
                        </p>
                    </div>

                    <div className="item" id="item4">
                        <a href="#item4" className="title">
                            <span>Lorem ipsum dolor sit amet?</span>
                            <i className="icon"></i>
                        </a>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero facere iusto quidem? Soluta dolor consequuntur cumque
                            voluptate beatae laborum eius accusantium necessitatibus assumenda
                            exercitationem molestiae, temporibus et architecto deleniti facere?
                        </p>
                    </div>

                </div>
            </div>

        </MainComponent>
    );
}

export default Component1;

const MainComponent = styled.div`

background: rgba(119,136,153);
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;

.container{
    max-width: 1200px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
  
.image, .accordion-menu{
    width: calc(50% - 20px);
    position: relative;
}

.image{
    margin-right: 20px;
}
  
.title{
    background-color: #e77f67;
    display: flex;
    color: #fff;
    padding: 20px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    align-items: center;
    justify-content: space-between;
}
  
.icon{
    position: relative;
    width: 14px;
}
  
.icon::before, .icon::after{
    content: "";
    position: absolute;
    width: 14px;
    height: 3px;
    background-color: #fff;
    top: -1.5px;
}
  
.icon::after{
    transform: rotate(90deg);
    transition: .5s linear;
}
  
.text{
    background-color: #ffffff60;
    color: #fff;
    line-height: 26px;
    margin: 6px 0;
    opacity: 0;
    height: 0;
}
  
.item:target .text{
    height: auto;
    opacity: 1;
    padding: 20px;
    margin: 12px 0;
}
  
.item:target .icon::after{
    transform: rotate(0);
}
  
@media screen and (max-width:1150px){
    .container{
      max-width: 600px;
    }
  
    .image, .accordion-menu{
      width: 100%;
      margin: 20px 0;
    }

    .container{
        flex-wrap: wrap;
    }
}
`;